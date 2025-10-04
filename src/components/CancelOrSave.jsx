import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUpload, save } from "../api/services/data.service";
import { toast } from "react-toastify";

const CancelOrSave = ({
  setFileUploaded,
  setMappingSummary,
  requestBody,
  setSavedDataSummary,
}) => {
  const queryClient = useQueryClient();

  const cancelMutation = useMutation({
    mutationFn: deleteUpload,
    onSuccess: (data) => {
      console.log(data);
      setFileUploaded(false);
      setMappingSummary(null);
      setSavedDataSummary(null);
    },
    onError: (error) => {},
  });
  const saveMutation = useMutation({
    mutationFn: async () => await save(requestBody),
    onSuccess: (data) => {
      console.log(data);
      setFileUploaded(false);
      setMappingSummary(null);
      setSavedDataSummary(data);
      queryClient.invalidateQueries(["data"]);
      toast.success(data.message);
    },
    onError: (error) => {
      console.log(error);
      const data = error.response.data;
      setFileUploaded(true);
      setSavedDataSummary(data);
    },
  });

  return (
    <div className="flex gap-2 mt-2">
      <button
        className="btn btn-sm"
        onClick={(e) => cancelMutation.mutate()}
        disabled={cancelMutation.isPending}
      >
        {cancelMutation.isPending && (
          <span className="loading loading-sm loading-spinner"></span>
        )}
        <span>Cancel</span>
      </button>
      <button
        className="btn btn-sm"
        onClick={(e) => saveMutation.mutate()}
        disabled={saveMutation.isPending}
      >
        {saveMutation.isPending && (
          <span className="loading loading-sm loading-spinner"></span>
        )}
        <span>Save</span>
      </button>
    </div>
  );
};

export default CancelOrSave;
