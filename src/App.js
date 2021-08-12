import "./App.css";
import ItemList from "./Components/ItemList";

function App() {
  let products = [
    { image: "./tab1.jpg", name: "Paris", price: "100$" },
    { image: "./tab2.jpg", name: "Piano", price: "100$" },
    { image: "./tab3.jpg", name: "Tunisia", price: "100$" },
  ];

  return <ItemList items={products} />;
}

export default App;
