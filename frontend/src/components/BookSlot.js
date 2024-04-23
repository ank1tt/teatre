import React, { useState,useEffect } from "react";
import {Input, Space, DatePicker,Card} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import styles from './BookSeats.module.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavigationBar from "./landingpage/NavigationBar";
// import dayjs from 'dayjs';
// import customParseFormat

const {Meta} = Card;


const BookSlot = (props) => 
{

    //const genre = "Action, Science-Fiction";
    const fromDate = "26-03-2024";
    const toDate = "29-03-2024";
    // const img='https://i.ebayimg.com/images/g/OBoAAOSw2vBfbDFb/s-l1600.jpg';
    // const title = "The Avengers";
    const genre = "Action, Science-Fiction";
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

    const {userId,movieId,movieName} = useParams(); 
    // console.log("Obj: ",booking);
    // const img=decodeURIComponent(movieImg);
    // console.log("image: ",img);
    // const title = movieTitle;
    const [showId,setShowId] = useState(0);
    const [img,setImg] = useState('');
    const [title,setTitle] = useState('');
    const [halls,setHalls] = useState([]);
    const [uniqueHalls,setUniqueHalls] = useState([]);
    const [shows,setShows] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showsFilteredOnDate,setShowsFilteredOnDate] = useState([])
    const [showsFilteredOnDateandTime,setShowsFilteredOnDateandTime] = useState([])

    useEffect(()=>{
        console.log("showsFilteredondateand time", showsFilteredOnDate);
    },[showsFilteredOnDateandTime])

    useEffect(()=>{
        console.log("showsFiltererOnDate : ",showsFilteredOnDate);
    },[showsFilteredOnDate]);

    // Format selectedDate to match the format of showDate ('YYYY-MM-DD')
    // const formattedSelectedDate = selectedDate ? 
    //     `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`
    //     : null;

    useEffect(()=>
    {
        loadShows();
        loadHalls();
    },[])

    const loadShows = async()=>
    {
        try
        {
            const response = await axios.get(`http://localhost:8080/hallbooking/${movieId}/getshowslist`);
            console.log("Showssss List:::",response.data);
            setShows(response.data);
            const showList = response.data;
            if (showList.length !== 0) {
                setImg(showList[0].movies.img);
                setTitle(showList[0].movies.movieName);
            } else {
                window.alert("Show for this movie isn't published yet");
            }
        }
        catch(error)
        {
            console.error('Error fetching shows:' , error);
        }
    }

    const loadHalls=async ()=>
    {
        const result = await axios.get(`http://localhost:8080/hallbooking/bookings`);
        setHalls(result.data);
        console.log(halls);


        //filtering unique halls
        const uniqueHallIds = new Set(result.data.map(hall=>hall.hall.hallId));
        const uniqueHallData = Array.from(uniqueHallIds).map((hallId)=>{
            const hallData = result.data.find(hall=>hall.hall.hallId ===hallId);
            return hallData;
        })
        setUniqueHalls(uniqueHallData);
    }

    // const filteredHalls = uniqueHalls.filter(hall => {
    //     const hallShows = shows.filter(show => show.hallId === hall.hall.hallId);
    //     console.log(hallShows)
    //     return hallShows.some(show => show.showDate === formattedSelectedDate);
    // });

    return(
        <div className={styles.bookslotcontainer}> 
        <NavigationBar/>
            <div className={styles.header}>
                <header>
                    <h1>Book Slot</h1>
                </header>
            </div>
            <Space direction="Horizontal" className={styles.searchanddrop}>
                <div className={styles.bookslotsearchbar}>
                    <Input size="large" placeholder="Type here to search" prefix={<SearchOutlined />} />  
                </div>
            </Space>
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
                    <select
                        onChange={(e) => {
                            const selectedDate = e.target.value;
                            setSelectedDate(selectedDate);
                            const filteredShows = shows.filter((show) => show.showDate === selectedDate);
                            setShowsFilteredOnDate(filteredShows);
                            console.log(showsFilteredOnDate);
                        }}
                        >
                        <option value="">Select Date</option>
                        {shows.map((show) => (
                            <option key={show.showId} value={show.showDate}>
                            {show.showDate}
                            </option>
                        ))}
                    </select>
                    <select onChange={(e) => {
                        setSelectedTime(e.target.value)
                        const selectedTime = e.target.value;
                        setSelectedTime(selectedTime);
                        const filteredShows = showsFilteredOnDate.filter((show) => show.showTime === selectedTime);
                        setShowsFilteredOnDateandTime(filteredShows);
                        console.log(showsFilteredOnDateandTime);
                        if (filteredShows.length > 0) {
                            setShowId(filteredShows[0].showId);
                        }
                    }}>
                        <option value="">Select Time</option>
                        {showsFilteredOnDate.map(show => (
                            <option key={show.showId} value={show.showTime}>
                            {show.showTime}
                            </option>
                        ))}
                    </select>
                </div>
            </Space>
            <div className={styles.halls}>
                <Card title="Halls">
                    <Card 
                        style={{marginTop:16}}>
                {uniqueHalls.map(hall=>{ 
                    return(
                        <div key={hall.id} className={styles.bookhall}>

                            <Card style={{marginTop:16}}>
                                <Card type="inner" title={hall.hall.hallDesc} extra={<Link to={`/${userId}/${showId}/${selectedDate}/${selectedTime}/${hall.hall.hallId}/bookseats`}>
                                    {console.log("Halll Id : ",hall.hall.hallId)}
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