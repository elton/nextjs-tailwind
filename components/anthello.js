import React, { useState } from 'react';
import { message, version, DatePicker, Alert } from 'antd';
export default function AntHello() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`
    );
    setDate(value);
  };
  return (
    <div className='m-2 max-w-sm mx-auto'>
      <h1>antd version: {version}</h1>
      <DatePicker onChange={handleChange} />
      <div className='mt-2 w-full'>
        <Alert
          message='当前日期'
          description={date ? date.format('YYYY年MM月DD日') : '未选择'}
        />
      </div>
    </div>
  );
}
