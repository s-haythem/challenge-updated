import PropTypes from 'prop-types'

function Item(props) {
  const alertProduct = (name) => alert(` Hello this is ${name} painting`);
  return (
    <div className="item" onClick={() => alertProduct(props.product.name)}>
      <img style={{ width: "300px" }} src={props.product.image} alt="" />
      <h3 style={{ width: "150px" }}>{props.product.name}</h3>
      <h3 style={{ width: "150px" }}>{props.product.price}</h3>
    </div>
  );
}

Item.defaultProps = {
    image:'', name:'still painting...', price: 'N/A'
}
Item.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    alertProduct : PropTypes.func
}

export default Item;
