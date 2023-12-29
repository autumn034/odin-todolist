class Task {
    constructor (name, due) {
        this.name = name;
        this.due = due;
        this.doneStatus = false;
    }
}

const projectsTemplate = [
    {id: 1, name: "Work"}, 
    {id: 2, name: "School"}, 
    {id: 3, name: "Personal"}
];


const LOCAL_STORAGE_PROJECTS_KEY = "odintodo.projects";
const LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY = "odintodo.focus-project";

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || projectsTemplate;
let activeProjectId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY)) || 1;



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


const projectsContainerDiv = document.querySelector("#project_container");

const addNewProjectsDiv = document.querySelector(".projects__add__button");
const projectsNewProjectFormDiv = document.querySelector(".projects__new-project-form");
const projectsFormCancelButton = document.querySelector("#project_addCancelButton");
const projectsFormAddButton = document.querySelector("#project_addSubmitButton");
const newProjectInput = document.querySelector(".projects__new-project-form__text-input");


projectsContainerDiv.addEventListener("click", e => {
    if (!(e.target.classList.contains("projects__list__item"))) {
        return;
    }

    activeProjectId = e.target.dataset.projectId;
    saveAndRender();
});


addNewProjectsDiv.addEventListener("click", (e) => {
    addNewProjectsDiv.style.display = "none";
    projectsNewProjectFormDiv.style.display = "block"; 
});

projectsFormCancelButton.addEventListener("click", (e) => {
    addNewProjectsDiv.style.display = "block";
    projectsNewProjectFormDiv.style.display = "none";
});

projectsFormAddButton.addEventListener("click", (e) => {
    addNewProjectsDiv.style.display = "block";
    projectsNewProjectFormDiv.style.display = "none";
    let newProjectInputValue = newProjectInput.value;

    if (newProjectInputValue == null || newProjectInputValue == "") {
        alert("Blank value cannot be used for project name.");
        return
    }

    let newProject = createProject(newProjectInputValue);
    projects.push(newProject);
    newProjectInput.value = "";
    
    saveAndRender();
});

let createProject = (name) => {
    return {id: Date.now().toString(), name: name, tasks: []};
}

function render() {
    clearElement(projectsContainerDiv);

    projects.forEach(project => {
        let listItemDiv = document.createElement("div");
        listItemDiv.className = "projects__list__item";
        listItemDiv.classList.add("button");
        listItemDiv.classList.add("button--project");

        // add css to a project that show that it was selected
        if (activeProjectId == project.id) 
        {
            listItemDiv.classList.add("projects__list__item--active");
        }

        listItemDiv.dataset.projectId = project.id;
        listItemDiv.appendChild(document.createTextNode(project.name));

        projectsContainerDiv.appendChild(listItemDiv);
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
