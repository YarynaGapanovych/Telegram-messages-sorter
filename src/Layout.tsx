import React, { useState } from "react";
import { Button } from "antd";
import type { DatePickerProps } from "antd";
import Messages from "./components/Messages";
import DatePick from "./components/DatePick";

function Layout() {
  const [date, setDate] = useState<string>("2022-10-09");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
  };

  return (
    <div>
      <div className="my-10 ">
        <Button>Download file</Button>
        <DatePick onChange={onChange} />
      </div>
      <div>
        <Messages date={date} />
      </div>
    </div>
  );
}

export default Layout;
