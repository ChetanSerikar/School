import React from "react";
import LayoutOne from "./LayoutOne";

const FeeStructure = () => {
  const head = {
    tag: "Our Features",
    title: "Fee Structure",
    desc: "Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.",
  };
  const tableHaed = [
    "Program",
    "Age Group",
    "Annual Tuition",
    "Registration Fee",
    "Activity Fee",
  ];
  const tableBody = [
    {
      Program: "Nursery",
      AgeGroup: "2 - 3 Years",
      AnnualTuition: "$1,686",
      RegistrationFee: "$162",
      ActivityFee: "$12",
    },
    {
      Program: "Pre - Kindergartens",
      AgeGroup: "3 - 4 Years",
      AnnualTuition: "$2,686",
      RegistrationFee: "$220",
      ActivityFee: "$16",
    },
    {
      Program: "Kindergarten",
      AgeGroup: "4 - 5 Years",
      AnnualTuition: "$3,686",
      RegistrationFee: "$340",
      ActivityFee: "$20",
    },
  ];
  return (
    <div>
      <LayoutOne Head={head} />
      {/* <div className="feetable__wrapper border-2 border-radius-10 box-shadow-2 bg-neutral-000">
        <div className="dummy">
          <table className="feetable">
            <thead className="feetable__head">
              <tr className="">
                {tableHaed.map((title, index) => (
                  <th key={index}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody className="feetable__body">
              {tableBody.map((item, index) => (
                <tr key={index}>
                  <td>{item.Program}</td>
                  <td>{item.AgeGroup} </td>
                  <td>{item.AnnualTuition} </td>
                  <td>{item.RegistrationFee} </td>
                  <td>{item.ActivityFee} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default FeeStructure;
