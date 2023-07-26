import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
