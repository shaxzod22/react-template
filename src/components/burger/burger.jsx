import './burger.css'
import { useState } from 'react'

const Burger = ()=>{
    const [value,setValue]= useState(false)
    
    function toggle(){
        setValue(!value)
        
    }
    
    return (
        <>
        <div  className="burger__container">
        <a  href="#" className="burger__logo__link">LOGO.</a>
        
        <ul onClick={toggle} className='burger__list'>
        <li className="burger__item"></li>
        <li className="burger__item"></li>
        <li className="burger__item"></li>
        </ul>
        </div>
        
        <div className={value?'menubar':'menubar none'}>
        <h2 className="menubar__title">Menubar</h2>
        <button onClick={toggle} className='menubar__x__btn'>X   </button>
        </div>
        <div onClick={()=>{
            if(value === true){
                setValue(!value)
            }
        }} className={value?'blank index':'blank'}>
        
        </div>
        </>
        )
    }
    
    export default Burger