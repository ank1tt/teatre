import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
 
const DeleteShows = () => {
    const[shows, setShows] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8080/admin/get-all-shows')
        .then(response => {
            setShows(response.data);
        })
        .catch(error => {
            console.error('Failed to fetch shows :', error);
        });
    }, []);
 
    const deleteShow = (showId) => {
        if (window.confirm('Are you sure you want to delete this show?')) {
            axios.delete(`http://localhost:8080/admin/delete-show/${showId}`)
            .then(response => {
                setShows(shows.filter(show => show.showId !== showId));
            })
            .catch(error => {
                console.error('Failed to delete show :', error);
            });
        }
    }
 
    return (
        <div style={{backgroundColor : 'black', minHeight: '100vh'}}>
            <h1 style={{fontFamily: 'monospace, sans-serif', color: 'white'}}>Configure Shows</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <table style={{border: '1px solid white', color: 'white', width: '80%'}}>
                    <thead>
                        <tr>
                            <th> Show ID </th>
                            <th> Show Date </th>
                            <th> Show Time </th>
                            <th> Movie ID </th>
                            <th> Hall ID </th> {/* New table header for hall ID */}
                            <th> Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {shows.map(show => (
                            <tr key={show.showId}>
                                <td> {show.showId} </td>
                                <td> {show.showDate} </td>
                                <td> {show.showTime} </td>
                                <td> {show.movies.movieId} </td>
                                <td> {show.hall.hallId} </td> {/* New table data cell for hall ID */}
                                <td>
                                    <button onClick={() => deleteShow(show.showId)} style={{backgroundColor: 'red'}}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
 
export default DeleteShows;