import Image from "next/image";
import { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../../styles/uiComponents.module.css";

const Dropzone: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile,
}) => {
  //-------------Type Definitions---------------
  // interface IFile {
  //   path: string;
  //   size: string;
  // }

  const onDrop = useCallback((acceptedFiles: any) => {
    // console.log(acceptedFiles);
    setFile(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/png": [".png"],
        "image/jpeg": [".jpg"],
      },
    });

  return (
    <>
      <div {...getRootProps()} className={styles.dropzoneArea}>
        <input {...getInputProps()} />

        <div className={styles.droppedImageAccept}>
          <div className={styles.droppedImageForMobile}>
            <p>Drag and Drop Images Here</p>
          </div>
          <div className={styles.droppedImageForPC}>{/* Styles For PC */}</div>
        </div>
      </div>
    </>
  );
};

export default Dropzone;
