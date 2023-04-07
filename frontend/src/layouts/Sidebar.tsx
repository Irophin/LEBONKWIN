import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">

        <h1>
          LE BONKWIN
        </h1>

        <ul className="sidebar__menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/form">New</NavLink>
          </li>
        </ul>
    </aside>
  );
}

export default Sidebar;