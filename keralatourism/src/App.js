
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Card from './components/Card';
import Data from './components/Data';
import { useState } from 'react';

function App() {
  let [passfavimg, setPassfavimg] = useState([])


  function PassFavoriteImage(imagepassing) {
    console.log("your favorite image is", imagepassing);
    setPassfavimg([...passfavimg, imagepassing])
  }

  let imge = passfavimg.map((item) => {
    return (
      <div className='aside'>
        <img src={item} alt="" />
        <i className='far fa-times-circle'
        onClick={(()=>{
          removeFavoriteImage (item)
        })}></i>
      </div >
    )
  })

 function removeFavoriteImage(imagepassing) {
  setPassfavimg([...passfavimg].filter((currentImg)=>{
    return  currentImg!=imagepassing
  }))
  }





  let ArrayElements = Data.map((item) => {
    return <Card

      cardDetail={{
        heading: item.heading,
        image: item.image,
        phoneNumber: item.phoneNumber,
        email: item.email

      }}


      PassFavoriteImage={
        PassFavoriteImage
      }



    />

  })




  return (
    <div>
      <Header />
      <Hero />

      <div className='flex'>
        <div className='display'>
          {ArrayElements}

        </div>

        <h1 className='favoriteplace'>favorite place</h1>

        <div className='image'>

          {imge}

        </div >
      </div>

      <Footer />


    </div>);
}

export default App;
