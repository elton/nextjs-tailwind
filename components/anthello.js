import { Button, DatePicker, version } from 'antd';
import 'antd/dist/antd.css';

export default function AntHello() {
  return (
    <div className='px-4 py-4 m-4 max-w-sm mx-auto'>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type='primary' className='ml-4'>
        Primary Button
      </Button>
    </div>
  );
}
