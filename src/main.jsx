import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"));
const reactElement = <h1><span>Hello from JSX!</span></h1>

root.render(reactElement);
