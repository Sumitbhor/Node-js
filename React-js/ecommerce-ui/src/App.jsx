import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sunflower from './assets/sunflower.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let tagline="Flowers are the music of the ground. From earth's lips spoken without sound."
  let flower={
    name: "sunflower",
    color: "yellow",
    price: 5,
    description : "A bright and cheerful flower that follows the sun."
  }

  return (
    <>
      <h1>Transflower store </h1>
      <hr/>
      {/* <img src={reactLogo} className='logo react' alt="React logo"></img>
      <ol>
        <li>Roses</li>
        <li>Tulips</li>
        <li>Daisies</li>
        <li>Sunflowers</li>
        <li>orchids</li>
      </ol>  */}
      <h2>{tagline}</h2>
      <div className='flower-card'>
        <h3>Featured Flower</h3>
        <p>Name: {flower.name}</p>
        <img src={sunflower} alt={flower.name} className='flower-image'/>
        <p>Color: {flower.color}</p>
        <p>Price: ${flower.price}</p>
        <p>Description: {flower.description}</p>
        <button onClick={()=>setCount(count+1)}>
          Add to Cart({count})
        </button>
      </div>
    </>
  )
}

export default App
