import Link from 'next/link'
import React from 'react'

export default function MainNavigation() {
  return (
    <headers>
        <nav>
            <ul className='flex justify-center gap-x-8 bg-violet-600 text-white font-bold h-12'>
                <li>
                    <Link className='py-2 block' href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='py-2 block' href="/posts">
                        Posts
                    </Link></li>
                <li>
                    <Link className='py-2 block' href="/about">
                        about us
                    </Link></li>
            </ul>
        </nav>
    </headers>
  )
}
