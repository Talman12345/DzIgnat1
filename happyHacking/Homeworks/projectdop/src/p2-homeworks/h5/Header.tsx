import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Hader.module.css'

function Header() {

    const [btnBurger, setBtnBurger] = useState<boolean>(false)


    return (
        <div>
            <div>
                <button className={s.button} onClick={()=>{setBtnBurger(!btnBurger)}}>Level</button>
            {btnBurger &&   <NavLink className={s.passive} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>}
            {btnBurger &&    <NavLink className={s.passive} to={PATH.JUNIOR}>Junior</NavLink>}
            {btnBurger &&       <NavLink className={s.passive} to={PATH.JUNIOR_PLUS}>Junior++</NavLink>}
            </div>
        </div>
    )
}

export default Header
