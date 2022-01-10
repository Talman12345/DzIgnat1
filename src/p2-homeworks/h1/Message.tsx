
import React from 'react'
import s from './Message.module.css'


type propsMessage = {
    avatar: string;
    name: string;
    message: string;
    time: string;

}


const Message = (props: propsMessage) => {

    return (

        <div className={s.messag}>

            <div className={s.avatar}>
                <img src={props.avatar} alt="animeGirl" />
            </div>


            <div className={s.bubblein}>
                <h5>{props.name}</h5>
                <p>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>


        </div>


    )
}

export default Message
