import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [value,setValue] = useState()

    const changevalue = (e) =>{
        setValue(e.target.value)
    }

    const navigate = useNavigate()
    const handeljoinroom = useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])

  return (
    <div>
        <div>
            <input value={value} onChange={changevalue} type='text' placeholder='Enter Your Room ID'/>
            <button onClick={handeljoinroom}>join</button>
        </div>
    </div>
  )
}

export default Home