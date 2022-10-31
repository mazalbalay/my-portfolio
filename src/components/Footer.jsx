import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='flex flex-col h-52 md:h-24 md:flex-row justify-around items-center p-4 bg-blue-50 border-t border-cyan-700'>
        <div>
            <h1 className='font-bold text-cyan-800 font-siganatrue text-5xl'>mazal</h1>
        </div>
        <ul className='font-bold text-cyan-800 text-center'>
            <li><a href="">mazalbalay3@gmail.com</a> </li>
            <li><a href="">0524580605</a> </li>
        </ul>
        <ul className='font-bold text-cyan-800 text-center text-2xl flex'>
            <li><a href=""><AiFillLinkedin/></a></li>
            <li className='mx-2'><a href=""><AiFillInstagram/></a></li>
            <li><a href=""><AiFillGithub/></a></li>
        </ul>
    </div>
  )
}
