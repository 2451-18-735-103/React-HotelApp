import React from 'react'
import { useTheme } from './ThemeContext';
const Home = () => {
    const { darkMode } = useTheme();
  return (
    
      <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#333' }}>
      <h2>Welcome to Taj Hotels </h2>
      <p>Explore our Luxiouries stays for your holiday !</p>
      <img src='https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'></img>
      <img className="pict" src='https://content.r9cdn.net/rimg/himg/d6/19/ed/expediav2-2593732-2f8c7e-302729.jpg?crop=true&width=500&height=350' />
      <img className='oli' src='https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg' />
      <img src="https://www.ahstatic.com/photos/7535_ho_03_p_2048x1536.jpg" alt="" />
      <p> Taj HotelsVisakhapatnam Varun Beach

        Hotel that makes every moment matter

        Spoil yourself in 5-star seafront luxury at Taj Hotel Visakhapatnam Varun Beach . Spare contemporary design makes your room a calm haven, and picture windows offer you dazzling Bay of Bengal views. Rise and shine with a dip in the infinity pool and breakfast with an ocean backdrop at the lavish Indian and Western buffet at Taj Hotels.

        The hotel shares a close proximity with the city railway station, Rushikonda Beach, Vizag Port and major hospitals. The popular Submarine Museum is just a walk away. The hotel's city centre location makes it approachable from industrial and business hubs. Taj Hotels Vizag forms part of a complex consisting of an INOX multiplex, night club and mall. Taj Hotels Visakhapatnam Varun Beach is among the only hotels in Visakhapatnam near a beach. The hotel offers calming views of the sea from every nook and corner.

        Welcome to Taj Hotels Visakhapatnam Varun Beach! Enjoy and Relax your stay by the Beach. Overlooking a picturesque panoramic view of the Bay of Bengal.

        Manasa, Hotel Manager</p>
      <h1> Hotel Services</h1>
      <p>Check-in from 03:00 PM - Check out up to 12:00 PM</p>
      <h3>On site :</h3>
      <ul><h4>
        <li>Swimming pool</li>
        <li> car parking</li>
        <li>Dining</li>
        <li>Fitness center</li>
        <li>Resturant</li>
        <li>Bar</li>
        <li>Wifi</li>
      </h4></ul>
      <img className='volt' src='https://www.novotel-visakhapatnam.com/wp-content/uploads/sites/24/2022/10/Room1-2200x1200.jpg' />
      <img className='bolt' src='https://www.novotel-visakhapatnam.com/wp-content/uploads/sites/24/2022/10/The-Square-1-1-2200x1200.jpg' />
      <div className="container">
      <h1 className='oil'>𝙰𝚌𝚌𝚘𝚖𝚖𝚘𝚍𝚊𝚝𝚒𝚘𝚗</h1>
      <h1 className='pil'>Dining options</h1>
      </div>
    </div>
  )
}

export default Home
