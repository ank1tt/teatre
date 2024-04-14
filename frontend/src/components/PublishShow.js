import React, { useState } from 'react'
import { DatePicker, TimePicker, Button, Card } from 'antd'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PublishShow = () => {

  const [showDate, setShowDate] = useState(null);
  const [showTime, setShowTime] = useState(null);
  const {movieId} = useParams();


  const handlePublish = () => {
    const showDetails = {
        movies: {
            movieId: parseInt(movieId), // convert movieId to a number
          },
        showDate: showDate ? showDate.format('YYYY-MM-DD') : null,
        showTime: showTime ? showTime.format('HH:mm:ss') : null,
    };
   
    console.log(showDetails);

    try{
        const response = axios.post('http://localhost:8080/admin/publish-show', showDetails);
        alert('Show Published Successfully');
    } catch(error){
        console.log('Failed to publish show :', error);
    }   
  };

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', color: 'white' }}>
        <h1 style={{fontFamily: 'monospace, sans-serif'}}> 
            Publish Shows
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Card style={{ width: 500, height: 300}}>
              

                <label htmlFor="date"> Show Date: </label>
                <DatePicker onChange={setShowDate} />

                <label htmlFor="time">Show Time : </label>
                <TimePicker onChange={setShowTime} />
                <br></br>

                <Button type="primary" onClick={handlePublish}>Publish Shows</Button>
            </Card>
        </div>
    </div>
  )
}

export default PublishShow