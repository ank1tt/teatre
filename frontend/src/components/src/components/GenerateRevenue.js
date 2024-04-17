import React, { useState } from 'react';
import { Form, DatePicker, Button, Card } from 'antd';
import axios from 'axios';

function GenerateRevenue() {
  const [revenue, setRevenue] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const calculateRevenue = async () => {
    try {
      console.log(`startDate: ${startDate}`);
      console.log(`endDate: ${endDate}`);
      const response = await axios.post(`http://localhost:8080/admin/generate-revenue?startDate=${startDate}&endDate=${endDate}`);
      setRevenue(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{background:'black',padding:'20px',  minHeight: '100vh'}}>
     <h1 style={{fontFamily: 'monospace, sans-serif', color: 'white'}}> Generate Overall Revenue </h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '5%' }}>
        <Form style={{minWidth : '55%', display: 'flex', flexDirection: 'column',backgroundColor: 'transparent'}}>
          <Card style={{backgroundColor: 'grey'}}>
            <Form.Item
              label="Enter the Starting Date"
              name = "StartDate"
              style={{marginBottom: '50px'}}
            >
              <DatePicker size='large' onChange={date => setStartDate(date ? date.format('YYYY-MM-DD') : null)} />
            </Form.Item>

            <Form.Item
              label= "Enter the Last Date"
              name = "LastDate"
              style={{marginBottom: '50px'}}
            >
              <DatePicker size='large' onChange={date => setEndDate(date ? date.format('YYYY-MM-DD') : null)} />
            </Form.Item>
          </Card>

          <Button type='primary' style={{width: '200px', marginLeft: '40%', marginTop: '50px'}} onClick={calculateRevenue}>Generate Revenue</Button>
          <h2 style={{marginTop: '50px', color: 'wheat'}}>Total Revenue: {revenue}</h2>
        </Form>
      </div>
    </div>
  )
}

export default GenerateRevenue;