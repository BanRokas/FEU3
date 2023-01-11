import ListItem from './ListItem';

const List = (props) => {
  return (
    <ul>
      {
        props.data.map((item, index) => {
          return (
            <ListItem
              key={index.toString()}
              data={item}
            />
          )
        })
      }
    </ul>
  );
}
 
export default List;