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

eval("class Task {\r\n    constructor (name, due) {\r\n        this.name = name;\r\n        this.due = due;\r\n        this.doneStatus = false;\r\n    }\r\n}\r\n\r\nlet projects = [\r\n    {id: 1, name: \"Work\"}, \r\n    {id: 2, name: \"School\"}, \r\n    {id: 3, name: \"Personal\"}\r\n]\r\nconst projectsContainerDiv = document.querySelector(\".projects__list\");\r\nconst addNewProjectsDiv = document.querySelector(\".projects__add__button\");\r\nconst projectsNewProjectFormDiv = document.querySelector(\".projects__new-project-form\");\r\nconst projectsFormCancelButton = document.querySelector(\".projects__new-project-form__button--cancel\");\r\nconst projectsFormAddButton = document.querySelector(\".projects__new-project-form__button--create\");\r\nconst projectsProjectTextInput = document.querySelector(\".projects__new-project-form__text-input\");\r\n\r\naddNewProjectsDiv.addEventListener(\"click\", (e) => {\r\n    addNewProjectsDiv.style.display = \"none\";\r\n    projectsNewProjectFormDiv.style.display = \"block\"; \r\n});\r\n\r\nprojectsFormCancelButton.addEventListener(\"click\", (e) => {\r\n    addNewProjectsDiv.style.display = \"block\";\r\n    projectsNewProjectFormDiv.style.display = \"none\";\r\n});\r\n\r\nprojectsFormAddButton.addEventListener(\"click\", (e) => {\r\n    console.log(projectsProjectTextInput.value);\r\n    addNewProjectsDiv.style.display = \"block\";\r\n    projectsNewProjectFormDiv.style.display = \"none\";\r\n\r\n    let newProject = createProject(projectsProjectTextInput.value);\r\n    projects.push(newProject);\r\n    projectsProjectTextInput.value = \"\";\r\n    \r\n    render();\r\n    console.log(projects);\r\n});\r\n\r\nlet createProject = (name) => {\r\n    return {id: Date.now().toString(), name: name, tasks: []};\r\n}\r\n\r\n\r\nfunction render() {\r\n    clearElement(projectsContainerDiv);\r\n\r\n    projects.forEach(project => {\r\n        let listItemDiv = document.createElement(\"div\");\r\n        listItemDiv.className = \"projects__list__item\";\r\n        listItemDiv.dataset.projectId = project.id;\r\n\r\n        let listItemConfigButton = document.createElement(\"img\");\r\n        listItemConfigButton.className = \"projects__list__item__config__button\";\r\n        listItemConfigButton.setAttribute(\"src\", \"asset/cog.svg\");\r\n        listItemConfigButton.setAttribute(\"alt\", \"Edit Project\");\r\n\r\n        listItemDiv.appendChild(document.createTextNode(project.name));\r\n        listItemDiv.appendChild(listItemConfigButton);\r\n\r\n        projectsContainerDiv.appendChild(listItemDiv);\r\n    });\r\n}\r\n\r\n\r\nfunction clearElement(element) {\r\n    if (element == null) {\r\n        return false;\r\n    }\r\n\r\n    while (element.firstChild) {\r\n        element.firstChild.remove();\r\n    }\r\n    \r\n    return true;\r\n}\r\n\r\n\r\nclearElement(projectsContainerDiv);\r\nrender();\r\n\r\n\r\n// document.body.appendChild(component());\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

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