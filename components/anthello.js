import { ConfigProvider, message, Button, DatePicker, version } from 'antd';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import React, { useState } from 'react';

export default function AntHello() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`
    );
    setDate(value);
  };
  return (
    <ConfigProvider locale={zhCN}>
      <div className='px-4 py-4 m-4 max-w-sm mx-auto'>
        <h1>antd version: {version}</h1>
        <DatePicker onChange={handleChange} />
        <div className='mt-4'>
          当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
        </div>
      </div>
    </ConfigProvider>
  );
}
