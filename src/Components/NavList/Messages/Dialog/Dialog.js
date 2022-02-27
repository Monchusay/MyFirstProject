import {NavLink} from "react-router-dom";
import style from "./Dialog.module.css"

const Dialog = (props) => {
    return (
        <div className={style.Dialog}>
            <NavLink to={"/Dialogs/" + props.id}><img src={props.image}/>{props.username}</NavLink>
        </div>
    )
}

export default Dialog;