import "./style.css"

class Task 
{
    constructor (id, name, due)
    {
        this.id = id
        this.name = name;
        this.due = due;
        this.doneStatus = false;
    }
}

const projectsTemplate = 
[
    {id: 1, name: "Work", tasks: [new Task(1, "Test1", "12/11/2023"), new Task(2, "Test2", "12/11/2023")] }, 
    {id: 2, name: "School", tasks: [new Task(1, "Test2", "12/11/2023")]}, 
    {id: 3, name: "Personal", tasks: [new Task(1, "Test3", "12/11/2023")]}
];

const LOCAL_STORAGE_PROJECTS_KEY = "odintodo.projects";
const LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY = "odintodo.focus-project";
const projectsContainerDiv = document.querySelector("#projectContainer");
const createProjectButton = document.querySelector("#createProjectButton");
const createProjectForm = document.querySelector("#createProjectForm");
const createProjectSubmitButton = document.querySelector("#createProjectSubmitButton");
const createProjectCancelButton = document.querySelector("#createProjectCancelButton");
const createProjectTextInput = document.querySelector("#createProjectTextInput");
const taskContainer = document.querySelector("#taskContainer");
const activeProjectHeader = document.querySelector("#activeProjectHeader");
const deleteProjectButton = document.querySelector("#deleteProjectButton");
const mainContainer = document.querySelector("#main");
const taskTemplate = document.querySelector("#task-template");
const addTaskTextInput = document.querySelector("#addTaskTextInput");
const confirmAddTaskButton = document.querySelector("#confirmAddTaskButton");
const cancelAddTaskButton = document.querySelector("#cancelAddTaskButton");
const addTaskDate = document.querySelector("#addTaskDate");
const showTaskFormButton = document.querySelector("#showTaskFormButton");
const newTaskForm = document.querySelector("#newTaskForm");

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || projectsTemplate;
let activeProjectId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY)) || null;


showTaskFormButton.addEventListener("click", e => 
{
    newTaskForm.style.display = "block";    
    showTaskFormButton.style.display = "none";
});

confirmAddTaskButton.addEventListener("click", e => 
{
    e.preventDefault();
    if (addTaskDate.value == "" || addTaskDate.value == null) 
    {
        alert("Please enter the task date.");
        return;
    }

    if (addTaskTextInput.value == "" || addTaskDate.value == null)
    {
        alert("Please input the task name.")
        return;
    }

    if (activeProjectId == "" || activeProjectId == null)
    {
        alert("No active project");
        return;
    }

    let taskObject = createTask(addTaskTextInput.value, addTaskDate.value);
    let projectObject = projects.find(project => project.id == activeProjectId);
    showTaskFormButton.style.display = "";
    newTaskForm.style.display = "none";

    projectObject.tasks.push(taskObject);
    saveAndRender();

});

cancelAddTaskButton.addEventListener("click", e => 
{
    e.preventDefault();
    addTaskTextInput.value = "";
    addTaskDate.value = null;
    showTaskFormButton.style.display = "";
    newTaskForm.style.display = "none";

});

projectsContainerDiv.addEventListener("click", e => 
{
    // prevents tasks from disappearing when clicking on whitespaces within the project container
    if (!(e.target.classList.contains("projects__button")))
    {
        return;
    }

    activeProjectId = e.target.dataset.projectId;
    saveAndRender();
});

createProjectButton.addEventListener("click", (e) => 
{
    createProjectButton.style.display = "none";
    createProjectForm.style.display = "block"; 
});

createProjectCancelButton.addEventListener("click", (e) => 
{
    createProjectButton.style.display = "block";
    createProjectForm.style.display = "none";
});

createProjectSubmitButton.addEventListener("click", (e) => 
{
    createProjectButton.style.display = "block";
    createProjectForm.style.display = "none";
    let createProjectTextInputValue = createProjectTextInput.value;

    if (createProjectTextInputValue == null || createProjectTextInputValue == "") 
    {
        alert("Blank value cannot be used for project name.");
        return
    }

    let newProject = createProject(createProjectTextInputValue);
    projects.push(newProject);
    createProjectTextInput.value = "";
    
    saveAndRender();
});

deleteProjectButton.addEventListener("click", () => 
{
    projects = projects.filter((project) => project.id != activeProjectId);
    activeProjectId = null;
    saveAndRender();
});

function saveAndRender() 
{
    save();
    render();
}

function save() 
{
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
    localStorage.setItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY, JSON.stringify(activeProjectId));
}

function createProject(name) 
{
    return {id: Date.now().toString(), name: name, tasks: []};
}

function createTask(name, date) 
{
    return new Task(Date.now().toString(), name, date);
}


function render() 
{
    clearElement(projectsContainerDiv);

    if (activeProjectId == null) 
    {
        mainContainer.style.display = "none";
    }
    else
    {
        mainContainer.style.display = "";
    }

    projects.forEach(project => {
        let projectButton = document.createElement("button");
        projectButton.classList.add("projects__button");
      
        if (activeProjectId == project.id) 
        {            
            activeProjectHeader.textContent = project.name;
            projectButton.classList.add("projects__button--disable");
            renderTasks(project);
        }

        projectButton.dataset.projectId = project.id;
        projectButton.appendChild(document.createTextNode(project.name));

        projectsContainerDiv.appendChild(projectButton);
    });
}

function renderTasks(project) {
    clearElement(taskContainer);
    project.tasks.forEach(task => 
    {
        let taskElement = document.importNode(taskTemplate.content, true);

        let taskNameElement = taskElement.querySelector(".tasks__name");
        taskNameElement.innerText = task.name;
        if (task.doneStatus == true) {
            taskNameElement.classList.add("task__checked");
        }

        let taskDueDateElement = taskElement.querySelector(".tasks__due-date");
        taskDueDateElement.innerText = task.due;

        let taskCheckElement = taskElement.querySelector(".tasks__check");
        taskCheckElement.id = task.id;


        let taskCheckButton = taskElement.querySelector(".tasks__check");

        taskCheckButton.addEventListener("click", e => 
        {
            let project = getProjectFromId(activeProjectId);
            let task = project.tasks.find(ele => ele.id == e.target.id);

            if (task.doneStatus) {
                task.doneStatus = false;
            } else {
                task.doneStatus = true;
            }
            // let parentProject = getProjectFromId(activeProjectId);
            // for (let i = 0; i < parentProject.tasks.length; i++)
            // {
            //     if (parentProject.tasks[i].id == e.target.id) 
            //     {
            //         parentProject.tasks.splice(i, 1);
            //         break;
            //     }
            // }

            saveAndRender();
            
        });



        taskContainer.appendChild(taskElement);
    });
}

function getProjectFromId(id) 
{
    return projects.find(project => project.id == id);
}

function clearElement(element) {
    if (element == null) {
        return false;
    }

    while (element.firstChild) {
        element.firstChild.remove();
    }
    
    return true;
}


render();