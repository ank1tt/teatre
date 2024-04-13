import React from "react";
import classes from './BookSeats.module.css';

const Seats=(props) =>
{

    const handleSeatClick= (e,seat) =>
    {
        console.log('handleSeatClick called with event:', e, 'and seat:', seat);
        if(props.onClick) 
        {
            props.onClick(e,seat);
        }
    };

    return(
        <div className={classes.section}>
            {props.values.map(seat=>{
                const isAvailable = props.availableSeats.includes(seat);
                const isBooked = props.bookedSeats.includes(seat);
                let seatClass = classes.available;
                if(!isAvailable)
                {
                    seatClass=classes.disabled;
                }
                if(isBooked)
                {
                    seatClass=classes.booked;
                    console.log('Booked seat: ',seat);
                }
                return(
                    <div className={seatClass} key={seat} onClick={(e)=>handleSeatClick(e,seat)}>
                        {seat}
                    </div>
                );
            })}
        </div>
    );
}

export default Seats;
