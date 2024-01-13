'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import get from '@/server actions/get'
function Render() {
    async function getdata(){
        const data=await get();
        return data;
    }
    const query=useQuery({
        queryKey:['data'],
        queryFn: getdata
    })
  return (
    <div>
        {query.data?.map((item:any)=>
        <p key={item.id}>{item.name}</p>
        )}
    </div>
  )
}

export default Render