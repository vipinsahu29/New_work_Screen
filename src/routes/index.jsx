import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { userRoutes } from "./routesPathFiles";
import AdMediaUpload from "../pages/AdDrop/AdMediaUpload";

const router = createBrowserRouter([
  {
    path: userRoutes.home,
    element: <Home />,
  },
  {
    path: userRoutes.adDropMedia,
    element: <AdMediaUpload />,
  },
]);
export default router