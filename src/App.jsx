import "./App.css";
import Home from "./pages/Home";
import SideMenu from "./components/SideMenu/SideMenu";
import { RouterProvider } from "react-router-dom";
import router from './routes'

function App() {
  return (
    <div style={{ display: "flex", width:'100%' }}>
      <SideMenu />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
