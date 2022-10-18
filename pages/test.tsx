import type { NextPage } from 'next'
import Navbar from "../components/Navbar"
import SmallRadio from '../components/ui components/radio/smallRadio'
import RectangleRadio from '../components/ui components/radio/rectangleRadio'
const test:NextPage = ()=> {
  return (
    <>
    {/* <Navbar/>  */}
    <SmallRadio value="Sale" />
    <RectangleRadio />
    </>
    
  )
}

export default test