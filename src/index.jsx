import { createRoot } from 'react-dom/client';

//import MainView component
import { MainView } from "./main-view/main-view";

//import statement to indicate need to bundle ./index.scss
import "./index.scss";

//main component
const MyFlixApplication = () => {
    return (
        <div className="my-flix">
            <div>Good morning</div>
        </div>
    );
};

//find root of app
const container = document.querySelector("#root");
const root = createRoot(container);

//tell React to render app in root DOM element
root.render(<MyFlixApplication />);
