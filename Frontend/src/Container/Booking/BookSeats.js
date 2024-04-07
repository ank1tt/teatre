import React, { useState } from "react";
import Seats from "./Seats";
import styles from './BookSeats.module.css';
import '../App.css';
import { Space } from "antd";

const createSeats = (rows,startIndex) =>
{
    let i=0;
    let j=startIndex;
    let k='A';
    const section = [];

    while(i<6 && j<=rows)
    {
        if(k>'F')
        {
            k='A';
            j++;
        }
        if(j<rows+1)
        {
            section.push(j+k);
            k = String.fromCharCode(k.charCodeAt(0)+1);
        }
    }

    return section;
}

const BookSeats=(props)=>
{
    // const {location} = props;
    // const {pathname,state} = location;
    // const prow = state.premiumcapacity;
    // const erow = state.executivecapacity;
    // const nrow = state.normalcapacity;
    // console.log(state);

    const prow = 4;
    const erow = 4;
    const nrow = 4;

    const pstart = 1;
    const estart = pstart+prow;
    const nstart = estart+erow;   

    const premiumSeats = createSeats(prow,''+pstart);
    const executiveSeats = createSeats((prow+erow),''+estart);
    const normalSeats = createSeats((prow+erow+nrow),''+nstart);

    const [availableSeats,setAvailableSeats] = useState(['1A','1B','2A','2B','10A','12C','11D']);
    const [bookedSeats, setBookedSeats] = useState([]);
    const [numberOfSeats, setNumberOfSeats] = useState(0);
    const [bookedStatus,setBookedStatus] = useState();

    const priceForPremium=500;
    const priceForExecutive=400;
    const priceForNormal=300;

    const calculateTotalPrice=()=>
    {
        const premiumSeatsTotal = bookedSeats.filter(seats=>premiumSeats.includes(seats)).length * priceForPremium;
        const executiveSeatsTotal = bookedSeats.filter(seats=>executiveSeats.includes(seats)).length * priceForExecutive;
        const normalSeatsTotal = bookedSeats.filter(seats=> normalSeats.includes(seats)).length * priceForNormal;
        return premiumSeatsTotal + executiveSeatsTotal + normalSeatsTotal;
    }

    const addSeat = (e,seat) =>
    {
        console.log('addSeat called with event: ',e, 'and seat: ',seat);
        if(numberOfSeats && !e.target.className.includes('disabled'))
        {
            const seatsToBook = parseInt(numberOfSeats, 10);
            if(bookedSeats.length<=seatsToBook)
            {
                if(bookedSeats.includes(seat))
                {
                    const newAvailable = bookedSeats.filter(s => s !==seat);
                    setBookedSeats(newAvailable);
                    console.log('New booked seats: ',bookedSeats);
                }
                else if(bookedSeats.length <numberOfSeats)
                {
                    setBookedSeats([...bookedSeats, seat]);
                    console.log('New booked seats: ',bookedSeats);

                }
                else if(bookedSeats.length === seatsToBook)
                {
                    bookedSeats.shift();
                    setBookedSeats([...bookedSeats, seat]);
                    console.log('New booked seats: ',bookedSeats);

                }
            }
        }
    };

    const confirmBooking =()=>
    {
        setBookedStatus('You have successfully booked the following seats: ')
        bookedSeats.forEach(seat =>{
            setBookedStatus(prevState => {
                return prevState + seat + ' ';
            })
        });
        const newAvailableSeats =availableSeats.filter(seat=>!bookedSeats.includes(seat))  ;
        alert("Congratulations :D You have booked your seats: "+bookedSeats);
        console.log(bookedSeats)
        setAvailableSeats(newAvailableSeats);
        setBookedSeats([]);
        setNumberOfSeats(0);
    };


    return(
        <div>
            <div className="App-header">
                <h2>==Booking Seat==</h2>
            </div>
            <div className={styles.bookSeats} >
                
                <div className={styles.label}>
                    <label>How many seats you want to book: </label>
                    <input type='number' value={numberOfSeats} onChange={(e)=>setNumberOfSeats(e.target.value)} />
                </div>

                <ul className={styles.showcase}>
                    <li>
                        <div className={styles.seat}></div>
                        <small>Available</small>
                    </li>
                    <li>
                        <div class={` ${styles.seat} ${styles.selected}`}></div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div class={`${styles.seat} ${styles.sold}`}></div>
                        <small>Reserved</small>
                    </li>
                </ul>
                
                <div className={styles.section}>
                    <Space direction="vertical">
                    <Seats values={premiumSeats} availableSeats={availableSeats} bookedSeats={bookedSeats} onClick={(e,seat)=>addSeat(e,seat)}/>
                    <label className={styles.label}>Premium Seats</label>
                    </Space>
                    <Space direction="vertical">
                    <Seats values={executiveSeats} availableSeats={availableSeats} bookedSeats={bookedSeats} onClick={(e,seat)=>addSeat(e,seat)}/>
                    <label className={styles.label}>Executive Seats</label>
                    </Space>
                    <Space direction="vertical">
                    <Seats values={normalSeats} availableSeats={availableSeats} bookedSeats={bookedSeats} onClick={(e,seat)=>addSeat(e,seat)}/>
                    <label className={styles.label}>Normal Seats</label>
                    </Space>


                    {/* <Seats values={premiumSeats} availableSeats={availableSeats} bookedSeats={bookedSeats} onClick={(e,seat)=>addSeat(e,seat)}/>
                    <Seats values={executiveSeats} availableSeats={availableSeats} bookedSeats={bookedSeats} onClick={(e,seat)=>addSeat(e,seat)}/>
                    <Seats values={normalSeats} availableSeats={availableSeats} bookedSeats={bookedSeats} onClick={(e,seat)=>addSeat(e,seat)}/> */}
                </div>
                <footer>
                    <Space direction="horizontal">
                         <label className={styles.label}>Rs: </label>
                        <p>{calculateTotalPrice()}</p>
                    </Space>
                   
                    <div className={styles.btn}>
                        <button type="submit" onClick={confirmBooking}>Book Now</button>
                    </div>
                </footer>
            </div>
        </div>
        
    );
};

export default BookSeats;
