

import './App.css';
import {countries} from "./coutries";
import { useState } from 'react';

function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [country,setCountry]=useState("");
  const  [acceptedTerms, setAcceptedTerms]  =useState(false);

  const handleSubmit = (event) => {
 
    
    event.preventDefault();
  }

  return (
    <div className="App" style={{textAlign:"center",width:"80%",  marginLeft: 'auto',
    marginRight: 'auto'}}>
          <form onSubmit={handleSubmit} style={{justifyContent:"center",width:"100%",border:'solid',marginTop:'10%',borderWidth:'60%'}}>
      <h1 className='title' style={{color:'MediumBlue'}}>Create Account</h1>
<div className='dv1' style={{marginButton:'20px'}} >
      <label className='lb1' style={{color:'MidnightBlue',fontFamily:'Times, Times New Roman, serif',fontSize:'25px'}}>
        Email:<br/>
        <input className='put1' style={{height:'20px',width:'200px',borderRadius:'5px',borderColor:'MidnightBlue'}}
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      </div>
      <div>
      <label className='lb2' style={{color:'MidnightBlue',fontFamily:'Times, Times New Roman, serif',fontSize:'25px'}}>
        Password:<br/>
        <input className='put2' style={{height:'20px',width:'200px',borderRadius:'5px',borderColor:'MidnightBlue'}}
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
      </div>
      <div className='dv2' style={{marginButton:'20px'}} >
      <label className='lb3' style={{color:'MidnightBlue',fontFamily:'Times, Times New Roman, serif',fontSize:'25px'}} >
        Country: <br/>
        <select
        className='slc' style={{height:'20px',width:'200px',borderRadius:'5px',borderColor:'MidnightBlue',marginBottom:'20px'}}
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option key=""style={{textAlign:'center'}}>Choose your Country</option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>
      </div>
      <div className='dv3' style={{marginButton:'50px'}} >
      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service        
      </label>
    </div>
      <button className='btn' style={{color:"white",backgroundColor:'MidnightBlue',border:'white',borderRadius:'5px',width:'80px',height:'40px',marginTop:'20px'}}>Submit</button>
    </form>
    </div>
  );
}

export default App;
