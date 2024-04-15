import React, { useState } from "react";
import './BookingCancellation.css';
import axios from "axios";
import { useParams } from "react-router-dom";
 
const BookingCancellation = (props) => {

  const {bookingId} = useParams();

  //const [bookingId, setBookingId] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [cancellationConfirmed, setCancellationConfirmed] = useState(false);
  const [refundAmount, setRefundAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
 
  const handleCancellation = () => {
    if (!bookingId || !contactInfo) {
      setErrorMessage("Please enter booking ID and contact information.");
      return;
    }
    time();
    checkBookingAndCancel();
    
  };
 
  const checkBookingAndCancel = () => {
    setTimeout(() => {
      if (confirmation) {
        const cancellationCharges = 0.2;
        const totalFare = 100;
        const refund = totalFare * (1 - cancellationCharges);
        const netRefund = refund;
        cancelBooking();
        setRefundAmount(netRefund);
        setCancellationConfirmed(true);
      }
    }, 100);
  };
 
  const resetField = () =>{
    setConfirmation (false);
    //setBookingId ("");
    setContactInfo ("");
 
  }
 
  const cancelBooking = () => {
    console.log(`Booking ${bookingId} cancelled.`);
    sendCancellationMessage();
  };
 
  const sendCancellationMessage =async () => {
    console.log(
      `Message sent to ${contactInfo}: Your booking ${bookingId} has been cancelled.`
    );
    const result = await axios.delete(`http://localhost:8080/user/booking/${bookingId}`);    
    console.log(result.data);
  };
 
  const time = () => {
    const showTime = new Date(2024, 2,24, 18, 0, 0).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - showTime;
    console.log(timeDifference);
  
    // Calculate time difference in hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    console.log(hoursDifference);
  
    console.log("Confirmation:", confirmation);
    console.log("Time Difference:", hoursDifference);
  
    if (hoursDifference > 3) {
      setConfirmation(true);
    } else {
      alert("Cancellation is not allowed within 3 hours of the show time.");
      setConfirmation(false);
    }
  };
 
  return (
    <div className="container">
      <h2 className="heading">Booking Cancellation</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {!cancellationConfirmed ? (
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
          {confirmation && (
            <div className="confirmation">
              <p>Are you sure you want to cancel this booking?</p>
              <button className="btn" onClick={handleCancellation}>
                Yes, Cancel
              </button>
              <button className="btn" onClick={resetField}>
                No, Go Back
              </button>
            </div>
          )}
          {!confirmation && (
            <button className="btn" onClick={handleCancellation}>
              Cancel Booking
            </button>
          )}
        </div>
      ) : (
        <div className="cancellation-confirmed">
          <p>Booking id {bookingId} has been successfully cancelled.</p>
          <p>Refund Amount: ${refundAmount}</p>
          {/* Display any additional information here */}
        </div>
      )}
    </div>
  );
};
 
export default BookingCancellation;