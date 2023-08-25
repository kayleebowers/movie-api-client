import { createRoot } from "react-dom/client";
//import MainView component
import Container from "react-bootstrap/Container";
import { MainView } from "./components/main-view/main-view";
import { Provider } from "react-redux";
import store from "./redux/store";

//import style sheets
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

//main component
const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <MainView style={{fontFamily: "Quicksand"}} />
      </Container>
    </Provider>
  );
};

//find root of app
const container = document.querySelector("#root");
const root = createRoot(container);

//tell React to render app in root DOM element
root.render(<App />);
