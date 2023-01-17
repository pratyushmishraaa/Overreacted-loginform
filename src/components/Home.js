import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='login'>
    <h2>Login form</h2>
    <form action="">
    <label>User name : </label>   
            <input type="text" placeholder="Enter User name" name="username" required /> <br /> <br />
          
           
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required />  <br /> <br />
            <label> Confirm Password : </label>   
            <input type="password" placeholder="Re-Enter Password" name="password" required />  <br /> <br />
            <button className='btn-1' 
             >Login</button>  <br />  <br />
             
            


    </form>
    
   
    
    
    
   
    
    </div>
    
  )
}

export default Home;