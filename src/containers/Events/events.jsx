
import React, {useEffect, useState} from 'react'
import Video from '../../images/ps37-v2-comp-nl.mp4';
import Poster from '../../images/ps37-moon-shot.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const EventCard = ({psEvent}) => {
  const {name, ticket_link, date} = psEvent.fields
  const imgUrl = psEvent.fields.image[0].url
 
  return (
    <div className="event-card">
      <Zoom>
      <div className="event-image">
        <img src={imgUrl} />
      </div>
      </Zoom>
      <div>{name}</div>
      <div>{date}</div>
      <div><a className="event-link" target="_blank" href={ticket_link}>Buy Tix</a></div>

    </div>
  )
}

const Events = () => {
  
  const [psEvents, setPsEvents ] = useState([]);
  console.log('ENV', process.env.REACT_APP_AT)
  //move to api folder at some point
  const getData = () => {
    fetch(`https://api.airtable.com/v0/appdt6G7fO7fyLrR2/Events?maxRecords=3&view=Grid%20view`,
    {
      headers: {"Authorization": `Bearer ${process.env.REACT_APP_AT}` }
    })
    .then((res) => res.json())
    .then((data) => {
      setPsEvents(data.records);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  useEffect(() => {

     getData();


 }, []);

  return (
    <div className="event-page">
      <div className="video-wrapper">
      <div className="video-ol"></div>
        <video className="video" src={Video} autoPlay loop muted poster={Poster}/>
    </div>
    <h1>Upcoming Events</h1>
      <div className="events-wrap">
          {psEvents && psEvents.map(psEvent =>  <EventCard key={psEvent.id} psEvent={psEvent}/> )}
      </div>
    </div>
  )
}

export default Events;