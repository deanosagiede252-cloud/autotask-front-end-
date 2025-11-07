import React, {useState} from 'react';
import axios from 'axios';
export default function Login(){
  const [email,setEmail]=useState(''); const [pw,setPw]=useState(''); const [deviceId,setDeviceId]=useState('dev-1');
  const onLogin=async()=>{ try{ const res=await axios.post((import.meta.env.VITE_API_BASE||'')+'/api/auth/login',{email,password:pw,deviceId}); alert('Logged in: token length '+(res.data.token||'').length); }catch(e){ alert('Login failed'); } };
  return (<div className='min-h-screen flex items-center justify-center'>
    <div className='p-8 bg-black/60 backdrop-blur-md rounded-2xl w-[420px] neon-border'>
      <h2 className='text-2xl font-bold neon'>AutoTask — Sign In</h2>
      <input className='mt-4 w-full p-3 rounded bg-white/5' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
      <input className='mt-2 w-full p-3 rounded bg-white/5' placeholder='Password' type='password' value={pw} onChange={e=>setPw(e.target.value)}/>
      <button className='mt-4 w-full p-3 rounded bg-gradient-to-r from-purple-600 to-indigo-600' onClick={onLogin}>Sign in</button>
    </div>
  </div>);
}
