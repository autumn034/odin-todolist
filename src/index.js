import "./style.css"

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

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || projectsTemplate;
let activeProjectId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY)) || 1;

class Task 
{
    constructor (name, due) 
    {
        this.name = name;
        this.due = due;
        this.doneStatus = false;
    }
}


const projectsTemplate = [
    {id: 1, name: "Work", tasks: [new Task("Test1", Date.now().toString())] }, 
    {id: 2, name: "School", tasks: [new Task("Test2", Date.now().toString())]}, 
    {id: 3, name: "Personal", tasks: [new Task("Test3", Date.now().toString())]}
];


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

createProjectSubmitButton.addEventListener("click", (e) => {
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

function saveAndRender() {
    save();
    render();
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
    localStorage.setItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY, JSON.stringify(activeProjectId));
}

let createProject = (name) => {
    return {id: Date.now().toString(), name: name, tasks: []};
}

function render() {
    clearElement(projectsContainerDiv);
    clearElement(taskContainer);

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
        }

        projectButton.dataset.projectId = project.id;
        projectButton.appendChild(document.createTextNode(project.name));

        projectsContainerDiv.appendChild(projectButton);
    });
}

function renderTasks(projectId) {

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
