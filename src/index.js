import ReactDom from "react-dom/client"
import  App, { router } from "./App";
// import { Provider } from "react-redux";

// import appStore from "./utills/appStore";
import appSotre from "./utills/appStore"
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <Provider store={appSotre}>
  <App/>
  </Provider>
);

