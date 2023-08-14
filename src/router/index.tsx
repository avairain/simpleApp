
import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import App from "../App";
import { Login } from "../page/Login";
import { Home } from "../page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Link to="/login">login</Link>
      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/app",
    element: <App />,
  },
]);

export { router };
