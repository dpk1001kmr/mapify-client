import React from "react";

const SavedDataInfo = ({ savedDataSummary }) => {
  if (savedDataSummary.type === "RequestBodyCompareError") {
    return (
      <div className="mt-4">
        <p className="font-bold mb-6">Saved Data Info &rarr;</p>
        <div>
          {savedDataSummary.sheets.map((message, index) => {
            return (
              <p
                key={index}
                className="text-xs border border-red-600 bg-red-100 text-red-600 font-bold rounded px-3 py-2 mb-1"
              >
                {message}
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  if (savedDataSummary.type === "DuplicateMappingError") {
    return (
      <div className="mt-4">
        <p className="font-bold mb-6">Saved Data Info &rarr;</p>
        <div>
          {savedDataSummary.sheets.map((sheet, index) => {
            return (
              <p
                key={index}
                className="text-xs border border-red-600 bg-red-100 text-red-600 font-bold rounded px-3 py-2 mb-1"
              >
                {sheet.message}
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <p className="font-bold mb-6">Saved Data Info &rarr;</p>
      <div>
        <p className="text-xs border border-green-600 bg-green-100 text-green-600 font-bold rounded px-3 py-2 mb-1">
          <span>Count: </span>
          <span>{savedDataSummary.count}</span>
        </p>
        <p className="text-xs border border-green-600 bg-green-100 text-green-600 font-bold rounded px-3 py-2 mb-1">
          <span>Inserted Count: </span>
          <span>{savedDataSummary.insertedCount}</span>
        </p>
        <p className="text-xs border border-green-600 bg-green-100 text-green-600 font-bold rounded px-3 py-2 mb-1">
          <span>Skipped Count: </span>
          <span>{savedDataSummary.skippedCount}</span>
        </p>
      </div>
      {savedDataSummary && savedDataSummary.data.length !== 0 && (
        <div className="overflow-x-auto border border-zinc-100 rounded">
          <table className="table table-xs">
            <tbody>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Job Title</th>
                <th>Department</th>
                <th>Company</th>
                <th>Street</th>
                <th>Zip Code</th>
                <th>City</th>
                <th>Country</th>
              </tr>
              {savedDataSummary.data?.map((row, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>{row.jobTitle}</td>
                    <td>{row.department}</td>
                    <td>{row.company}</td>
                    <td>{row.street}</td>
                    <td>{row.zipCode}</td>
                    <td>{row.city}</td>
                    <td>{row.country}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SavedDataInfo;
