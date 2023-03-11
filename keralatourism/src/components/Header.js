import React from 'react'

function Header() {
let date=new Date()
let hours=date.getHours()
let mode=""
if(hours<14){
    mode="daymode"

}
else if(hours>14){
    mode="darkmode"
}

  return (
<div className={`navBar`}>
        <div className={`logo ${mode}`}>Logo</div>
        <ul className='list'>
            <li>
                <a href="">Home</a>
                </li>
            <li>
                <a href="">About</a>
                </li>
            <li>
                <a href="">Contact</a>
                </li>


        </ul>

</div>    )
}

export default Header