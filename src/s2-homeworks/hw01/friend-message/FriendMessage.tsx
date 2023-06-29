import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type MessagePropsType = {
    message:MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img
                    id={props.message.user.avatar + props.message.id}
                    // создаёт студент
src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydkZvPz25CIaRZ8tl9kYwBwXUn-AiKJSTZw&usqp=CAU"}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={props.message.user.name + props.message.id}
                        className={s.friendName}>
                        {/*создаёт студент*/}
Somebody
                        {/**/}
                    </div>
                    <pre
                        id={props.message.message.text + props.message.id}
                        className={s.friendMessageText}>
                        {/*создаёт студент*/}
Who are you?
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={props.message.message.time  + props.message.id}
                className={s.friendTime}>
                {/*создаёт студент*/}
00:01
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
