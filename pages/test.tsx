import type { NextPage } from 'next'
import Navbar from "../components/Navbar"
import SmallRadio from '../components/ui components/radio/smallRadio'
import RectangleRadio from '../components/ui components/radio/rectangleRadio'
import AminitiesCheckbox from '../components/ui components/customCheckbox'

const test:NextPage = ()=> {
  return (
    <>
    {/* <Navbar/>  */}
    <SmallRadio value="Sale" />
    <RectangleRadio />
    <AminitiesCheckbox value="aminities" />
    </>
    
  )
}

export default test