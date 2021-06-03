import React, {useState} from 'react'

const Toggle = () => {
    const [isToggled, setToggled] = useState(false)
    console.log(isToggled);
    return (
        <div>
            <button onClick={()=>setToggled(!isToggled)}>{ isToggled ? 'ON' : 'OFF' }</button> 
        </div>
    )
}

export default Toggle