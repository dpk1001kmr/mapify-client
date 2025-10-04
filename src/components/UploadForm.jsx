import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { upload } from "../api/services/data.service";

const UploadForm = ({
  setFileUploaded,
  setMappingSummary,
  setSavedDataSummary,
}) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    if (!file) {
      toast.error("Please select a file first.");
      return;
    }
    uploadMutation.mutate(file);
  };

  const uploadMutation = useMutation({
    mutationFn: upload,
    onSuccess: (data) => {
      console.log(data);
      setFileUploaded(true);
      setMappingSummary(data);
      setSavedDataSummary(null);
    },
    onError: (error) => {
      const data = error.response.data;
      console.log(data);
      if (data.type === "FileValidationError") {
        setFileUploaded(true);
        setMappingSummary(data);
        setSavedDataSummary(null);
      }
      if (data.type === "FileMappingError") {
        setFileUploaded(true);
        setMappingSummary(data);
        setSavedDataSummary(null);
      }
    },
  });

  return (
    <React.Fragment>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Upload file</legend>
        <div className="flex gap-2">
          <input
            type="file"
            className="file-input file-input-sm"
            onChange={handleFileChange}
          />
          <button
            className="btn btn-sm"
            onClick={handleUpload}
            disabled={uploadMutation.isPending}
          >
            {uploadMutation.isPending && (
              <span className="loading loading-sm loading-spinner"></span>
            )}
            <span>Upload</span>
          </button>
        </div>
        <p className="label">Only xlsx or csv file is allowed</p>
      </fieldset>
    </React.Fragment>
  );
};

export default UploadForm;
