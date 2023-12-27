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
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || projectsTemplate;


function saveAndRender()
{
    save();
    render();
}

function save() 
{
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
}



const projectsContainerDiv = document.querySelector(".projects__list");
const addNewProjectsDiv = document.querySelector(".projects__add__button");
const projectsNewProjectFormDiv = document.querySelector(".projects__new-project-form");
const projectsFormCancelButton = document.querySelector(".projects__new-project-form__button--cancel");
const projectsFormAddButton = document.querySelector(".projects__new-project-form__button--create");
const newProjectInput = document.querySelector(".projects__new-project-form__text-input");

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
        listItemDiv.dataset.projectId = project.id;

        let listItemConfigButton = document.createElement("img");
        listItemConfigButton.className = "projects__list__item__config__button";
        listItemConfigButton.setAttribute("src", "asset/cog.svg");
        listItemConfigButton.setAttribute("alt", "Edit Project");

        listItemDiv.appendChild(document.createTextNode(project.name));
        listItemDiv.appendChild(listItemConfigButton);

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


clearElement(projectsContainerDiv);
render();


// document.body.appendChild(component());