import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  async function   handleSubmit  (){
  
 const res=await axios.post('http://localhost:5001',{
      search:search
    })
    console.log(res.data)
 }
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState("")
  return (

    <div className="container"><h1>     Search gpt</h1> <div className="search"> <div className="row"> <div className="col-md-6"> <div className="search-1"> <i className='bx bx-search-alt'></i> </div> </div> <div className="col-md-6"> <div> <div className="search-2"> <i className='bx bxs-map' ></i> <input type="text" value={search} onChange={(e) => {
      setSearch(e.target.value)
    }} placeholder="Seach what you want" /> <button onClick={handleSubmit}>Search</button> </div> </div> </div> </div> </div>

      {console.log(search)}
    </div>

  )
}

export default App