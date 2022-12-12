import "./App.css";
import MyTable from "./Components/Table";
import MyTextField from "./Components/MyTextFeild";
import MySelect from "./Components/MySelect";
import { useState } from "react";
import MyButton from "./Components/MyButton";
import MyDatePicker from "./Components/MyDatePicker";

function App() {
  let newDate = new Date();
  const months = newDate.getUTCMonth();
  const year = newDate.getUTCFullYear();
  const day = newDate.getUTCDate();
  const todaysDate = `${day}/${months + 1}/${year}`;
  const [Schedule, setSchedule] = useState(0);
  const generateSchedule = () => {
    setSchedule(Schedule + 1);
    console.log(Schedule + 1);

    setloanDataArray([...loanDataArray, loanData]);
    let keys = Object.keys(loanData);
    let values = Object.values(loanData);
    setKeyNames(keys);
    setValueNames(values);
  };

  const [loanData, setloanData] = useState({
    Account: "empty",
    PaymentMethod: "empty",
    ChargeInterest: "empty",
    PaymentType: "empty",
    FinancingType: "empty",
    PaymentDrawn: "empty",
    Class: "empty",
    firstPaymentDate: todaysDate,
    StartDate: todaysDate,
  });
  const [loanDataArray, setloanDataArray] = useState([]);
  const [keyNames, setKeyNames] = useState([]);
  const [valueNames, setValueNames] = useState([]);

  // const [date, setDate] = useState(todaysDate);

  const getLoanData = (key, value) => {
    loanData[key] = value;
    setloanData({ ...loanData });
  };

  let topNames = keyNames;
  let rowsData = loanDataArray;

  return (
    <div>
      <div
        style={{
          margin: "50px 20px 20px 20px ",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>
          <MyTextField
            text="Schedule Name"
            onChange={(e) => {
              getLoanData("Schedule Name", e.target.value);
            }}
          />
          <MySelect
            text="Account"
            emptyValue="empty"
            emptyText="Select Account"
            RenderList={["Liability Account", "Current Account"]}
            onChange={(e) => getLoanData("Account", e.target.value)}
            value={loanData.Account}
          />
          <MyDatePicker
            text="Start Date"
            value={loanData.StartDate}
            // onChange={(e) => setDate(e)}
            onChange={(e) => {
              getLoanData("StartDate", `${e.$D}/${e.$M + 1}/${e.$y}`);
            }}
          />
          <MyTextField
            text="Total Number of Payments"
            type="number"
            onChange={(e) => {
              getLoanData("TotalNumberOfPayments", e.target.value);
            }}
          />
          <MyTextField
            text="Principle amount"
            type="number"
            onChange={(e) => {
              getLoanData("PrincipleAmount", e.target.value);
            }}
          />
          <MyTextField
            text="Annual interest rate"
            type="number"
            onChange={(e) => {
              getLoanData("AnnualInterestRate", e.target.value);
            }}
          />
          <MyDatePicker
            text="First Payment Date"
            value={loanData.firstPaymentDate}
            // onChange={(e) => setDate(e)}
            onChange={(e) => {
              getLoanData("firstPaymentDate", `${e.$D}/${e.$M + 1}/${e.$y}`);
            }}
          />
          <MySelect
            text="Charge interest to"
            emptyValue="empty"
            emptyText="Select Charge interest"
            RenderList={["All expense accounts", "Other accounts"]}
            onChange={(e) => getLoanData("ChargeInterest", e.target.value)}
            value={loanData.ChargeInterest}
          />
        </div>
        <div>
          <MySelect
            text="Payment frequently"
            emptyValue="empty"
            RenderList={["Bi-weekly", "semi-monthly", "Monthly"]}
            emptyText="Select Payment Method"
            onChange={(e) => getLoanData("PaymentMethod", e.target.value)}
            value={loanData.PaymentMethod}
          />
          <MyTextField
            text="No. of Interest only payments"
            type="number"
            onChange={(e) => {
              getLoanData("NoOfInterestOnlyPayments", e.target.value);
            }}
          />
          <MySelect
            text="Payment type"
            emptyValue="empty"
            RenderList={["Arrears", "Advance"]}
            emptyText="Select Payment Type"
            onChange={(e) => getLoanData("PaymentType", e.target.value)}
            value={loanData.PaymentType}
          />
          <MySelect
            text="Financing type"
            emptyValue="empty"
            RenderList={["Loan", "Lease"]}
            emptyText="Select financing Type"
            onChange={(e) => getLoanData("FinancingType", e.target.value)}
            value={loanData.FinancingType}
          />
          <MyTextField
            text="Residual value"
            type="number"
            onChange={(e) => {
              getLoanData("Residual value", e.target.value);
            }}
          />
          <MySelect
            text="Payment drawn from"
            emptyValue="empty"
            RenderList={["All bank accounts", "Some Bank accounts"]}
            emptyText="Select Payment drawn"
            onChange={(e) => getLoanData("PaymentDrawn", e.target.value)}
            value={loanData.PaymentDrawn}
          />
          <MySelect
            text="Class"
            emptyValue="empty"
            RenderList={["East", "West"]}
            emptyText="Select Class"
            onChange={(e) => getLoanData("Class", e.target.value)}
            value={loanData.Class}
          />
          <MyButton text="Generate Schedule" onClick={generateSchedule} />
        </div>
      </div>
      <div
        style={{
          margin: "20px 0px 20px 60px ",
        }}
      >
        {Schedule ? (
          <div>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              Your Schedule is Given Below
            </div>
            <MyTable rowsData={rowsData} columnsData={topNames} />
          </div>
        ) : (
          <div>No Schedule Made Until Yet</div>
        )}
      </div>
    </div>
  );
}

export default App;
