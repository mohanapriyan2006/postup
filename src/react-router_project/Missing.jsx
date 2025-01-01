import React from 'react'
import { Link } from 'react-router-dom'

export const Missing = () => {
  return (
    <main className='missing'>
    <h2>Page Not Found</h2>
    <p>Well, that's disapponting.</p>
    <Link to={'/'}><p>visit Our Homepage</p>
    </Link>
    </main>
  )
}
