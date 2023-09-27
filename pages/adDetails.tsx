import type { NextPage } from "next";
import Dropzone from "../components/ui components/Dropzone";
import styles from "../styles/adDetails.module.css";
import uiStyle from "../styles/uiComponents.module.css";
import React, { useState } from "react";
import {
  CustomizableInputs,
  CustomizableInputButtonsWithSelect,
} from "../components/ui components/input/InputButtons";
import { IoInformationCircleOutline } from "react-icons/io5";
import Layout from '../components/layout'
import Head from 'next/head'
import style from '../styles/basicDetail.module.css'
import Navbar from "../components/Navbar"


const AdDetails: NextPage = () => {
  const [file, setFile] = useState(null);
  return (
  <>
  <Head>
      {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css" ></link> */}
      <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
      <style>
        @import url('http://fonts.cdnfonts.com/css/product-sans');
      </style>
    </Head>
  <Layout>
      <div className={styles.adDetailsMainWrapper}>
        <div className={styles.adDetailsLine}></div>
        <div className={styles.adDetailsUploads}>
          <label>
            Upload Images
            <IoInformationCircleOutline className={uiStyle.reactIconI} />
          </label>
          <Dropzone setFile={setFile} />
          <small id="emailHelp" className="form-text text-muted">
            *The first image is thumbnail for this listing
          </small>
        </div>
        <div className={styles.adDetailsYoutube}>
          <label>
            Youtube Video Link
            <IoInformationCircleOutline className={uiStyle.reactIconI} />
          </label>
          <CustomizableInputs
            type={"text"}
            placeholder={"eg.www.youtube.com/asada"}
            id={""}
            value={""}
          />
        </div>
        <div className={styles.flexTwo}>
          <div className={styles.adDetailsTitle}>
            <label>
              Title <IoInformationCircleOutline className={uiStyle.reactIconI} />
            </label>
            <CustomizableInputs
              type={"text"}
              placeholder={"Enter Property Title"}
              id={""}
              value={""}
            />
          </div>
          <div className={styles.adDetailsPrice}>
            <label>
              Price <IoInformationCircleOutline className={uiStyle.reactIconI} />
            </label>
            <CustomizableInputButtonsWithSelect
              type={"text"}
              placeholder={"Property Price"}
              value1={"Label"}
              value2={"Rupees"}
            />
          </div>
        </div>
        <div className={styles.adDetailsFormDescription}>
          <label>
            Description{" "}
            <IoInformationCircleOutline className={uiStyle.reactIconI} />
          </label>
          <input
            className={styles.textArea}
            id="adDetailsFormDescription"
            placeholder="Description about your property"
          ></input>
        </div>
      </div> 
  </Layout>
  </>
  );
};
export default AdDetails;