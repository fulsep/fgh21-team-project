import React from "react";
import Layout from "../components/Layout";
import { FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <Layout>
      <div className="flex min-h-screen p-10">
        <div className="flex flex-col justify-center items-center w-[50%]">
          <h1 className="font-bold text-[50px]">Contact Us</h1>
          <form className="flex flex-col bg-black text-white w-[325px] p-[50px] rounded-xl">
            <label>Name</label>
            <input type="name" className="bg-white" />
            <label>Email</label>
            <input type="email" className="bg-white" />
            <label>Message</label>
            <input type="text-area" className="bg-white" />
            <button>submit</button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center w-[50%] gap-[20px]">
          <h2 className="font-bold text-[50px]">info</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            placeat, corrupti provident commodi voluptate consequatur explicabo
            asperiores, non maiores possimus officia aut aspernatur at esse
            veniam deserunt cupiditate, voluptatem quas.
          </p>
          <button className="flex items-center gap-[20px] hover:text-blue-400">
            <FaEnvelope className="text-[20px]" />
            <div>Admin#123@mail.com</div>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
