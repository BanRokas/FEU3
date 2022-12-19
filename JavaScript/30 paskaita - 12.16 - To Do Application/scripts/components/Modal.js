export default class Modal{
  constructor(props){
    this.props = props;
    return this.render();
  }

  render = () => {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');

    this.form = document.createElement('form');
    this.form.classList.add('form');
    this.form.classList.add('single-task-form');
    this.modal.append(this.form);

    this.heading = document.createElement('h4');
    this.text = document.createTextNode('Edit Task');
    this.heading.append(this.text);
    this.form.append(this.heading);

    this.div = document.createElement('div');
    this.div.classList.add('form-control');
    this.form.append(this.div);

    this.label = document.createElement('label');
    this.label.setAttribute('for', 'name');
    this.label.classList.add('form-label');
    this.text = document.createTextNode('Name');
    this.label.append(this.text);
    this.div.append(this.label);

    this.input = document.createElement('input');
    this.input.classList.add('form-input');
    this.input.classList.add('task-edit-name');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('name', 'name');
    this.input.setAttribute('value', this.props.name);
    this.div.append(this.input);

    this.button = document.createElement('button');
    this.button.classList.add('btn');
    this.button.classList.add('btn-block');
    this.button.classList.add('task-edit-btn');
    this.button.setAttribute('type', 'submit');
    this.text = document.createTextNode('Edit');
    this.button.append(this.text);
    this.form.append(this.button);

    this.error = document.createElement('div');
    this.error.classList.add('form-alert');
    this.error.classList.add('text-small');
    this.text = document.createTextNode('there was an error');
    this.error.append(this.text);
    this.form.append(this.error);

    // form veikimas

    return this.modal;
  }
}