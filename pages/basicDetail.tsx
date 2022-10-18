import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import style from '../styles/basicDetail.module.css'
import {HiOutlineInformationCircle} from "react-icons/hi"
import {BiHome} from "react-icons/bi"
import Image from 'next/image'
import commercial from "../Images/commercial.svg"
import agriculture from "../Images/agriculture.svg"
import Navbar from "../components/Navbar"
import SmallRadio from '../components/ui components/radio/smallRadio'
import RectangleRadio from '../components/ui components/radio/rectangleRadio'
import SquareRadio from '../components/ui components/radio/squareRadio'
import { boolean } from 'yup/lib/locale'

const BasicDetail:NextPage =(e)=> {
const [aCategory,setCategory]=useState(
  [{key:"adCategory",value:""},
  {key:"propertyType",value:""},
  {key:"propertyCategory",value:""}]
);

const buttonClick=(e:Event)=>{
  e.preventDefault();
  var arr1=document.getElementsByName('adCategory')
  var arr2=document.getElementsByName('propertyType')
  var arr3=document.getElementsByName('propertyCategoryy')
  var i:number;
  var checkFlag:boolean=false;
  for(i = 0; i < arr1.length; i++) {
    if(arr1[i].checked)
    {
      document.getElementById("adCategoryError").innerHTML="" ;
      checkFlag=false;
      break;
    }
    else
    {
      document.getElementById("adCategoryError").innerHTML="Must select atleast one option" ;
      checkFlag=true;
    }
    
  }
  for(i = 0; i < arr2.length; i++) {
    if(arr2[i].checked){
      document.getElementById("propertyTypeError").innerHTML="" ;
      checkFlag=false;
      break;
    }
    else
    {
      document.getElementById("propertyTypeError").innerHTML="Must select atleast one option" ;
      checkFlag=true;
    }
  }
  for(i = 0; i < arr3.length; i++) {
    if(arr3[i].checked){
      document.getElementById("propertyCategoryError").innerHTML="" ;
      checkFlag=false;
      break;
    }
    else
    {
      document.getElementById("propertyCategoryError").innerHTML="Must select atleast one option" ;
      checkFlag=true;
    }
  }
  if(!checkFlag)  window.location.href = '/adDetails';
  console.log(arr1)
}
  return (
    <>
    <Head>
      {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css" ></link> */}
      <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
      <style>
        @import url('http://fonts.cdnfonts.com/css/product-sans');
      </style>
      </Head>
    <div className={style.containerDiv}>
      <div className={style.nav}>
        <Navbar />
      </div>
      
      <div className={style.contentDiv}>

        <div className={style.sideProgress}>
            <div className={style.topDiv}>Back to Dashboard</div>

            <div className={style.midDiv}>
              <p className={style.midDetails}>Basic Details</p>
              Mathi ko step haru
            </div>
          </div>

          <div className={style.mainDiv}>
            <div className={style.postProperty}>
              <p>Post Property For Free</p>
            </div>

            <div className={style.mainBotDiv}>

              <div className={style.botLeftDiv}>
                <div className={style.topicDiv}>
                  <h1>topic</h1>
                </div>
                <form className={style.mainContentDiv} onSubmit={buttonClick}>

                  <div className={style.mainContentBody}>
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
                  </div>

                  <div className={style.footer}>
                    <button className={style.next} type="submit" >Next</button>
                  </div>
                </form>
  
              </div>
              <div className={style.botRightDiv}>information</div>
            </div>
            
          </div>
        </div> 
    </div>
    </>
  )
}

export default BasicDetail