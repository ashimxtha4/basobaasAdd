import type { NextPage } from 'next'
import Navbar from "../components/Navbar"
import SmallRadio from '../components/ui components/radio/smallRadio'
import RectangleRadio from '../components/ui components/radio/rectangleRadio'
import AminitiesCheckbox from '../components/ui components/customCheckbox'
import Head from 'next/head'
import Layout from '../components/layout'
import style from '../styles/basicDetail.module.css'
import SquareRadio from '../components/ui components/radio/squareRadio'
import { BiHome } from 'react-icons/bi'


const test:NextPage = ()=> {
  return (
    <>
      <Layout>
      <>
      <div className={style.adCategoryDiv}>
                      <p className={style.topic}>Ad Category <HiOutlineInformationCircle className={style.infoIcon} /></p>
                      <div className={style.radioDiv} >
                        <SmallRadio value="Sale" />
                        <SmallRadio value="Rent" />
                        <SmallRadio value="Lease" />
                        <span id='adCategoryError'></span>
                      </div>
                  </div>

                  <div className={style.propertyTypeDiv}>
                  <p className={style.topic}>Property Type <HiOutlineInformationCircle className={style.infoIcon} /> </p>
                      
                      <div className={style.propertyTypeDivRow}>
                        <RectangleRadio icon={<BiHome/>} value="Residential" />
                        <RectangleRadio icon={<Image src={commercial} alt="image" />} value="Commercial" />
                        <RectangleRadio icon={<Image src={agriculture} alt="image" />} value="Agriculture" />
                        <span id='propertyTypeError'></span>
                      </div>
                      
                      {/* <div className={style.propertyTypeDivRow}>
                      
                      </div> */}
                  </div>

                  <div className={style.propertyCategoryDiv}>
                    <p className={style.topic}>Porperty Category<HiOutlineInformationCircle className={style.infoIcon} /></p>
                    <div className={style.propertyCategoryRow}>
                      <SquareRadio value="House" icon={<BiHome/>} />
                      <SquareRadio value="Land" icon={<BiHome/>} />
                      <SquareRadio value="Flat" icon={<BiHome/>} />
                      <SquareRadio value="Apartment" icon={<BiHome/>} />
                      <SquareRadio value="Buginess" icon={<BiHome/>} />
                      <SquareRadio value="Office" icon={<BiHome/>} />
                      <span id='propertyCategoryError'></span>
                      </div>
                    </div>
                    </>
      </Layout>
    </>
    
  )
}

export default test