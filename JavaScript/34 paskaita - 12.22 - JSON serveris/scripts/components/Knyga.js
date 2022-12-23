export default class Knyga{
  constructor(props){
    this.props = props;
    return this.render();
  }

  deleteFromDataFile = (id) => {
    console.log('trinsime elementa su id: ' + id);
    fetch(`http://localhost:3000/knygos/${id}`, {method: "DELETE"});
  }

  render = () => {
    this.knygosDiv = document.createElement('div');
    this.knygosDiv.classList.add(`${this.props.id}`);
    this.knygosDiv.classList.add(`knyga`);

    this.trinimoIkona = document.createElement('i');
    this.trinimoIkona.classList.add('fas');
    this.trinimoIkona.classList.add('fa-trash');
    this.knygosDiv.append(this.trinimoIkona);

    this.editIkona = document.createElement('i');
    this.editIkona.classList.add('fas');
    this.editIkona.classList.add('fa-edit');
    this.knygosDiv.append(this.editIkona);




    this.trinimoIkona.addEventListener('click', e => {
      e.target.parentElement.remove();
      this.deleteFromDataFile(this.props.id);
    });

    return this.knygosDiv;
  }
}