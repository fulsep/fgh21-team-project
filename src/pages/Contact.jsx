import React from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";

function Contact() {
  return (
    <Layout>
      <div className="flex min-h-screen p-10">
        <div className="flex flex-col justify-center items-center w-[50%]">
          <h1 className="font-bold text-[50px]">Contact Us</h1>
          <form className="flex flex-col bg-black text-white w-[325px] p-[50px] rounded-xl gap-4">
            <label>Name</label>
            <Input type="text" placeholder="Input Your Name..."></Input>
            <label>Email</label>
            <Input type="text" placeholder="Input Your Email.."></Input>
            <label>Message</label>
            <Input type="text" placeholder="Message For us"></Input>
            <button className="bg-white text-black p-2 rounded-md">submit</button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center w-[50%]">
          <h2 className="font-bold text-[50px]">info</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            placeat, corrupti provident commodi voluptate consequatur explicabo
            asperiores, non maiores possimus officia aut aspernatur at esse
            veniam deserunt cupiditate, voluptatem quas.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
