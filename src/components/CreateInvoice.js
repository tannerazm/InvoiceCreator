import React, { useState } from "react";

const CreateInvoice = ({ isLoggedIn }) => {
  const [startDate, setStartDate] = useState("");
  const labelClass = "w-1/6 flex flex-col align-center";
  return (
    <div>
      {isLoggedIn ? (
        <>
          <div className="flex flex-col">
            <form>
              <label className={labelClass}>
                <span>Bill to</span>
                <select type="select" className="ml-2">
                  <option value="Grady Newman - MyCore LLC">Grady</option>
                </select>
              </label>
              <label className={labelClass}>
                <span>Start Date</span>
                <input
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
              <label className={labelClass}>
                <span>End Date</span>
                <input
                  type="date"
                  min={startDate} // Set the minimum date to the selected start date
                />
              </label>
              <label className={labelClass}>
                <span>Description</span>
                <input type="text" />
              </label>
              <label className={labelClass}>
                <span>Amount</span>
                <input type="text" />
              </label>
              <button type="submit">Create</button>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CreateInvoice;
