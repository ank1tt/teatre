import React, { useState } from "react";
import './BookingCancellation.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import NavigationBar from "./landingpage/NavigationBar";
 
const BookingCancellation = (props) => {

  const {bookingId} = useParams();

  //const [bookingId, setBookingId] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [cancellationConfirmed, setCancellationConfirmed] = useState(false);
  const [refundAmount, setRefundAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
 
  const handleCancellation = async() => {
    if (!bookingId || !contactInfo) {
      setErrorMessage("Please enter booking ID and contact information.");
      return;
    }

    const str = await axios.post(`http://localhost:8080/user/cancelBooking/${bookingId}`);
    if(str==="cancelled")
    {
      setCancellationConfirmed(true);
    }
    const refundFare = await axios.get(`http://localhost:8080/cancellation/${bookingId}/fare`);

    const cancellationCharges = 0.2;
    const refund = refundFare * (1 - cancellationCharges);
    const netRefund = refund;
    setRefundAmount(netRefund);
    window.alert(str+ "\n Refund Amount: "+netRefund);

     // Moved the time check here
    //  localhost:8080/user/cancelBooking/705
  };
 
  
  // const checkBookingAndCancel = async() => {

  //     if (confirmation) {
  //       const cancellationCharges = 0.2;
  //       const totalFare = await axios.get(`http://localhost:8080/cancellation/${bookingId}/fare`);
  //       const refund = totalFare * (1 - cancellationCharges);
  //       const netRefund = refund;
  //       cancelBooking();
  //       setRefundAmount(netRefund);
  //       setCancellationConfirmed(true);
  //     }

  // };
 
  const resetField = () =>{
    setConfirmation (false);
    //setBookingId ("");
    setContactInfo ("");
  }
 
  // const cancelBooking = () => {
  //   console.log(`Booking ${bookingId} cancelled.`);
  //   sendCancellationMessage();
  // };
 
  // const sendCancellationMessage =async () => {
  //   console.log(
  //     `Message sent to ${contactInfo}: Your booking ${bookingId} has been cancelled.`
  //   );
  //   // const result = await axios.delete(`http://localhost:8080/cancellation/${bookingId}/${showTime}/${showDate}`);    
  //   // console.log(result.data);
  // };
 
  return (
    <div className="container">
      <h2 className="heading">Booking Cancellation</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div>
          <label className="label">
            Booking ID:
            <input
              type="text"
              value={bookingId}
              //onChange={(e) => setBookingId(e.target.value)}
              className="input"
              disabled
            />
          </label>
          <label className="label">
            Contact Information (Mobile number or Email):
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="input"
            />
          </label>
        </div>
    </div>
  );
};
 
export default BookingCancellation;
