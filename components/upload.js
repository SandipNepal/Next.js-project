import { FileUpload } from "primereact/fileupload";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./upload.module.css";

export default function Upload() {
  // const handleChange = (e) => {
  //   var files = e.target.files;
  //   var filesArray = [].slice.call(files);
  //   filesArray.forEach((e) => {
  //     if (e.size > 2000000) {
  //       alert("File size is too big");
  //       return;
  //     }
  //   });
  // };
  return (
    <div className={styles.container}>
      <h1>Upload Excel file</h1>
      <FileUpload name="demo[]" url="./upload" multiple accept=".xlsx,.xls" maxFileSize="2000000"/>{" "}
    </div>
    // <>
    //   <form method="post" action="./upload" className={styles.container}>
    //     <div>
    //       <label for="file" className={styles.heading}>
    //         Upload Excel file
    //       </label>
    //       <br />
    //       <input
    //         type="file"
    //         id="file"
    //         name="file"
    //         multiple
    //         accept=".xlsx,.xls"
    //         onChange={(e) => handleChange(e)}
    //       />
    //     </div>
    //     <div>
    //       <button type="submit" className={styles.button}>
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </>
  );
}
