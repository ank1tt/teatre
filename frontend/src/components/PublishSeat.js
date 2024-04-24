import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import axios from 'axios';
 
const PublishSeat = () => {
    const onFinish = (values) => {
        console.log(values);
        axios.post('http://localhost:8080/admin/add-seat-type', values)
        .then(response => {
          console.log(response);
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
            <h1 style={{ color: 'white', fontFamily: 'monospace, sans-serif' }}>Publish Seat </h1>
            <Card style={{ width: 500, backgroundColor: 'grey' }}>
                <Form
                    name="publish_seat"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="seatTypeId"
                        rules={[{ required: true, message: 'Please input the seat type ID!' }]}
                    >
                        <Input placeholder="Seat Type ID" />
                    </Form.Item>
 
                    <Form.Item
                        name="seatTypeDesc"
                        rules={[{ required: true, message: 'Please input the seat description!' }]}
                    >
                        <Input placeholder="Seat Description" />
                    </Form.Item>
 
                    <Form.Item
                        name="seatFare"
                        rules={[{ required: true, message: 'Please input the seat fare!' }]}
                    >
                        <Input placeholder="Seat Fare" />
                    </Form.Item>
 
                    <Form.Item style={{ display: 'flex', justifyContent: 'center'}}>
                        <Button type="primary" htmlType="submit" style={{color: 'black'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};
 
export default PublishSeat;