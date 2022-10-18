import style from "../styles/Navbar.module.css"
import Image from "next/image"
import BasobasLogo from "../Images/BasobasLogo.svg"
import type { NextPage } from "next";


const Navbar:NextPage=()=> {
  const links:any = ["Buy","Rent","Home Loans","Blogs","Agencies","Unit Converter"];
  
  return (
    <div className={style.nav}>
        <div className={style.logo}>
            <span className={style.icon}><Image src={BasobasLogo} alt="no image"/></span>
            <h1 className={style.logoName}></h1>
        </div>

        <div className={style.searchDiv}>
            <input className={style.searchArea} />
            <span>Icon</span>
        </div>
        <div className={style.rightSection}>
          <div className={style.linkDiv}>
            {
              links.map((data)=>
              <a href="" className={style.links}>{data}</a>
              )
            }
            <a href="" className={style.greenLinks}>For NRNs</a>
          </div>

          <div className={style.buttonDiv}>
            <button className={style.blueButton}>
              <p>Post Property Free</p>
            </button>
            <div className={style.userDiv}>
              <div className={style.imageDiv}></div>
              <p className={style.name}> Kismat Thapa</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar