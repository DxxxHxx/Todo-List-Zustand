import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container min-h-screen border rounded-lg md:w-2/3 text-neutral-400">
      <div className="fixed top-0 left-0 -z-50">
        <div className="bgColor"></div>
      </div>
      <Outlet />
    </div>
  );
}
