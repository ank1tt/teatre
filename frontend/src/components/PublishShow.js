import React, { useState } from 'react'
import { DatePicker, TimePicker, Button, Card, Input } from 'antd'
import { useParams } from 'react-router-dom'
import axios from 'axios'
 
const PublishShow = () => {
 
  const [shows, setShows] = useState([{ showDate: null, showTime: null, hallId: '' }]);
  
  const {movieId} = useParams();
 
  const handlePublish = async () => {
    for (let i = 0; i < shows.length; i++) {
      const showDetails = {
        movies: {
          movieId: parseInt(movieId), // convert movieId to a number
        },
        showDate: shows[i].showDate ? shows[i].showDate.format('YYYY-MM-DD') : null,
        showTime: shows[i].showTime ? shows[i].showTime.format('HH:mm:ss') : null,
        hall: {
          hallId: shows[i].hallId,
        }
      };
   
      console.log(showDetails);
 
      try{
        const response = await axios.post('http://localhost:8080/admin/publish-show', showDetails);
        if(response.status === 200){
          alert('Show Published Successfully');
        }
      } catch(error){
        console.log('Failed to publish show :', error);
        if (error.response && error.response.status === 500) { // Check if error response exists and status is 500
          alert('Server Error: Failed to publish show');
        }
      }   
    }
  };
 
  const addShow = () => {
    setShows([...shows, { showDate: null, showTime: null, hallId: '' }]);
  }
 
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
      <h1 style={{fontFamily: 'monospace, sans-serif'}}>
        Publish Shows
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Card style={{ width: 600, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          {shows.map((show, index) => (
            <div key={index}>
              <label htmlFor="date"> Show Date: </label>
              <DatePicker style={{ width: '100%' }} onChange={date => {
                const newShows = [...shows];
                newShows[index].showDate = date;
                setShows(newShows);
              }} />
 
              <label htmlFor="time">Show Time : </label>
              <TimePicker style={{ width: '100%' }} onChange={time => {
                const newShows = [...shows];
                newShows[index].showTime = time;
                setShows(newShows);
              }} />
 
              <label htmlFor="hallId">Hall ID : </label>
              <Input name="hallId" onChange={e => {
                const newShows = [...shows];
                newShows[index].hallId = e.target.value;
                setShows(newShows);
              }} />
            </div>
          ))}
 
          <br></br>
          <br></br>
 
          <Button type="primary" onClick={addShow}>Add Show</Button>
          <Button type="primary" onClick={handlePublish}>Publish Shows</Button>
        </Card>
      </div>
    </div>
  )
}
 
export default PublishShow;