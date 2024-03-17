import "./App.css";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <AllRoutes />
    </div>
  );
}

export default App;
