
'use client'
import React from 'react'
import { Button } from './ui/button'
import { Separator } from '@radix-ui/react-separator'
import { useRouter } from 'next/navigation'

export default function Navigation() {

  const router = useRouter();

  return (
    <div className='flex w-full justify-center mt-10 items-center'>
       <Button variant="ghost" onClick={() => router.push('/')}>Home</Button>
        <span className='mx-4'>|</span>
       <Button variant="ghost" onClick={() => router.push('/about')}>About</Button>
    </div>
  )
}
