import React from 'react'
import { useState } from 'react';


function Card(props) {
    console.log(props.AddedToFavorite);

    let useData = useState("Add to favorite")
    let colorchange = useState("")
    // let FirstValue = useData[0]
    // let SecondValue=useData[1]
    let [FirstValue, SecondValue] = useData
    let [colourchange, setColorChange] = colorchange
    function AddedToFavorite(imagepassing) {
       

        SecondValue((beforevalue) => {
            if (beforevalue == "Add to favorite") {
                props.PassFavoriteImage(imagepassing)
                return "Added to favorite"
            }
            else {
                return "Add to favorite"
            }
        })
        setColorChange((beforechange)=>{
            if(beforechange==""){
                return "added"
            }
            else{
                return ""
            }
        })

    }



    return (
        <div className='cardflex'>
           
            <div className={`card ${colourchange}`}>
            <i className="fa-solid fa-heart "></i> 

                <img src={props.cardDetail.image} alt="" />

                <h1>{props.cardDetail.heading}</h1>

                <p>{props.cardDetail.phoneNumber}</p>
                

                <button onClick={(()=>{
                    AddedToFavorite(props.cardDetail.image)
                })} className='card-button'>{FirstValue}</button>

            </div>

        </div>
    )
}

export default Card