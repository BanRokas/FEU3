export default class Task{
  constructor(props){
    this.props = props;
    return this.render();
  }

  deleteItem = (id) => {
    let data = JSON.parse(localStorage.getItem('tasks'));
    data = data.filter(item => item.id !== id);
    localStorage.setItem('tasks', JSON.stringify(data));
  }
  
  editItem = (id, newName) => {
    let data = JSON.parse(localStorage.getItem('tasks'));
    
    data = data.map(item => {
      if(item.id === id){
        return {
          id: item.id,
          name: newName,
          completed: item.completed
        }
      } else {
        return item;
      }
    });
    
    localStorage.setItem('tasks', JSON.stringify(data));
  }
  
  complete_uncompleteItem = (id) => {
    let data = JSON.parse(localStorage.getItem('tasks'));
  
    data = data.map(item => {
      if(item.id === id){
        if(item.completed){
          return {
            id: item.id,
            name: item.name,
            completed: false
          }
        } else {
          return {
            id: item.id,
            name: item.name,
            completed: true
          }
        }
      } else {
        return item;
      }
    });
  
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  render = () => {
    this.singleTask = document.createElement('div');
    this.singleTask.classList.add('single-task');
    this.props.completed && this.singleTask.classList.add('task-completed');

    this.heading = document.createElement('h5');
    this.i = document.createElement('i');
    this.i.classList.add('far');
    this.i.classList.add('fa-check-circle');
    this.text = document.createTextNode(this.props.name);
    this.heading.append(this.i, this.text);
    this.singleTask.append(this.heading);
    
    this.div = document.createElement('div');
    this.div.classList.add('task-links');
    this.singleTask.append(this.div);
    this.a = document.createElement('a');
    this.a.classList.add('edit-link');
    this.div.append(this.a);
    this.edit = document.createElement('i');
    this.edit.classList.add('fas');
    this.edit.classList.add('fa-edit');
    this.a.append(this.edit);
    
    this.button = document.createElement('button');
    this.button.classList.add('delete-btn');
    this.button.setAttribute('type', 'button');
    this.div.append(this.button);
    this.delete = document.createElement('i');
    this.delete.classList.add('fas');
    this.delete.classList.add('fa-trash');
    this.button.append(this.delete);

    this.singleTask.addEventListener('click', (e) => {
      if(e.target !== this.edit && e.target !== this.delete){
        this.singleTask.classList.toggle('task-completed');
        this.complete_uncompleteItem(this.props.id);
      }
    });
    this.edit.addEventListener('click', (e) => {
      console.log('edit stuff');
      console.log(this.props.id);
      // need to finish with da focken modal
    });
    this.delete.addEventListener('click', () => {
      this.deleteItem(this.props.id);
      this.singleTask.remove();
    });

    return this.singleTask;
  }
}