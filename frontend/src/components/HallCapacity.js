import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import axios from 'axios';
 
const HallCapacity = () => {
  const onFinish = (values) => {
    console.log(values);
 
    const transformedValues = {
        hall: {
          hallId: Number(values.hallId, 10)
        },
        seatType: {
          seatTypeId: values.seatTypeId
        },
        premCount: values.premCount,
        exeCount: Number(values.exeCount, 10),
        normCount: Number(values.normCount, 10)
      };
      console.log(transformedValues);
 
    axios.post('http://localhost:8080/admin/add-hall-capacity', transformedValues)
      .then(response => {
        console.log(response);
        alert('Hall Capacity Added Successfully');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };
 
  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <h1 style={{ color: 'white', fontFamily: 'monospace, sans-serif' }}>Hall Capacity </h1>
      <Card style={{ width: 500, backgroundColor: 'grey' }}>
        <Form
          name="hall_capacity"
          onFinish={onFinish}
        >
          <Form.Item
            name="hallId"
            rules={[{ required: true, message: 'Please input the hall ID!' }]}
          >
            <Input placeholder="Hall ID" />
          </Form.Item>
 
          <Form.Item
            name="seatTypeId"
            rules={[{ required: true, message: 'Please input the seat type ID!' }]}
          >
            <Input placeholder="Seat Type ID" />
          </Form.Item>
 
          <Form.Item
            name="premCount"
            rules={[{ required: true, message: 'Please input the premium count!' }]}
          >
            <Input placeholder="Premium Count" />
          </Form.Item>
 
          <Form.Item
            name="exeCount"
            rules={[{ required: true, message: 'Please input the executive count!' }]}
          >
            <Input placeholder="Executive Count" />
          </Form.Item>
 
          <Form.Item
            name="normCount"
            rules={[{ required: true, message: 'Please input the normal count!' }]}
          >
            <Input placeholder="Normal Count" />
          </Form.Item>
 
          <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
 
export default HallCapacity;