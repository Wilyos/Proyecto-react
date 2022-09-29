import React,{useState} from "react";

export const ItemCount = () => {
    const [count,setCount] = useState(1)
    const decrease = () =>{
        
    }
    return (
        <div className="counter">
            
            <button>-</button>
            <span>{count}</span>
            <button>+</button>
            <div>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

