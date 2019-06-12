import starsound from "../assets/starsound.jpg";
import API from "../assets/Api.png";
import project3 from "../assets/project3.jpg";
// import { Link } from "react-router-dom"



const PROJECTS = [
    {
      id: 1,
      title: 'STAR SOUND',
      description: 'Seach, preview hit songs from your favorite artists ',
      link: '/music-master',
      image: starsound
    },
    {
      id: 2,
      title: 'MY API',
      description: 'A REST API built with GET and POST requests!',
      link: 'https://github.com',
      image: API
    },
    {
      id: 3,
      title: "WEATHER AND TEMPERATURE UPDATE",
      description: 'Check temperature, weather of your favorite cities',
      link: 'https://quick-easy-weather-app.herokuapp.com/',
      image: project3
    }
  ];

  export default PROJECTS
  