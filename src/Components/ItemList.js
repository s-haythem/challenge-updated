import Item from "./Item";

function ItemList(props) {
  const prod = props.items;

  return (
    <div className="itemList">
      <div className="header">
        <h2 style={{ width: "300px" }}>Photo</h2>
        <h2 style={{ width: "150px" }}>Name</h2>
        <h2 style={{ width: "150px" }}>Price</h2>
      </div>
      {prod.map((el) => (
        <Item product={el} />
      ))}
    </div>
  );
}

export default ItemList;
