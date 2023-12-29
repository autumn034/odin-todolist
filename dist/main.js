/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Task {\r\n    constructor (name, due) {\r\n        this.name = name;\r\n        this.due = due;\r\n        this.doneStatus = false;\r\n    }\r\n}\r\n\r\nconst projectsTemplate = [\r\n    {id: 1, name: \"Work\"}, \r\n    {id: 2, name: \"School\"}, \r\n    {id: 3, name: \"Personal\"}\r\n];\r\n\r\n\r\nconst LOCAL_STORAGE_PROJECTS_KEY = \"odintodo.projects\";\r\nconst LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY = \"odintodo.focus-project\";\r\n\r\nlet projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || projectsTemplate;\r\nlet activeProjectId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY)) || 1;\r\n\r\n\r\n\r\nfunction saveAndRender()\r\n{\r\n    save();\r\n    render();\r\n}\r\n\r\nfunction save() \r\n{\r\n    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));\r\n    localStorage.setItem(LOCAL_STORAGE_ACTIVE_PROJECT_ID_KEY, JSON.stringify(activeProjectId));\r\n}\r\n\r\n\r\nconst projectsContainerDiv = document.querySelector(\"#project_container\");\r\n\r\nconst addNewProjectsDiv = document.querySelector(\".projects__add__button\");\r\nconst projectsNewProjectFormDiv = document.querySelector(\".projects__new-project-form\");\r\nconst projectsFormCancelButton = document.querySelector(\"#project_addCancelButton\");\r\nconst projectsFormAddButton = document.querySelector(\"#project_addSubmitButton\");\r\nconst newProjectInput = document.querySelector(\".projects__new-project-form__text-input\");\r\n\r\n\r\nprojectsContainerDiv.addEventListener(\"click\", e => {\r\n    if (!(e.target.classList.contains(\"projects__list__item\"))) {\r\n        return;\r\n    }\r\n\r\n    activeProjectId = e.target.dataset.projectId;\r\n    saveAndRender();\r\n});\r\n\r\n\r\naddNewProjectsDiv.addEventListener(\"click\", (e) => {\r\n    addNewProjectsDiv.style.display = \"none\";\r\n    projectsNewProjectFormDiv.style.display = \"block\"; \r\n});\r\n\r\nprojectsFormCancelButton.addEventListener(\"click\", (e) => {\r\n    addNewProjectsDiv.style.display = \"block\";\r\n    projectsNewProjectFormDiv.style.display = \"none\";\r\n});\r\n\r\nprojectsFormAddButton.addEventListener(\"click\", (e) => {\r\n    addNewProjectsDiv.style.display = \"block\";\r\n    projectsNewProjectFormDiv.style.display = \"none\";\r\n    let newProjectInputValue = newProjectInput.value;\r\n\r\n    if (newProjectInputValue == null || newProjectInputValue == \"\") {\r\n        alert(\"Blank value cannot be used for project name.\");\r\n        return\r\n    }\r\n\r\n    let newProject = createProject(newProjectInputValue);\r\n    projects.push(newProject);\r\n    newProjectInput.value = \"\";\r\n    \r\n    saveAndRender();\r\n});\r\n\r\nlet createProject = (name) => {\r\n    return {id: Date.now().toString(), name: name, tasks: []};\r\n}\r\n\r\nfunction render() {\r\n    clearElement(projectsContainerDiv);\r\n\r\n    projects.forEach(project => {\r\n        let listItemDiv = document.createElement(\"div\");\r\n        listItemDiv.className = \"projects__list__item\";\r\n        listItemDiv.classList.add(\"button\");\r\n        listItemDiv.classList.add(\"button--project\");\r\n\r\n        // add css to a project that show that it was selected\r\n        if (activeProjectId == project.id) \r\n        {\r\n            listItemDiv.classList.add(\"projects__list__item--active\");\r\n        }\r\n\r\n        listItemDiv.dataset.projectId = project.id;\r\n        listItemDiv.appendChild(document.createTextNode(project.name));\r\n\r\n        projectsContainerDiv.appendChild(listItemDiv);\r\n    });\r\n}\r\n\r\n\r\nfunction clearElement(element) {\r\n    if (element == null) {\r\n        return false;\r\n    }\r\n\r\n    while (element.firstChild) {\r\n        element.firstChild.remove();\r\n    }\r\n    \r\n    return true;\r\n}\r\n\r\n\r\nrender();\r\n\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;