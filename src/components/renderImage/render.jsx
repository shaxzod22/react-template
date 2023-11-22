import './render.css'
import { useState } from 'react'

const Render = ()=>{
    const [count,setCount] = useState(0)
console.log(count);
    let url = `https://picsum.photos/id/${count}/350/300`
    function increment(){
        setCount(count+1)
    }
    return (
        <>
        <div className="render__container">
            <img src={url} alt="" className="render__image" />
            <button onClick={increment} className="render__btn">Render</button>
        </div>
        </>
    )
}

export default Render