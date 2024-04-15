import React,{useState,useEffect} from 'react';
import styles from './BookSeats.module.css';
import Seats from './Seats';
import { Space } from 'antd';
import axios from 'axios';

const BookSeatsNew = () => 
{
    // const [pSeats,setPSeats] = useState(['1A','1B','1C','1D','1E','1F']);
    // const [eSeats,setESeats] = useState(['2A','2B','2C','2D','2E','2F']);
    // const [nSeats,setNSeats] = useState(['3A','3B','3C','3D','3E','3F']);
    const [pSeats,setPSeats] = useState([]);
    const [eSeats,setESeats] = useState([]);
    const [nSeats,setNSeats] = useState([]);

    useEffect(()=>{
        loadSeats();
    },[])

    const loadSeats=async()=>
    {
    try {
        const result1 = await axios.get('http://localhost:8080/seatbooking/getpremiumseats');
        const result2 = await axios.get('http://localhost:8080/seatbooking/getexecutiveseats');
        const result3 = await axios.get('http://localhost:8080/seatbooking/getnormalseats');

        const p = result1.data;
        const e = result2.data;
        const n = result3.data;

        console.log("result1: ",p);
        console.log("result2: ",e);
        console.log("result3: ",n)

        const pSeatIds = p.map(seat => seat.seatTypeId); // Extracting seatTypeId values from p array
        const eSeatIds = e.map((seat) => seat.seatTypeId);
        const nSeatIds = n.map((seat)=>seat.seatTypeId);

        setPSeats(pSeatIds); // Setting pSeats state with seatTypeId values
        setESeats(eSeatIds);
        setNSeats(nSeatIds);

        const availableSeatsUpdated=pSeatIds.concat(eSeatIds,nSeatIds);
        setAvailableSeats(availableSeatsUpdated);
        console.log(availableSeats);
        // console.log(pSeatIds);
    } 
    catch (error) 
    {
        console.error('Error loading premium seats:', error);
    }

        // try
        // {
        //     const result1 =await axios.get('http://localhost:8080/seatbooking/getpremiumseats');
        //     console.log(result1.data);
        //     const p = result1.data;
        //     const pSeatIds = p.map((seat)=>{seat.seatTypeId});
        //     setPSeats(pSeatIds);
        //     console.log(pSeatIds);
        // }
        // catch(error)
        // {
        //     console.error('Error Loading premium seats: ',error);
        // }

        // const result1 =await axios.get('http://localhost:8080/seatbooking/getpremiumseats');
        // console.log(result1.data);
        // const p = result1.data;
        // console.log(p);
        // setPSeats(p.seatTypeId); 
        // console.log(pSeats);
    }

    const [availableSeats,setAvailableSeats] = useState([]);
    console.log(availableSeats);
    const [bookedSeats, setBookedSeats] = useState([]);
    const [numberOfSeats, setNumberOfSeats] = useState(0);

    const priceForPremium=500;
    const priceForExecutive=400;
    const priceForNormal=300;
    
    const changeNumberOfSeats = (e) =>
    {
        const seatsToBook = parseInt(e.target.value, 10);
        if(availableSeats.length<seatsToBook)
        {
            alert("Only "+availableSeats.length+' seats are available here');  /////////PROMPT
        }
        else{
            setNumberOfSeats(seatsToBook);
        }
    }

    const confirmBooking =()=>
    {
        if(bookedSeats.length!=0 && numberOfSeats!=0)
        {
            const newAvailableSeats =availableSeats.filter(seat=>!bookedSeats.includes(seat))  ;
            alert("Congratulations :D You have booked your seats: "+bookedSeats);
            console.log(bookedSeats)
            setAvailableSeats(newAvailableSeats);
            setBookedSeats([]);
            setNumberOfSeats(0);
        }
        else
        {
            alert("Pleae Select the Seats Before Booking...");
        }
        
    };

    const calculateTotalPrice=()=>
    {
        const premiumSeatsTotal = bookedSeats.filter(seats=>pSeats.includes(seats)).length * priceForPremium;
        const executiveSeatsTotal = bookedSeats.filter(seats=>eSeats.includes(seats)).length * priceForExecutive;
        const normalSeatsTotal = bookedSeats.filter(seats=> nSeats.includes(seats)).length * priceForNormal;
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
                    console.log('Released seats: ',bookedSeats);
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

  return (
    <div>
        <div className={styles.header}>
            <h2>Booking Seat</h2>
        </div>
        <div className={styles.bookSeats} >
                
            <div className={styles.label}>
                <label>How many seats you want to book: </label>
                <input type='number' value={numberOfSeats} onChange={(e)=>changeNumberOfSeats(e)} />
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
                    <Seats values={pSeats} availableSeats={availableSeats} bookedSeats={bookedSeats} onClick={(e,seat)=>addSeat(e,seat)}/>
                    <label className={styles.label}>Premium Seats</label>
                    </Space>
                    <Space direction="vertical">
                    <Seats values={eSeats} availableSeats={availableSeats} bookedSeats={bookedSeats} onClick={(e,seat)=>addSeat(e,seat)}/>
                    <label className={styles.label}>Executive Seats</label>
                    </Space>
                    <Space direction="vertical">
                    <Seats values={nSeats} availableSeats={availableSeats} bookedSeats={bookedSeats} onClick={(e,seat)=>addSeat(e,seat)}/>
                    <label className={styles.label}>Normal Seats</label>
                </Space>

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
  )
}

export default BookSeatsNew
