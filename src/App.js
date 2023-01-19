import { Outlet } from "react-router-dom";
import "./services/Api";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
