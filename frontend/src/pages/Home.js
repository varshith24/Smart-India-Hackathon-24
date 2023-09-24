import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  const userData = JSON.parse(localStorage.getItem("userData"))
  
  return (
    <div>
       {console.log(userData)}
      Home hi
        <h2>{userData["msg"]}</h2>
        <h2>{userData.password}</h2>
        <h2>{userData.email}</h2>
      </div>
  )
}

export default Home