import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import axios from 'axios';
 
const PublishHall = () => {
  const onFinish = (values) => {
    console.log(values);
    axios.post('http://localhost:8080/admin/add-hall', values)
      .then(response => {
        console.log(response);
        alert('Hall Added Successfully');
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('Failed to add hall');
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
      <h1 style={{ color: 'white', fontFamily: 'monospace, sans-serif' }}>Publish Hall </h1>
      <Card style={{ width: 500, backgroundColor: 'grey' }}>
        <Form
          name="publish_hall"
          onFinish={onFinish}
        >
          <Form.Item
            name="hallDesc"
            rules={[{ required: true, message: 'Please input the hall description!' }]}
          >
            <Input placeholder="Hall Description" />
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
 
export default PublishHall;