import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-gray-50'>
            <div className='flex p-5 gap-5'>
                <div className='flex-1 min-w-[400px] w-full flex flex-col gap-3'>
                    <div className='text-2xl font-bold uppercase'>Brand</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptates. Amet tempore ullam qui explicabo quaerat ducimus quia voluptate nihil voluptates est, architecto, repudiandae sint maxime? Repellat necessitatibus in illo.</div>
                </div>
                <ul className='flex-1 flex flex-col gap-3'>
                    <li>
                        <Link to="/">Item 1</Link>
                    </li>
                    <li>
                        <Link to="/">Item 2</Link>
                    </li>
                    <li>
                        <Link to="/">Item 3</Link>
                    </li>
                    <li>
                        <Link to="/">Item 4</Link>
                    </li>
                    <li>
                        <Link to="/">Item 5</Link>
                    </li>
                </ul>
                <ul className='flex-1 flex flex-col gap-3'>
                    <li>
                        <Link to="/">Item 1</Link>
                    </li>
                    <li>
                        <Link to="/">Item 2</Link>
                    </li>
                    <li>
                        <Link to="/">Item 3</Link>
                    </li>
                    <li>
                        <Link to="/">Item 4</Link>
                    </li>
                    <li>
                        <Link to="/">Item 5</Link>
                    </li>
                </ul>
                <ul className='flex-1 flex flex-col gap-3'>
                    <li>
                        <Link to="/">Item 1</Link>
                    </li>
                    <li>
                        <Link to="/">Item 2</Link>
                    </li>
                    <li>
                        <Link to="/">Item 3</Link>
                    </li>
                    <li>
                        <Link to="/">Item 4</Link>
                    </li>
                    <li>
                        <Link to="/">Item 5</Link>
                    </li>
                </ul>
                <ul className='flex-1 flex flex-col gap-3'>
                    <li>
                        <Link to="/">Item 1</Link>
                    </li>
                    <li>
                        <Link to="/">Item 2</Link>
                    </li>
                    <li>
                        <Link to="/">Item 3</Link>
                    </li>
                    <li>
                        <Link to="/">Item 4</Link>
                    </li>
                    <li>
                        <Link to="/">Item 5</Link>
                    </li>
                </ul>
            </div>
            <div className='bg-gray-100 p-5'>
                &copy; 2024 Fazztrack
            </div>
        </footer>
    )
}

export default Footer