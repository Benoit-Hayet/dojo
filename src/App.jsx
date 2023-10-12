import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Wilder from "./components/Wilder";

const studentList = [
{
  name : "Benoit Hayet",
  reactLike : true,
  imgSrc :"./src/assets/img/IMG_0012.jpg",
},
{
  name : "Adam Hemamou",
  reactLike : false,
  imgSrc :"./src/assets/img/IMG_9998.jpg",
},
{
  name : "Nass Harmach",
  reactLike : true,
  imgSrc :"./src/assets/img/IMG_0005.jpg",
},
{
  name : "Fred Druet",
  reactLike : true,
  imgSrc :"./src/assets/img/IMG_9999.jpg",
},
{
  name : "Sylvain Bonnaure",
  reactLike : false,
  imgSrc :"./src/assets/img/IMG_0037.jpg",
},
]


function App() {
  const [index, setIndex] = useState(0)

  const handleClick = (element) => {
    setIndex(element)
  
  }
  console.log(index)

  return (
    <>
      <Navbar studentList={studentList} handleClick={handleClick}/>
      <Wilder student={studentList[index]}/>
    </>
  )
}

export default App;
