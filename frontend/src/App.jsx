const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Smartphone", price: 30000 }
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>My Store</h1>

      {products.map((product) => (
        <div key={product.id} style={{
          border: "1px solid #ccc",
          margin: "10px",
          padding: "10px"
        }}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;
