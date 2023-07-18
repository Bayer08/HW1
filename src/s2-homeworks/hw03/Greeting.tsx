import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    onBlur: ()=>void // need to fix any
    onEnter: (e:KeyboardEvent<HTMLInputElement>)=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string | boolean // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (props:GreetingPropsType
    // {
    //     name,
    //     setNameCallback,
    //     addUser,
    //     onEnter,
    //     onBlur,
    //     error,
    //     totalUsers,
    //     lastUserName,
    // } // деструктуризация пропсов
) => {
    const inputClass = props.error ? s.errorInput : '' // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {props.totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={props.name}
                        onChange={props.setNameCallback}
                        className={inputClass}
                        onKeyDown={props.onEnter}
                        onBlur={props.onBlur}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {props.error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={props.addUser}
                    className={s.button}
                    disabled={!props.name.trim()}
                >
                    add
                </button>
            </div>

            {props.lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{props.lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting
