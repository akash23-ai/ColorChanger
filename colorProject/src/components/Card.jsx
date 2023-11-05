import React, {useState} from 'react'
import './Card.css'

function Card({prop}) {
    const [path, setPath] = useState("src/assets/car.png");
  return (
    <div className='card'>
        <div className='imgDiv'><img src={path} alt="CarImage" className='img'/></div>
        <button className='btnRed' onClick={() => setPath('src/assets/car.png')}></button>
        <button className='btnBlue' onClick={() => setPath('src/assets/car1.png')}></button>
        <button className='btnGreen' onClick={() => setPath('src/assets/car2.png')}></button>

        <div className='carName'>{prop}</div>
    </div>
  )
}

export default Card