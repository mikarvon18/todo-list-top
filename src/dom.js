import {addItem} from "./index";

function createItem(project, container) {
    console.log(`Creating item for: ${project.title}`);
    let newItem = document.createElement("div");
    let newForm = document.createElement("form");
    let title = document.createElement("input");
    let acceptBtn = document.createElement("button");
    
    acceptBtn.type = "submit";

    title.placeholder = "title";
    title.required = true;
    title.type = "text";
    title.name = "title";
    newForm.onsubmit = function(event){
        event.preventDefault();
        //console.log(this.title.value);
        //console.log(event.target);
        
        addItem(project, this.title.value, "test", "date", 3, false);
    }
    
    newForm.appendChild(title);
    newForm.appendChild(acceptBtn);
    newItem.appendChild(newForm);
    newItem.classList.add("new-item-form")
    container.appendChild(newItem);
};
function refreshView(project){
    let projectItemContainer = document.querySelector("#project-item-container");
    projectItemContainer.innerHTML = "";
    
    let newItemBtn = document.createElement("button");
    newItemBtn.textContent = "+";
    newItemBtn.ariaModal = "test";
    newItemBtn.addEventListener("click", function(){
        newItemBtn.disabled = true;
        createItem(project, projectItemContainer);
    })
    projectItemContainer.appendChild(newItemBtn);
    
    for (let i = 0; i < project.items.length; i++) {
        let item = document.createElement("div");
        item.id = "#test";
        item.classList.add("project-item");
        item.textContent = project.items[i].title;
        projectItemContainer.appendChild(item);
        
    };
    
};

function refreshProjects(projects){
    let projectContainer = document.querySelector("#project-container");

    for (let i = 0; i < projects.length; i++) {
        let project = document.createElement("div");
        project.classList.add("project");
        project.textContent = projects[i].title;
        project.addEventListener("click", function(){
            refreshView(projects[i]);
        });
        projectContainer.appendChild(project);
        
    }
    let newProjectBtn = document.createElement("button");
    newProjectBtn.textContent = "+";
    projectContainer.appendChild(newProjectBtn);
}

export {refreshView, refreshProjects};