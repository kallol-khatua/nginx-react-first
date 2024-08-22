import { Outlet, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold underline text-center mb-5">
        Setup Nginx server
      </h1>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-red-500 font-semibold"
              : isActive
              ? "text-blue-500 font-semibold text-lg"
              : "font-semibold"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-red-500 font-semibold"
              : isActive
              ? "text-blue-500 font-semibold text-lg"
              : "font-semibold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-red-500 font-semibold"
              : isActive
              ? "text-blue-500 font-semibold text-lg"
              : "font-semibold"
          }
        >
          Contact
        </NavLink>
      </div>

      <Outlet />
    </nav>
  );
};

export default NavBar;
