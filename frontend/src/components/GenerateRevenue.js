import React, { useState } from 'react';
import { Form, Input , DatePicker, Button} from 'antd'
import FormItem from 'antd/es/form/FormItem';


background:;
function GenerateRevenue() {

const[basicTickets , setBasicTickets] = useState(0);
const[premiumTickets, setPremiumTickets] = useState(0);
const[revenue, setRevenue] = useState(0);
const basicTicketsPrice = 100;
const premiumTicketsPrice = 200;


const calculateRevenue = () => {
  const totalBasicTickets = basicTickets * basicTicketsPrice;
  const totalPremiuTickets = premiumTickets * premiumTicketsPrice;
  const totalRevenue = totalBasicTickets + totalPremiuTickets;
  setRevenue(totalRevenue);
}

  return (
    <div style={{background:'linear-gradient(135deg, #E3E3E3 0%,#5D6874 100%)',padding:'20px',  minHeight: '100vh'}}>
      <h1 style={{color: 'white'}}> Generate Overall Earnings</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '5%' }}>
        <Form style={{minWidth : '55%', display: 'flex', flexDirection: 'column',backgroundColor: 'transparent'}}>
     
          <Form.Item
            label="Enter the Starting Date"
            name = "StartDate"
            style={{marginBottom: '50px'}}
          >
            <DatePicker size='large'  />
          </Form.Item>

          <Form.Item
            label= "Enter the Last Date"
            name = "LastDate"
            style={{marginBottom: '50px'}}
          >
            <DatePicker size='large' />
          </Form.Item>

          <FormItem
            label = "Enter the Number of Basic Tickets Sold"
            name = "BasicTickets"
            style={{marginBottom: '50px'}}
          >
            <Input placeholder='Number of Basic Tickets Sold' size='large' onChange={e => setBasicTickets(e.target.value)} />
          </FormItem>

          <FormItem
            label = "Enter the Number of Premium Tickets Sold"
            name = "PremiumTickets"
            style={{marginBottom: '30px'}}
          >
            <Input placeholder='Number of Premium Tickets Sold' onChange={e => setPremiumTickets(e.target.value)} />
          </FormItem>

          <Button type='primary' style={{width: '200px', marginLeft: '40%'}} onClick={calculateRevenue}>Generate Revenue</Button>
          <h2 style={{marginTop: '50px'}}>Total Revenue: {revenue}</h2>
        </Form>
      </div>
     
    </div>
  )
}

export default GenerateRevenue