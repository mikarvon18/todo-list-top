import {refreshView, refreshProjects} from "./dom";
import "./style.css";


class TodoItem {
    constructor(title, desc, dueDate, priority, isDone) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
    };
    changeTitle(newTitle){
        this.title = newTitle;
    };
    changeDesc(newDesc){
        this.desc = newDesc;
    };
    changeDueDate(newDueDate){
        this.dueDate = newDueDate;
    };
    changePriority(newPriority){
        this.priority = newPriority;
    };
    toggleDone(){
        if (this.isDone) {
            this.isDone = false;
        } else {
            this.isDone = true;
        }
    };
};

class TodoProject {
    constructor(title) {
        this.items = [];
        this.title = title;
    };
    addItem(title, desc, dueDate, priority, isDone) {
        this.items.push(new TodoItem(title, desc, dueDate, priority, isDone));
    };
    printItems(){
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].title);
            
        }
    }
};

function addItem(project, title, desc, dueDate, priority, isDone){
    console.log("Adding item...");
    project.addItem(title, desc, dueDate, priority, isDone);
    refreshView(project);
};




let projects = []
let project = new TodoProject("New Project");
let project2 = new TodoProject("A second project");
projects.push(project, project2);
console.log(project.title);


project.addItem("Walk", "walk", "date", 1, false);
project.addItem("Run", "remember to run!", "date", 2, false);
project2.addItem("Eat", "eat", "date", 1, false);

project.printItems();
project.items[0].changeTitle("Swim");
project.printItems();

refreshProjects(projects);
refreshView(project);

export {addItem};
