import React from 'react'
import Layout from '../components/Layout'
import People from '../assets/img/people.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Layout>
        <div className="text-4xl p-10 bg-black text-white font-bold mb-10">ABOUT US</div>
        <div className="p-10 flex gap-10 mb-10">
            <div className="flex flex-col w-3/4 gap-4">
                <div className="text-2xl font-semibold">BRAND</div>
                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat officiis ratione hic animi autem aspernatur quod incidunt iure quisquam quis cumque quibusdam recusandae eaque eligendi illo nihil voluptate, cum tenetur? Nam tempore minima expedita fugit et tempora, quaerat commodi distinctio eaque dolor molestias, laboriosam nisi quam consequuntur facere cupiditate qui omnis itaque. Cumque mollitia nostrum consectetur earum maxime eius, dignissimos reprehenderit sint modi consequatur, quidem quis ratione voluptatibus natus officiis molestias nobis atque corrupti optio ut itaque? Rem eveniet, dicta dolor, a, optio laboriosam commodi accusamus exercitationem laborum sapiente doloremque laudantium amet. Mollitia hic fugit provident, voluptas placeat qui!</div>
            </div>
            <div className="w-1/4">
                <img src={People} alt="" className='rounded-xl'/>
            </div>
        </div>
        <div className="flex justify-center">
            <Link to="/">
                <button type="button" className='border-2 p-3 rounded-xl mb-10 bg-black text-white'>Back Home</button>
            </Link>
        </div>
    </Layout>
  )
}

export default About