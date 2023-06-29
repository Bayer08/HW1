import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={props.message.user.avatar + props.message.id}
                    // создаёт студент
                    src={'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'}
                    //
                />
                <div className={s.text}>
                    <div id={props.message.user.name + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        Me
                        {/**/}
                    </div>
                    <pre id={props.message.message.text + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        HI! how are you!
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={props.message.message.time + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                00:00
                {/**/}
            </div>
        </div>
    )
}

export default Message
