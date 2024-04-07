import { useState } from 'react'

import './App.css'
import axios from 'axios'
function App() {
  const [result, setresult] = useState(null)
  const [search, setSearch] = useState("")
  async function   handleSubmit  (){
  
 const res=await axios.post('http://localhost:5001',{
      search:search
    })
    console.log(res.data.organic_results)
    setresult(res.data.organic_results)
 }
 
  return (
    
    <div className="container"><h1>     Search On Kuch_Bhi</h1> <div className="search"> <div className="row"> <div className="col-md-6"> <div className="search-1"> <i className='bx bx-search-alt'></i> </div> </div> <div className="col-md-6"> <div> <div style={{"border":"1px solid black"}} className="search-2"> <i className='bx bxs-map' ></i> <input  type="text" value={search} onChange={(e) => {
      setSearch(e.target.value)
    }} placeholder="Seach what you want" /> <button onClick={handleSubmit}>Search</button> </div> </div> </div> </div> 
    
    
     </div>
      <hr />
      {console.log(search)}
    

    
    <div>
      {result && result.map((item, index) => {
        return (
          <div key={index} style={{"border":"5px solid black","width":"90vw"}}>
            <hr />
            <h2>{item.title}</h2>
            
            <a href={`${item.link}`}><p>{item.link}</p></a>
            
            <p>{`${item.snippet}`} <a href={`${item.link}`}>Read more...</a></p>
            
            <img src={`${item.thumbnail}`} alt="" />
            <hr />
          </div>
        )
      })}
    </div>

    </div>

  )
}

export default App