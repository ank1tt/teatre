// import React from "react";
// import styles from './BookSeats.module.css';
// import { Card,Col,Row } from "antd";
// import { Link } from "react-router-dom";

// const mybookings = [
//     {
//         bookingId:1,
//         hallId:1,
//         movieName:"Avengers",
//         time:'18:00:00',
//         date:'2024-02-26',
//         numberOfSeats:18,
//         price:400,
//     },
//     {
//         bookingId:2,
//         hallId:2,
//         movieName:"Avengers",
//         time:'16:00:00',
//         date:'2024-02-16',
//         numberOfSeats:20,
//         price:600,
//     },
//     {
//         bookingId:3,
//         hallId:3,
//         movieName:"Avengers",
//         time:'12:00:00',
//         date:'2024-02-06',
//         numberOfSeats:9,
//         price:1000,
//     },
//     {
//         bookingId:4,
//         hallId:1,
//         movieName:"Twilight",
//         time:'12:00:00',
//         date:'2024-02-06',
//         numberOfSeats:5,
//         price:800,
//     },
    
//     ]


// function MyBookings()
// {
//     return(
//         <div>
//             <header className={styles.header}>
//                 <h1>User Profile - My Bookings</h1>
//             </header>
//             <div className={styles.userprofilediv}>
//                 {mybookings.map(booking=>
//                         {
//                             return(
//                                 <div className={styles.booking}>
//                                     <Card type="inner" title={booking.movieName} extra={<Link to="/bookseats">Cancel Booking</Link>}>
//                                         <b>Booking Id</b> : {booking.bookingId}, <br></br>
//                                         <b>Hall Id</b> : {booking.hallId},<br></br>
//                                         <b>Movie Title :</b> {booking.movieName},<br></br>
//                                         <b>Time : </b>{booking.time},<br></br>
//                                         <b>Date : </b>{booking.date},<br></br>
//                                         <b>Number Of Seats : </b>{booking.numberOfSeats},<br></br>
//                                         <b>Price : </b>{booking.price}
//                                     </Card>
//                                 </div>
//                             );
//                         }
//                     )}
//             </div>
//         </div>
//     );
// }

// export default MyBookings;





import axios from 'axios';
import React,{useState,useEffect} from "react";

import styles from './BookSeats.module.css';
import { Card,Col,Row } from "antd";
import { Link, useParams } from "react-router-dom";
import NavigationBar from './landingpage/NavigationBar';
const Meta = {Card};

