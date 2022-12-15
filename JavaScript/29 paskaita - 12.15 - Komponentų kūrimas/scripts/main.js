//              KOMPONENTAI

//      UL/OL 
{
  class List{
    constructor(props){
      this.props = props;
      return this.render();
    }

    render = () => {
      this.htmlElement = document.createElement(this.props.type);

      Object.keys(this.props.attributes).forEach(attribute => {
        this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
      });

      this.props.listItems.forEach(listItem => {
        this.li = document.createElement('li');
        this.liTextNode = document.createTextNode(listItem.text);
        this.li.append(this.liTextNode);
        Object.keys(listItem.attributes).forEach(attribute => {
          this.li.setAttribute(attribute, listItem.attributes[attribute]);
        });
        this.htmlElement.append(this.li);
      });

      return this.htmlElement;
    }
  }

  let list = new List({
    type: 'ul',
    attributes: {
      class: 'lightThemeList',
      id: 'superUnorderedList'
    },
    listItems: [
      {
        text: 'list item tekstas1',
        attributes: {
          class: 'listItem',
          style: 'color: yellow'
        }
      },{
        text: 'list item tekstas2',
        attributes: {
          class: 'listItem',
          style: 'color: green'
        }
      },{
        text: 'list item tekstas3',
        attributes: {
          class: 'listItem',
          style: 'color: red'
        }
      }
    ]
  });

  document.querySelector("body").append(list);
}

//      SELECT
