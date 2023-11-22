import './modal.css'
import { useState } from 'react'

const Modal = ()=>{
const [valueM,setValueM] = useState(false)
function toggle(){
    setValueM(!valueM)
}
    return(
        <>
   
    <div className="modal__wrapper">
            <button onClick={toggle} className='modal__btn'>Modal</button>
        </div>
        
       
        <div className={valueM?'modal__box':'none'}>
            <button onClick={toggle} className="modal__x__btn">X</button>
            <h2 className="modal__text">Modal</h2>
        </div>
        <div className={valueM?'big__wrapper':'none'}></div>
  
        </>
    )
}

export default Modal