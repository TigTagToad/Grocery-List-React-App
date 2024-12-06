import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import GroceryList from "./components/GroceryList";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
      <Header />
      <div
        className="card shadow-lg"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <div className="card-body">
          <GroceryList />
        </div>
      </div>
    </div>
  );
}

export default App;
