import "../css/RestaurantJobs.css";
import UploadImg from "../../assets/Upload-Icon.png";
import { useState } from "react";

export default function Cvupload() {
  const [uploadFile, setUploadFile] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setUploadFile(file); // store full file object (for name or upload)
      console.log(file); // Logs file details: name, type, size
    }
  }

  return (
    <div>
      <label htmlFor="Cv">Attach Your CV</label>

      {/* Hidden file input */}
      <input
        type="file"
        id="Cv"
        name="Cv"
        accept=".pdf,.docx,.doc"
        // required
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Trigger label with icon or file name */}
      <label htmlFor="Cv">
        <div className="upload" style={{ cursor: "pointer" }}>
          {uploadFile ? (
            <p style={{ margin: 0 }}>{uploadFile.name}</p>
          ) : (
            <img src={UploadImg} alt="Upload" />
          )}
        </div>
        <p>Max file size: 20 MB, Max files: 1.</p>
      </label>
    </div>
  );
}
