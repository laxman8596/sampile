import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const Home = () => {

    let history = useHistory()
    const [imgname,setImgname] = useState('')
  return (
    <div>
       <center>
        <input type='text' size='60' placeholder='search any images'
        onChange={(e)=>setImgname(e.target.value)} /><br/>
        <input type='submit' value='submit' onClick={()=> imgname && history.push(`/search/${imgname}`)} />
       </center>
    </div>
  )
}

export default Home