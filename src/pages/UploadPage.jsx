import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import MappingInfo from "../components/MappingInfo";
import SavedDataInfo from "../components/SavedDataInfo";

const UploadPage = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [mappingSummary, setMappingSummary] = useState(null);
  const [savedDataSummary, setSavedDataSummary] = useState(null);
  return (
    <React.Fragment>
      <UploadForm
        setFileUploaded={setFileUploaded}
        setMappingSummary={setMappingSummary}
        setSavedDataSummary={setSavedDataSummary}
      />
      {savedDataSummary && (
        <SavedDataInfo savedDataSummary={savedDataSummary} />
      )}
      {fileUploaded && mappingSummary && (
        <MappingInfo
          mappingSummary={mappingSummary}
          setFileUploaded={setFileUploaded}
          setMappingSummary={setMappingSummary}
          setSavedDataSummary={setSavedDataSummary}
        />
      )}
    </React.Fragment>
  );
};

export default UploadPage;
