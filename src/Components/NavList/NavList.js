import style from "./NavList.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const NavList = (props) => {
  return (
    <nav className={style.NavList}>
      <div className={style.item}>
        <NavLink to="/Profile">Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/Dialogs">Dialogs</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/News">News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/Music">Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/Settings">Settings</NavLink>
      </div>
      <div>
        <div>
          <Friends shortcutData={props.shortcutData} />
        </div>
      </div>
    </nav>
  );
};

export default NavList;
