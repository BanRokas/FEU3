import Task from './Task.js';

export default class TaskContainer{
  constructor(){
    return this.render();
  }

  render = () => {
    this.section = document.createElement('section');
    this.section.classList.add('tasks-container');

    this.tasks = document.createElement('div');
    this.tasks.classList.add('tasks');
    this.section.append(this.tasks);

    console.log(JSON.parse(localStorage.getItem('tasks')));

    JSON.parse(localStorage.getItem('tasks')).forEach(task => {
      this.tasks.append(new Task(task));
    });

    return this.section;
  }
}