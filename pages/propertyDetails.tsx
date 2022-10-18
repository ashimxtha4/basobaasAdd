import type { NextPage } from 'next'
import style from '../styles/propertyDetails.module.css'
import { HiOutlineInformationCircle } from "react-icons/hi"
import Head from "next/head"
import styles from '../styles/basicDetail.module.css'
import Navbar from "../components/Navbar"
import AmenitiesCheckbox from '../components/ui components/customCheckbox'

const propertyDetails: NextPage = () => {
    const amenities=['Lawn','Drainage','Jacuzzi','Garage','Parking','Air Condition','Balcony','Deck','Fencing',
            'Garden','CCTV','Gym','Microwave','Modular Kitchen','Swimming Pool','TV Cable','Electricity Backup',
            'Intercom','Internet','Kids Playground','Lift','Maintainance','Security Staff','Store Room','Amenities']
    const handelSubmit=(e:Event)=>{
        e.preventDefault();
        var arr=document.getElementsByName("amenities");
        var arrChecked:any=[]
        var i:number;
        for (i=0;i<arr.length;i++)
        {
            if (arr[i].checked)
            {
                arrChecked.push(arr[i].value)
                document.getElementById("amenitiesError").style.visibility="hidden";
                document.getElementById("amenitiesError").innerHTML="Must select atleast one amenities";
            }
        }
        if (arrChecked.length<1)
        {
            document.getElementById("amenitiesError").innerHTML="Must select atleast one amenities";
            document.getElementById("amenitiesError").style.visibility="visible";
        }
            
        console.log(arrChecked)
    }
    return (
        <>
            <Head>
                {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css" ></link> */}
                <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
                <style>
                    {/* @import url('http://fonts.cdnfonts.com/css/product-sans'); */}
                </style>
            </Head>
            <div className={styles.containerDiv}>
            <div className={styles.nav}><Navbar /></div>
            
            <div className={styles.contentDiv}>

                <div className={styles.sideProgress}>
                    <div className={styles.topDiv}>Back to Dashboard</div>

                    <div className={styles.midDiv}>
                    <p className={styles.midDetails}>Basic Details</p>
                    Mathi ko step haru
                    </div>
                </div>

                <div className={styles.mainDiv}>
                    <div className={styles.postProperty}>
                    <p>Post Property For Free</p>
                    </div>

                    <div className={styles.mainBotDiv}>

                    <div className={styles.botLeftDiv}>
                        <div className={styles.topicDiv}>
                        <h1>topic</h1>
                        </div>
                        
                        <form className={styles.mainContentDiv}>

                        <div className={styles.mainContentBody}>
                            
                        <div className={style.propertydetails_container}>
                {/* <div className={style.propertydetails_section_top}>
                    <h4>Property Details</h4>
                </div>
                <div className={style.propertydetails_line}></div>
                 */}

                <div className={style.propertydetails_components}>

                    <label> Location  </label>
                    <div className={style.all_input_fields}>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Ward Number" ></input>
                        </div>
                        <div className={style.dropdown_only}>
                            <select
                                name=""
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value="Property City"
                                    selected
                                    hidden
                                    disabled>Property City</option>
                            </select>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Property Area" ></input>
                        </div>
                    </div>
                </div>


                <div className={style.propertydetails_components}>
                    <label> Area  Location  </label>
                    <div className={style.all_input_fields}>
                        <div className={style.dropdown_only}>
                            <select
                                name=""
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Select Area Metric</option>
                            </select>
                        </div>
                        
                        <div className={style.input_dropdown}>
                            <input className={style.input_with_dropdown} type="text" placeholder=" Total Area(e.g. 0-1-2-4)" ></input>
                           
                           <hr className={style.gapBtw}/>
                            <div className={style.dropdown_with_input}>
                                <select
                                    name="aana"
                                    id="aana"
                                    // onChange={handleChange("designation")}
                                    required
                                >
                                    <option value="Aana"
                                        selected
                                        hidden
                                        disabled>Aana</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.input_dropdown}>
                            <input className={style.input_with_dropdown} type="text" placeholder="Built Up Area(e.g. 0-1-2-4)" ></input>
                            <hr className={style.gapBtw}/>
                            <div className={style.dropdown_with_input}>
                                <select
                                    name="aana"
                                    id="aana"
                                    // onChange={handleChange("designation")}
                                    required
                                >
                                    <option value="Aana"
                                        selected
                                        hidden
                                        disabled>Aana</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Property Face" ></input>
                        </div>

                    </div>
                </div>

                <div className={style.propertydetails_components}>
                    <label> Road Location </label>
                    <div className={style.all_input_fields}>
                        <div className={style.dropdown_only}>
                            <select
                                name=""
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Select Area Metric</option>
                            </select>
                        </div>

                        <div>
                            <input className={style.input_only} type="text" placeholder="Road Acess(e.g. 14)" ></input>
                        </div>
                        <div className={style.dropdown_only}>
                            <select
                                name=""
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Road Type</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className={style.propertydetails_components}>
                    <label> Building Details  <HiOutlineInformationCircle /></label>
                    <div className={style.all_input_fields}>
                        <div className={style.dropdown_only}>
                            <select
                                name=""
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Build Year</option>
                            </select>
                        </div>
                        <div className={style.dropdown_only}>
                            <select
                                name=""
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Total floors</option>
                            </select>
                        </div>
                        <div className={style.dropdown_only}>
                            <select
                                name=""
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Furnishing</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={style.propertydetails_components}>
                    <label> Muntiple Units  <HiOutlineInformationCircle /></label>
                    <div className={style.all_input_fields}>
                        <div className={style.dropdown_only}>
                            <select
                                name=""
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Number of Units</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.propertydetails_components}>

                    <label> Total Rooms  <HiOutlineInformationCircle /> </label>
                    <div className={style.all_input_fields}>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Total Bed Room" ></input>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Total Bathroom" ></input>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Total Kitchen" ></input>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Total Living Room" ></input>
                        </div>
                        </div>
                        </div>




                {/* <input type="text" placeholder="Road Type" ></input> */}
                
                <div  className={style.property_details_components_aminities} >
                     <label className={style.label} htmlFor=""> Ameneties  <HiOutlineInformationCircle /></label>
                    <div className={style.aminities_button}>
                        {/* <AminitiesCheckbox value="Aminities" /> */}
                        {amenities.map((value,key)=><AmenitiesCheckbox value={value} />)}
                    </div>
                    <span id="amenitiesError"></span>
                </div>
            </div>

        </div>

        <div className={styles.footer}>
            <button className={styles.next} onClick={handelSubmit}>Next</button>
        </div>
        </form>
                        
                        
        </div>
        <div className={styles.botRightDiv}>information</div>
        </div>
                    
        </div>
        </div>
                
        
        </div>
            

        </>
    )
}
export default propertyDetails