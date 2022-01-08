import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Hader.module.css'


function Header() {

    const [btnBurger, setBtnBurger] = useState<boolean>(false)
    const classColor = ({isActive}: any) => isActive ? s.active : s.passive

    return (
        <div>
            <div>
                <button className={s.button} onClick={() => {
                    setBtnBurger(!btnBurger)
                }}>Level
                </button>
                {btnBurger && <> <NavLink className={classColor} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                    <NavLink className={classColor} to={PATH.JUNIOR}>Junior</NavLink>
                    <NavLink className={classColor} to={PATH.JUNIOR_PLUS}>Junior++</NavLink>
                </>}
            </div>
        </div>
    )
}

export default Header
