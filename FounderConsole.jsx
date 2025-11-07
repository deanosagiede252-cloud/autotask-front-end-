import React, {useState} from 'react';
import axios from 'axios';
export default function FounderConsole(){ const [key,setKey]=useState(''); const [msg,setMsg]=useState(''); const run=async(path)=>{ try{ const res=await axios.post((import.meta.env.VITE_API_BASE||'')+`/api/cl/${path}`,{}, { headers:{ 'x-founder-key': key } }); setMsg(JSON.stringify(res.data)); }catch(e){ setMsg('error'); } };
  return (<div className='p-8 text-white'><h2 className='text-2xl neon'>Founder Console</h2>
    <p>Enter founder key to access CL Tech modules (founder-only).</p>
    <input className='mt-2 p-2 rounded bg-white/5' placeholder='founder-key' value={key} onChange={e=>setKey(e.target.value)} />
    <div className='mt-4 space-x-2'><button className='p-2 bg-purple-600 rounded' onClick={()=>run('theories/create')}>Run Theories</button><button className='p-2 bg-indigo-600 rounded' onClick={()=>run('simulation/run')}>Run Simulation</button></div>
    <pre className='mt-4 bg-black/50 p-4 rounded'>{msg}</pre>
  </div>);
}
