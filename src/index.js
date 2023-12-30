const LOCAL_STORAGE_PROJECTS_KEY = "odintodo.projects";
const LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY = "odintodo.focus-project";
const projectsContainerDiv = document.querySelector("#projectContainer");
const createProjectButton = document.querySelector("#createProjectButton");
const createProjectForm = document.querySelector("#createProjectForm");
const createProjectSubmitButton = document.querySelector("#createProjectSubmitButton");
const createProjectCancelButton = document.querySelector("#createProjectCancelButton");
const createProjectTextInput = document.querySelector("#createProjectTextInput");

const projectsTemplate = [
    {id: 1, name: "Work"}, 
    {id: 2, name: "School"}, 
    {id: 3, name: "Personal"}
];

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || projectsTemplate;
let activeProjectId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY)) || 1;


class Task {
    constructor (name, due) {
        this.name = name;
        this.due = due;
        this.doneStatus = false;
    }
}

projectsContainerDiv.addEventListener("click", e => {
    activeProjectId = e.target.dataset.projectId;
    saveAndRender();
});


createProjectButton.addEventListener("click", (e) => {
    createProjectButton.style.display = "none";
    createProjectForm.style.display = "block"; 
});

createProjectCancelButton.addEventListener("click", (e) => {
    createProjectButton.style.display = "block";
    createProjectForm.style.display = "none";
});

createProjectSubmitButton.addEventListener("click", (e) => {
    createProjectButton.style.display = "block";
    createProjectForm.style.display = "none";
    let createProjectTextInputValue = createProjectTextInput.value;

    if (createProjectTextInputValue == null || createProjectTextInputValue == "") {
        alert("Blank value cannot be used for project name.");
        return
    }

    let newProject = createProject(createProjectTextInputValue);
    projects.push(newProject);
    createProjectTextInput.value = "";
    
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

    projects.forEach(project => {
        let projectButton = document.createElement("button");
        projectButton.classList.add("projects__button");
        
        
        // listItemDiv = document.createElement("div");
        // listItemDiv.className = "projects__list__item";
        // listItemDiv.classList.add("button");
        // listItemDiv.classList.add("button--project");
        // add css to a project that show that it was selected


        if (activeProjectId == project.id) 
        {
            projectButton.classList.add("projects__button--disable");
        }

        projectButton.dataset.projectId = project.id;
        projectButton.appendChild(document.createTextNode(project.name));

        projectsContainerDiv.appendChild(projectButton);
    });
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
