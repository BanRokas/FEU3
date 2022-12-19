import Task from './Task.js';

export default class Form{
  constructor(){
    return this.render();
  }

  addItem = (name) => {
    let data = JSON.parse(localStorage.getItem('tasks'));
    if(name === '') {
      this.small1.style.opacity = 1;
      setTimeout( () => this.small1.style.opacity = 0, 2000);
    } else if(data.find(item => item.name == name)){
      this.small2.style.opacity = 1;
      setTimeout( () => this.small2.style.opacity = 0, 2000);
    } else {
      let item = {id: Math.random().toFixed(10)*1, name: name, completed: false};
      data.push(item);
      localStorage.setItem('tasks', JSON.stringify(data));
      document.querySelector('.tasks').append(new Task(item));
      return item;
    }
  }
  
  render = () => {
    this.form = document.createElement('form');
    this.form.classList.add('form');
    this.form.classList.add('task-form');

    this.heading = document.createElement('h4');
    this.text = document.createTextNode('Your tasks');
    this.heading.append(this.text);
    this.form.append(this.heading);

    this.div = document.createElement('div');
    this.div.classList.add('form-control');
    this.input = document.createElement('input');
    this.input.classList.add('form-input');
    this.input.classList.add('task-input');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('name', 'name');
    this.input.setAttribute('placeholder', 'e.g. wash dishes');
    this.button = document.createElement('button');
    this.button.classList.add('btn');
    this.button.classList.add('submit-btn');
    this.button.setAttribute('type', 'submit');
    this.text = document.createTextNode('Add');
    this.button.append(this.text);
    this.div.append(this.input, this.button)
    this.form.append(this.div);

    this.small1 = document.createElement('small');
    this.small1.classList.add('form-alert');
    this.text = document.createTextNode(`Error: negalimas tuščias task'as.`);
    this.small1.append(this.text);
    this.form.append(this.small1);

    this.small2 = document.createElement('small');
    this.small2.classList.add('form-alert');
    this.text = document.createTextNode(`Error: task'as su tokiu vardu jau yra.`);
    this.small2.append(this.text);
    this.form.append(this.small2);

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.addItem(e.target.elements.name.value.toLowerCase());
      this.input.value = '';
    });

    return this.form;
  }
}