import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./components/Layout";
import ErrorComponent from "./components/ErrorComponent";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorComponent />} />
      </Route>
    </Routes>
  );
}
