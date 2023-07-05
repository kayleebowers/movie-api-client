import { createRoot } from 'react-dom/client';

//import statement to indicate need to bundle ./index.scss
import "./index.scss";

//main component
const myFlixApplication = () => {
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
root.render(<myFlixApplication />);
