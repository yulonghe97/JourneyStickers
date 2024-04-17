
'use client'
import React from 'react'
import { Button } from './ui/button'
import { Separator } from '@radix-ui/react-separator'

export default function Navigation() {
  return (
    <div className='flex w-full justify-center mt-10 items-center'>
       <Button variant="ghost">Home</Button>
        <span className='mx-4'>|</span>
       <Button variant="ghost">About</Button>
    </div>
  )
}
