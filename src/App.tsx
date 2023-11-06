import { Route, Routes } from "react-router-dom";
import Layout from "./pages/LayOuts/LayOutRoot";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Team from "./pages/teams";
import Projects from "./pages/projects";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="tech-talks" element={<Blogs />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
