
import React from "react";

async function page() {
    const res=await fetch('http://localhost:3000/api/get'); 
    console.log(res)
  return <div>page</div>;
}

export default page;
