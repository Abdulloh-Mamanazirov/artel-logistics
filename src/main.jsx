import axios from "axios";
import ReactDOM from "react-dom/client";
import { store } from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";

// css
import "./index.css";
import "aos/dist/aos.css";

axios.defaults.baseURL = "http://192.168.137.126:8080/api/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
