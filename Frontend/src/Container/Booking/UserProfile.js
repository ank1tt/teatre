import React from "react";
import styles from './BookSeats.module.css';
import { Card,Col,Grid,Row } from "antd";
import { Link } from "react-router-dom";

const mybookings = [
    {
        bookingId:1,
        hallId:1,
        movieName:"Avengers",
        time:'18:00:00',
        date:'2024-02-26',
        numberOfSeats:18,
        price:400,
    },
    {
        bookingId:2,
        hallId:2,
        movieName:"Avengers",
        time:'16:00:00',
        date:'2024-02-16',
        numberOfSeats:20,
        price:600,
    },
    {
        bookingId:3,
        hallId:3,
        movieName:"Avengers",
        time:'12:00:00',
        date:'2024-02-06',
        numberOfSeats:9,
        price:1000,
    },
    
    ]


function UserProfile()
{
    return(
        <div>
            <header className={styles.header}>
                <h1>User Profile - My Bookings</h1>
            </header>
            <div className={styles.userprofilediv}>
                <Card title="Bookings">
                    <Card style={{marginTop:16}}>
                        {mybookings.map(booking=>
                            {
                                return(
                                    <div key={booking.bookingId} className={styles.booking}>
                                        <Card style={{marginTop:16}}>
                                        <div>
                                            <Card type="inner" title={booking.movieName} extra={<Link to="/bookseats">Cancel Booking</Link>}>
                                                <b>Booking Id</b> : {booking.bookingId}, <br></br>
                                                <b>Hall Id</b> : {booking.hallId},<br></br>
                                                <b>Movie Title :</b> {booking.movieName},<br></br>
                                                <b>Time : </b>{booking.time},<br></br>
                                                <b>Date : </b>{booking.date},<br></br>
                                                <b>Number Of Seats : </b>{booking.numberOfSeats},<br></br>
                                                <b>Price : </b>{booking.price}
                                            </Card>
                                        </div>
                                            
                                        </Card>
                                    </div>
                                );
                            })}
                    </Card>
                </Card>
            </div>
        </div>
    );
}

export default UserProfile;