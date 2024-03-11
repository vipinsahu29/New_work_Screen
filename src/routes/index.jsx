import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { userRoutes } from "./routesPathFiles";
import MediaUploads from "../pages/AdDrop/MediaUploads/MediaUploads";

const router = createBrowserRouter([
  {
    path: userRoutes.home,
    element: <Home />,
  },
  {
    path: userRoutes.adDropMedia,
    element: <MediaUploads/>,
  },
]);
export default router