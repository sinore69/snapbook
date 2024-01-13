"use client"

import { QueryClientProvider,QueryClient } from "@tanstack/react-query"
import { ReactNode, useState } from "react"
import React from 'react'

function Providers({children}:{children:ReactNode}) {
    const [queryclient]=useState(()=> new QueryClient())
  return (
    <QueryClientProvider client={queryclient}>
        {children}
    </QueryClientProvider>
  )
}

export default Providers