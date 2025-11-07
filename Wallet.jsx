import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function Wallet(){
  const [bal,setBal]=useState(null);
  useEffect(()=>{ axios.get((import.meta.env.VITE_API_BASE||'')+'/api/wallet/balance?userId=demo').then(r=>setBal(r.data)).catch(()=>setBal({error:true})); },[]);
  return (<div className='p-8 text-white'><h2 className='text-2xl neon'>Wallet</h2><pre className='mt-4 bg-black/50 p-4 rounded'>{JSON.stringify(bal,null,2)}</pre></div>);
}