// const mybookings = [
//     {
//         bookingId:1,
//         hallId:1,
//         movieName:"Avengers",
//         time:'18:00:00',
//         date:'2024-02-26',
//         numberOfSeats:18,
//         price:400,
//         img:'https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg',
//     },
//     {
//         bookingId:2,
//         hallId:2,
//         movieName:"Godzilla",
//         time:'16:00:00',
//         date:'2024-02-16',
//         numberOfSeats:20,
//         price:600,
//         img:'https://m.media-amazon.com/images/I/91GUBXWK+gL.jpg',
//     },
//     {
//         bookingId:3,
//         hallId:3,
//         movieName:"Pirates of Caribbean",
//         time:'12:00:00',
//         date:'2024-02-06',
//         numberOfSeats:9,
//         price:1000,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxL4XlEdSUU1Q3hMmTQGbwKPLCiHpCOnUx4PNEnmdog&s',
//     },
//     {
//         bookingId:4,
//         hallId:1,
//         movieName:"Twilight",
//         time:'12:00:00',
//         date:'2024-02-06',
//         numberOfSeats:5,
//         price:800,
//         img:'https://i0.wp.com/4.bp.blogspot.com/-855TmgAtAn0/UBZD5Xxm2vI/AAAAAAAAAHw/THjQedA0ke4/s1600/breaking-dawn-part-2-poster-bella.jpg',
//     },
//     {
//         bookingId:4,
//         hallId:1,
//         movieName:"Extraction",
//         time:'12:00:00',
//         date:'2024-02-06',
//         numberOfSeats:5,
//         price:800,
//         img:'https://m.media-amazon.com/images/I/51hZr4pfAwL._AC_UF1000,1000_QL80_.jpg',
//     },
//     {
//         bookingId:4,
//         hallId:1,
//         movieName:"King Kong",
//         time:'12:00:00',
//         date:'2024-02-06',
//         numberOfSeats:5,
//         price:800,
//         img:'https://www.originalfilmart.com/cdn/shop/products/king_kong_2005_teaser_original_film_art_5000x.jpg?v=1605122703',
//     },
//     {
//         bookingId:4,
//         hallId:1,
//         movieName:"The Sorcerers Apprentice",
//         time:'12:00:00',
//         date:'2024-02-06',
//         numberOfSeats:5,
//         price:800,
//         img:'https://image.tmdb.org/t/p/original/b5pIUsGll0418NyfNA5eYCI9aoK.jpg',
//     },
//     {
//         bookingId:4,
//         hallId:1,
//         movieName:"Jurassic World",
//         time:'12:00:00',
//         date:'2024-02-06',
//         numberOfSeats:5,
//         price:800,
//         img:'https://e1.pxfuel.com/desktop-wallpaper/665/710/desktop-wallpaper-jurassic-world-3-discover-more-dominion-poster-jurassic-world-jurassic-world-2022-%E2%80%A6-in-2022-jurassic-world-3-2022.jpg',
//     },
    
//     ]



function MyBookings()
{

    const [mybookings,setMyBookings] = useState([]);
    const {userId} = useParams();
    const [temp,setTemp] = useState([]);
    useEffect(()=>{
        loadBookings()
    },[]);

    // const loadBookings= async ()=>
    // {
    //     const result = await axios.get("http://localhost:8080/user/bookings");
    //     setMyBookings(result.data);
    // }
    const loadBookings = async () => 
    {
        try 
        {
            const response = await axios.get(`http://localhost:8080/user/mybookings/${userId}/bookings`);
            setTemp(response.data);
            const temp2 = response.data;
            //console.log(mybookings);

            const availableone = temp2.filter(booking => booking.status=="booked");
            console.log("Avaiiiiiii: ",availableone);
            // setAvailableSeats(availableSeatsUpdated);
            setMyBookings(availableone);
            console.log(mybookings);
            console.log("Ressssponnnnse: ",response.data)
        } 
        catch (error) 
        {
            console.error('Error fetching bookings:', error);
        }
    };

    const handleClick=(e)=>
    {
        console.log(e);
        //e.preventDefault();
        alert(JSON.stringify(e,null,2));
    }
    return(
        <div>
            <NavigationBar/>
            <header className={styles.header}>
                <h1>User Profile - My Bookings</h1>
            </header>
            <div className={styles.userprofilediv}>
                {mybookings.map(booking=>
                        {
                            return(
                                <div className={styles.booking} onClick={()=>handleClick(booking)}>
                                    <center><img src={booking.shows.movies.img} alt='hello' /></center>
                                    <Card type="inner" title={booking.movieName} extra={<Link to={`/${booking.bookingId}/cancelbooking`}>Cancel Booking</Link>}>
                                        <b>Booking Id</b> : {booking.bookingId}, <br></br>
                                        <b>Hall Id</b> : {booking.shows.hall.hallId},<br></br>
                                        <b>Movie Title :</b> {booking.shows.movies.movieName},<br></br>
                                        <b>Time : </b>{booking.shows.showTime},<br></br>
                                        <b>Date : </b>{booking.shows.showDate},<br></br>
                                        {/* <b>Number Of Seats : </b>{booking.numberOfSeats},<br></br> */}
                                        {/* <b>Price : </b>{booking.price} */}
                                    </Card>
                                </div>
                            );
                        }
                    )}
            </div>
        </div>
    );
}

export default MyBookings;