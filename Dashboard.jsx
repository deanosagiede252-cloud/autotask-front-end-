import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function Dashboard(){
  const [health,setHealth]=useState(null);
  useEffect(()=>{ axios.get((import.meta.env.VITE_API_BASE||'')+'/api/health').then(r=>setHealth(r.data)).catch(e=>setHealth({error:true})); },[]);
  return (<div className='p-8 text-white'>
    <header className='flex justify-between items-center'>
      <h1 className='text-4xl font-bold neon'>AutoTask Tech</h1>
      <nav className='space-x-4'><a href='/upload' className='text-sm'>Upload App</a><a href='/wallet' className='text-sm'>Wallet</a></nav>
    </header>
    <section className='mt-8 grid grid-cols-3 gap-6'>
      <div className='p-6 bg-black/60 rounded-xl'>Balance card (wallet connected)</div>
      <div className='p-6 bg-black/60 rounded-xl'>Active strategies</div>
      <div className='p-6 bg-black/60 rounded-xl'>Notifications</div>
    </section>
    <section className='mt-8'>
      <pre className='bg-black/50 p-4 rounded'>{JSON.stringify(health,null,2)}</pre>
    </section>
  </div>);
}
