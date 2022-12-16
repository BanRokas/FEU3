export default class Table{
  constructor(props){
    this.props = props;
    return this.render();
  }

  render = () =>{
    this.htmlElement = document.createElement(`table`);
    if(this.props.tableAttributes){
      Object.keys(this.props.tableAttributes).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.tableAttributes[raktas]);
      });
    }

    this.tableHead = document.createElement('thead');
    this.tableRow = document.createElement('tr');
    Object.keys(this.props.tableData[0]).forEach(th => {
      this.th = document.createElement('th');
      this.text = document.createTextNode(th);
      this.th.append(this.text);
      this.tableRow.append(this.th);
    });
    this.tableHead.append(this.tableRow);

    this.tableBody = document.createElement('tbody');
    this.props.tableData.forEach(row => {
      this.tableRow = document.createElement('tr');
      for(const td in row){ // galima buvo daryti su Object.keys(row)
        this.td = document.createElement('td');
        this.text = document.createTextNode(row[td]);
        this.td.append(this.text);
        this.tableRow.append(this.td);
      }
      this.tableBody.append(this.tableRow);
    });

    this.htmlElement.append(this.tableHead, this.tableBody);
    return this.htmlElement;
  }
}

// let table = new Table({
//   tableAttributes:{

//   },
//   tableData : [{
//     vardas: "Rokas",
//     pavarde: "Banaitis",
//     amzius: 26
//   }, {
//     vardas: "Rokas2",
//     pavarde: "Banaitis2",
//     amzius: 27
//   }]
// });