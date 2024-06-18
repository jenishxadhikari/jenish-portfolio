import { Main, Project, ProjectPage } from "./pages";
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { githubInfoLoader } from "./hooks/GithubInfoLoader";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" loader={githubInfoLoader} element={<Main />} />,
        <Route path="projects" element={<ProjectPage />} />,
        <Route path="projects/:projectid" element={<Project />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
