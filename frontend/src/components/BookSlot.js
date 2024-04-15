import React, { useState,useEffect } from "react";
import {Input, Space, DatePicker,Card} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import styles from './BookSeats.module.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
// import dayjs from 'dayjs';
// import customParseFormat

const {Meta} = Card;


const BookSlot = (props) => 
{

    const {movieId,movieTitle,movieImg} = useParams(); 
    // console.log("Obj: ",booking);
    const img=decodeURIComponent(movieImg);
    console.log("image: ",img);
    const title = movieTitle;
    const genre = "Action, Science-Fiction";
    const fromDate = "26-03-2024";
    const toDate = "29-03-2024";
    // const img='https://i.ebayimg.com/images/g/OBoAAOSw2vBfbDFb/s-l1600.jpg';
    // const title = "The Avengers";
    // const genre = "Action, Science-Fiction";
    // const fromDate = "26-03-2024";
    // const toDate = "29-03-2024";

    // const halls = [
    //     {
    //         hallId:1,
    //         hallDesc:"Hall 1",
    //         premiumcapacity:18,
    //         executivecapacity:18,
    //         normalcapacity:18,
    //     },
    //     {
    //         hallId:2,
    //         hallDesc:"Hall 2",
    //         premiumcapacity:12,
    //         executivecapacity:18,
    //         normalcapacity:12,
    //     },
    //     {
    //         hallId:3,
    //         hallDesc:"Hall 3",
    //         premiumcapacity:24,
    //         executivecapacity:12,
    //         normalcapacity:18,
    //     },
    //     {
    //         hallId:4,
    //         hallDesc:"Hall 4",
    //         premiumcapacity:6,
    //         executivecapacity:12,
    //         normalcapacity:6,
    //     },
    //     {
    //         hallId:5,
    //         hallDesc:"Hall 5",
    //         premiumcapacity:18,
    //         executivecapacity:18,
    //         normalcapacity:18,
    //     },
    // ]

    const [halls,setHalls] = useState([]);
    useEffect(()=>
    {
        loadHalls()
    },[])

    const loadHalls=async ()=>
    {
        const result = await axios.get("http://localhost:8080/hallbooking/bookings");
        setHalls(result.data);
    }

    return(
        <div className={styles.bookslotcontainer}> 
            <div className={styles.header}>
                <header>
                    <h1>Book Slot</h1>
                </header>
            </div>
            <Space direction="Horizontal" className={styles.searchanddrop}>
                <div className={styles.bookslotsearchbar}>
                    <Input size="large" placeholder="Type here to search" prefix={<SearchOutlined />} />  
                </div>
                {/* <div className={styles.bookslotdropdown}>
                        <select>
                            <option>Pune</option>
                            <option>Mumbai</option>
                            <option>Jaipur</option>
                            <option>Kolkata</option>
                            <option>Bengaluru</option>
                            <option>Chandigarh</option>
                            <option>Delhi</option>
                        </select>
                </div> */}
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
                                <Card type="inner" title={hall.hallDesc} extra={<Link to={{
                                    pathname: '/bookseats',
                                    state: {
                                        premiumcapacity:hall.premiumcapacity,
                                        executivecapacity:hall.executivecapacity,
                                        normalcapacity:hall.normalcapacity,
                                    }
                                    }}>
                                    Click Here to Book Seats</Link>}>
                                    Premium Seats: {hall.premCount} <br></br>
                                    Executive Seats: {hall.exeCount}<br></br>
                                    Normal Seats: {hall.normCount}
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