import React from 'react'
import Headermain from '../Components/Headermain'
import Crousal from '../Components/Crousal'
import Homeintro1 from '../Components/Homeintro1'
import Homelifestyle from '../Components/Homelifestyle'
import Homelast from '../Components/Homelast'
import Hometoppicks from '../Components/Hometoppicks'
import Homebestofboat from '../Components/Homebestofboat'


function Home() {
  return (
    <div>
     <Headermain></Headermain>
     <Crousal></Crousal>
     <Homeintro1></Homeintro1>
     <Hometoppicks></Hometoppicks>
     <Homelifestyle></Homelifestyle>
     <Homebestofboat></Homebestofboat>
     <Homelast></Homelast>
     
    </div>
  )
}

export default Home