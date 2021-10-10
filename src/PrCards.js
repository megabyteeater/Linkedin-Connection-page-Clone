import React from 'react'
import './PrCards.css'
import image from 'C:/Users/ASUS/Desktop/web-dev/PRACTISE/vistarr-work/src/Rakshit.png'
import {useState} from 'react';

// const [state, setstate] = useState("CONNECT");
// const changeText=(text)=>setstate(text);
// return (
//     <Button onClick={() => changeText("Request Sent")}>{state}</Button>
//   )

function Cards() {
    const [state, setstate] = useState("CONNECT");
    const changeText=(text)=>setstate(text);

    
 

    return (
        <div className="Card">
            <div classaName="Profile-pic">
                <img src={image} alt="profile-pic" class="Ao"></img>
            </div>
            <div className="names">
                <p><strong>HARISH KUMAR</strong></p>
                <p>Working at</p>
            </div>
            <div className="Connections">
                <div calssName="number">
                    <p><strong>400</strong></p>
                    <p>Connections</p>
                </div>
            </div>
            <div className="Connect">
                
            <button className="connect" type="button" onClick={() => changeText("Request Sent")} >
                {state}
            </button>
            </div>
        </div>        
    )
}

export default Cards