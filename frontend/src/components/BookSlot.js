import React from "react";
import {Input, Space, DatePicker,Card} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import styles from './BookSeats.module.css'
import Navbar from "./Navbar";
import BookSeats from "./BookSeats";
import { Link } from "react-router-dom";
// import dayjs from 'dayjs';
// import customParseFormat

const {Meta} = Card;


const BookSlot = (props) => 
{
    const img='https://i.ebayimg.com/images/g/OBoAAOSw2vBfbDFb/s-l1600.jpg';
    const title = "The Avengers";
    const genre = "Action, Science-Fiction";
    const fromDate = "26-03-2024";
    const toDate = "29-03-2024";

    const halls = [
        {
            id:1,
            name:"Hall 1",
            premiumcapacity:18,
            executivecapacity:18,
            normalcapacity:18,
        },
        {
            id:2,
            name:"Hall 2",
            premiumcapacity:12,
            executivecapacity:18,
            normalcapacity:12,
        },
        {
            id:3,
            name:"Hall 3",
            premiumcapacity:24,
            executivecapacity:12,
            normalcapacity:18,
        },
        {
            id:4,
            name:"Hall 4",
            premiumcapacity:6,
            executivecapacity:12,
            normalcapacity:6,
        },
        {
            id:5,
            name:"Hall 5",
            premiumcapacity:18,
            executivecapacity:18,
            normalcapacity:18,
        },
    ]

    return(
        <div className={styles.bookslotcontainer}> 
            <div className={styles.header}>
                <header>
                    <h1>==Book Slot==</h1>
                    <Navbar/>
                </header>
            </div>
            <Space direction="Horizontal" className={styles.searchanddrop}>
                <div className={styles.bookslotsearchbar}>
                    <Input size="large" placeholder="Type here to search" prefix={<SearchOutlined />} />  
                </div>
                <div className={styles.bookslotdropdown}>
                        <select>
                            <option>Pune</option>
                            <option>Mumbai</option>
                            <option>Jaipur</option>
                            <option>Kolkata</option>
                            <option>Bengaluru</option>
                            <option>Chandigarh</option>
                            <option>Delhi</option>
                        </select>
                </div>
            </Space>
            {/* <Navbar/> */}
            <div className={styles.movieinfo}>
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img src={img} alt='' height='250px' width='250px' />}
                >
                    <Meta title={title} description={genre} />
                </Card>
                {/* // <h1>{title}</h1>
                // <h4>{genre}</h4> */}
            </div>
            <hr></hr>
            <Space direction="horizontal" className={styles.slotdate}>
                <div>
                    <DatePicker/>
                </div>
            </Space>
            <div className={styles.halls}>
                <Card title="Halls">
                    <Card 
                        style={{marginTop:16}}>
                {halls.map(hall=>{ 
                    return(
                        <div key={hall.id} className={styles.bookhall}>

                            <Card style={{marginTop:16}}>
                                <Card type="inner" title={hall.name} extra={<Link to={{
                                    pathname: '/bookseats',
                                    state: {
                                        premiumcapacity:hall.premiumcapacity,
                                        executivecapacity:hall.executivecapacity,
                                        normalcapacity:hall.normalcapacity,
                                    }
                                    }}>
                                    Click Here to Book Seats</Link>}>
                                    Premium Seats: {hall.premiumcapacity} <br></br>
                                    Executive Seats: {hall.executivecapacity}<br></br>
                                    Normal Seats: {hall.normalcapacity}
                                </Card>
                            </Card>
                            {/* {hall.name} */}
                        </div>
                        );
                    })
                }
                </Card>
                </Card>
            </div>
        </div>
    );
    
}

export default BookSlot;