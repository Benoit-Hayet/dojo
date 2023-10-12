import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

const studentList = [
{
  id : "1",
  name : "Benoit Hayet",
  reactLike : true,
  imgSrc :"./assets/img/IMG_0012.jpg",
},
{
  id : "2",
  name : "Adam Hemamou",
  reactLike : false,
  imgSrc :"./assets/img/IMG_9998.jpg",
},
{
  id : "3",
  name : "Nass Harmach",
  reactLike : true,
  imgSrc :"./assets/img/IMG_0005.jpg",
},
{
  id : "4",
  name : "Fred Druet",
  reactLike : true,
  imgSrc :"./assets/img/IMG_0005.jpg",
},
{
  id : "5",
  name : "Sylvain Bonnaure",
  reactLike : false,
  imgSrc :"./assets/img/IMG_0005.jpg",
},
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
