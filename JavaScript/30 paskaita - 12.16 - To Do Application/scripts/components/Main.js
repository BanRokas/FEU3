import Form from './Form.js';
import Modal from './Modal.js'; // trinti
import TaskContainer from './TaskContainer.js'

export default class Main{
  constructor(){
    return this.render();
  }

  render = () => {
    this.main = document.createElement('main');

    this.main.append(new Form());
    this.main.append(new Modal({
      completed: true,
      id: 0.3499848251,
      name: "dance on the moon"
    })); // trinti
    this.main.append(new TaskContainer());

    return this.main;
  }
}