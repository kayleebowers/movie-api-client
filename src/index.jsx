import { createRoot } from "react-dom/client";

//import MainView component
import { MainView } from "./components/main-view/main-view";

//import style sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

//main component
const App = () => {
  return <MainView />;
};

//find root of app
const container = document.querySelector("#root");
const root = createRoot(container);

//tell React to render app in root DOM element
root.render(<App />);
