import React, { useState } from "react";
import CancelOrSave from "./CancelOrSave";

const MappingInfo = ({
  mappingSummary,
  setFileUploaded,
  setMappingSummary,
  setSavedDataSummary,
}) => {
  const [requestBody, setRequestBody] = useState({});

  const onChangeHandler = (sheetName, key, value) => {
    setRequestBody((prev) => ({
      ...prev,
      [sheetName]: {
        ...(prev[sheetName] || {}),
        [key]: value,
      },
    }));
  };

  console.log(requestBody);

  if (mappingSummary.type === "FileValidationError") {
    return (
      <div className="mt-4">
        <p className="font-bold mb-6">Validation Info &rarr;</p>
        {mappingSummary.sheets.map((sheet, index) => {
          return (
            <div key={index} className="border border-red-600 bg-red-100 mb-1">
              <p className="text-xs text-red-600 font-bold px-3 py-2">
                {sheet.message}
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  // if (mappingSummary.type === "FileMappingSuccess") {
  //   return (
  //     <div className="mt-4">
  //       <p className="font-bold mb-6">Mapping Info &rarr;</p>
  //       {mappingSummary.sheets.map((sheet, index) => {
  //         return (
  //           <div
  //             key={index}
  //             className="border border-green-600 bg-green-100 mb-1"
  //           >
  //             {sheet.fullyMatched && (
  //               <p className="text-xs text-green-600 font-bold px-3 py-2">
  //                 {sheet.sheetName} is fully matched
  //               </p>
  //             )}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // }

  if (
    mappingSummary.type === "FileMappingSuccess" ||
    mappingSummary.type === "FileMappingError"
  ) {
    return (
      <div className="mt-4">
        <p className="font-bold mb-6">Mapping Info &rarr;</p>
        {mappingSummary.sheets.map((sheet, index) => {
          return (
            <div key={index}>
              {sheet.fullyMatched && (
                <p className="text-xs border border-green-600 bg-green-100 text-green-600 font-bold px-3 py-2 mb-1">
                  {sheet.sheetName} is fully matched
                </p>
              )}
              {!sheet.fullyMatched && (
                <div className="mb-1">
                  <p className="text-xs border border-red-600 bg-red-100 text-red-600 font-bold px-3 py-2 mb-1">
                    {sheet.sheetName} is not fully matched (Map the unmatched
                    fields)
                  </p>
                  <div className="overflow-x-auto">
                    <table className="table table-xs">
                      {/* <thead>
                      <tr>
                        <th>File Fields</th>
                        <th>Database Fields</th>
                      </tr>
                    </thead> */}
                      <tbody>
                        {sheet.fileFields.map((fileField, index) => {
                          return (
                            <tr key={index}>
                              <td
                                className={`${
                                  sheet.extraFileFields.includes(fileField)
                                    ? "border border-red-600 bg-red-100"
                                    : "border border-green-600 bg-green-100 py-2"
                                }`}
                              >
                                {fileField}
                              </td>
                              <td
                                className={`${
                                  sheet.extraFileFields.includes(fileField)
                                    ? "border border-red-600 bg-red-100"
                                    : "border border-green-600 bg-green-100"
                                }`}
                              >
                                {sheet.extraFileFields.includes(fileField) && (
                                  <select
                                    defaultValue="Map a field"
                                    className="select select-xs border border-red-600"
                                    onChange={(e) =>
                                      onChangeHandler(
                                        sheet.sheetName,
                                        fileField,
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option disabled={true}>Map a field</option>
                                    {sheet.collectionFields.map(
                                      (collectionField, index) => {
                                        return (
                                          <option
                                            value={collectionField}
                                            key={index}
                                          >
                                            {collectionField}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>
                                )}
                                {!sheet.extraFileFields.includes(fileField) && (
                                  <span>{sheet.collectionFields[index]}</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <CancelOrSave
          setFileUploaded={setFileUploaded}
          setMappingSummary={setMappingSummary}
          requestBody={requestBody}
          setSavedDataSummary={setSavedDataSummary}
        />
      </div>
    );
  }
};

export default MappingInfo;
