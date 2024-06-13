import { Main, Project, ProjectPage } from "./pages";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<Main />} />,
        <Route path="projects" element={<ProjectPage />} />,
        <Route path="projects/:projectid" element={<Project />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
