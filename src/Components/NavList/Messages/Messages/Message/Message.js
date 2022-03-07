import style from "./Message.module.css"

const Message =(props)=> {
    return (
        <div className={style.Message}>
            <img src={props.image} />
            {props.message}
        </div>
    )
}

export default Message