import React, {useState} from 'react';
import axios from 'axios';
export default function UploadApp(){
  const [url,setUrl]=useState(''); const onSubmit=async()=>{ try{ await axios.post((import.meta.env.VITE_API_BASE||'')+'/api/strategy/create',{ name:'User app', description:'User uploaded app', privateLogicEncrypted:'', publicSummary: url }); alert('App registered'); }catch(e){ alert('Failed'); } };
  return (<div className='p-8 text-white'>
    <h2 className='text-2xl neon'>Register an App (HTTPS URL)</h2>
    <p className='mt-2'>Paste the HTTPS link to the hosted app you want AutoTask to automate.</p>
    <input className='mt-4 w-full p-3 rounded bg-white/5' placeholder='https://your-app.example' value={url} onChange={e=>setUrl(e.target.value)}/>
    <button className='mt-4 p-3 rounded bg-gradient-to-r from-purple-600 to-indigo-600' onClick={onSubmit}>Register App</button>
  </div>);
}
