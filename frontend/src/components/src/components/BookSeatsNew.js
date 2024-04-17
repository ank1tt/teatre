import React,{useState,useEffect} from 'react';
import styles from './BookSeats.module.css';
import Seats from './Seats';
import { Space } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import NavigationBar from './landingpage/NavigationBar';

const BookSeatsNew = () => 
{

    const [pSeats,setPSeats] = useState([]);
    const [eSeats,setESeats] = useState([]);
    const [nSeats,setNSeats] = useState([]);

    const {userId,showId,selectedDate,selectedTime,hallId} = useParams();
    console.log("HallId: ",hallId);

    const navigate = useNavigate();

    // useEffect(()=>{
    //     console.log(bookedSeatIds);
    // },[bookedSeatIds])

    // const loadBookedSeats=async()=>
    // {
    //     const result = await axios.get(`http://localhost:8080/hallbooking/getbookedseats/${showId}`);
    //     const data = result.data
    //     setBookedSeatIds(data);
    //     console.log(data);
    // }

    useEffect(()=>{
        loadSeats();
    },[])
    
        const [bSeats,setBseats] = useState([]);

    const loadSeats=async()=>
    {
    try {
        const completeObj = await axios.get('http://localhost:8080/hallbooking/bookings');
        const result1 = await axios.get(`http://localhost:8080/hallbooking/${hallId}/getpremiumseats`);
        const result2 = await axios.get(`http://localhost:8080/hallbooking/${hallId}/getexecutiveseats`);
        const result3 = await axios.get(`http://localhost:8080/hallbooking/${hallId}/getnormalseats`);

        const p = result1.data;
        const e = result2.data;
        const n = result3.data;

        console.log("result1: ",p);
        console.log("result2: ",e);
        console.log("result3: ",n);

        console.log(result1.data.length==0);
        setPriceForPremium(result1.data.length!=0?(result1.data[0].seatFare):0);
        setPriceForExecutive(result2.data.length!=0?(result2.data[0].seatFare):0);
        setPriceForNormal(result3.data.length!=0?(result3.data[0].seatFare):0);

        const pSeatIds = p.map(seat => seat.seatTypeId); // Extracting seatTypeId values from p array
        const eSeatIds = e.map((seat) => seat.seatTypeId);
        const nSeatIds = n.map((seat)=>seat.seatTypeId);

        setPSeats(pSeatIds); // Setting pSeats state with seatTypeId values
        setESeats(eSeatIds);
        setNSeats(nSeatIds);


        const result = await axios.get(`http://localhost:8080/hallbooking/getbookedseats/${showId}`);
        const data = result.data
        // const data1 = data.map((seat)=>seat.seatTypeId);
        setBseats(data);
        console.log(data);


        const availableSeatsUpdated=pSeatIds.concat(eSeatIds,nSeatIds);
        const availableone = availableSeatsUpdated.filter(seat => !data.includes(seat));
        // setAvailableSeats(availableSeatsUpdated);
        setAvailableSeats(availableone);
        console.log("available one:",availableone);
        console.log("Updatedd avail: ",availableSeatsUpdated)
        console.log(availableSeats);
        console.log(pSeatIds);
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
    const [bookedSeatIds, setBookedSeatIds] = useState([]);

    const [priceForPremium,setPriceForPremium]=useState(0);
    const [priceForExecutive,setPriceForExecutive]=useState(0);
    const [priceForNormal,setPriceForNormal]=useState(0);
    
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

  const confirmBooking = async () => {
    try {
        if(userId!==undefined) {
            if (bookedSeats.length !== 0 && numberOfSeats !== 0) {
                const bookingData = {
                    bookingDate: selectedDate,
                    bookingTime: selectedTime,
                    shows: {
                        showId: showId
                    },
                    user: {
                        userId: userId
                    },
                    status: "booked"
                };
 
                await axios.post('http://localhost:8080/hallbooking/confirmbooking', bookingData);
 
                const response = await axios.get('http://localhost:8080/hallbooking/lastbookingid');
 
                const bookId = response.data;
 
                const bookingDetailsDataArray = bookedSeats.map(seatId => ({
                    booking: {
                        bookingId: bookId,
                    },
                    seatType: {
                        seatTypeId: seatId
                    },
                    noOfSeats: 1
                }));
 
                for (const bookingDetailsData of bookingDetailsDataArray) {
                    await axios.post('http://localhost:8080/hallbooking/addbookingdetails', bookingDetailsData);
 
                    setBookedSeatIds(prevBookedSeatIds => [...prevBookedSeatIds, ...bookedSeats]);
 
                    const newAvailableSeats = availableSeats.filter(seat => !bookedSeats.includes(seat));
                    window.alert("Congratulations :D You have booked your seats: " + bookedSeats);
                    console.log("Boooookeeeedddd seats: ", bookedSeats);
                    setAvailableSeats(newAvailableSeats);
                    setBookedSeats([]);
                    setNumberOfSeats(0);
                }
            } else {
                alert("Please Select the Seats Before Booking...");
            }
        } else {
            window.alert("Please Login first");
            navigate(`/login`);
        }
    } catch (error) {
        console.error('Error:', error);
        window.alert("Please Login first");
        navigate(`/login`);
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
        <NavigationBar/>
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
