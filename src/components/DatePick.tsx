import React from 'react';
import { Button, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import Messages from './Messages';


interface DatePick {
    onChange: (value: any, dateString: string) => void;
}

function DatePick({onChange}: DatePick) {
  

  return (
      <DatePicker onChange={onChange} />
  );
}

export default DatePick;
