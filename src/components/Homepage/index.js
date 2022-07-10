import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/background.jpg'
import selfie from '../../assets/seflie.jpg'

export default function Home() {
  return (
    <div>
        <div>
            <body className="grid grid-cols-12 grid-rows-12 gap-12 py-4 h-100 w-30 p-5">
                <img className="border-2 border-white col-span-12 content-center" src={selfie} alt="Adam Belin Seflie"></img> 
                
                <h1 className="font-bold text-4xl text-white col-span-6">Welcome to my portfolio</h1>
                <Link to="/Portfolio">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Work</button>
                    </Link>
                    <Link to="/Contact">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Contact</button>
                    </Link>
                    <Link to="/Resume">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Resume</button>
                    </Link>
                    <div className="grid grid-cols-12 grid-rows-12">
                    </div>
            </body>
        </div>
    </div>
  )
}



