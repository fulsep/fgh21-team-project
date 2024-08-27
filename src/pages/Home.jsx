import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <div className="min-h-screen p-10 flex flex-col w-full justify-center items-center gap-10">
        <h1 className="text-[#20b1af] text-2xl font-semibold uppercase">
          Services
        </h1>
        <div className="flex gap-10">
          <div className="shadow-2xl h-80 w-80 rounded-xl p-5 flex flex-col gap-5">
            <div className="text-[#20b1af] font-semibold">
              IT System Development
            </div>
            <div className="flex-1">
              <article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                amet
              </article>
            </div>
            <div>
              <button className="px-3 py-2 border-2 border-blue-300 text-blue-300 rounded-md">
                Learn more
              </button>
            </div>
          </div>
          <div className="shadow-2xl h-80 w-80 rounded-xl p-5 flex flex-col gap-5">
            <div className="text-[#20b1af] font-semibold">
              IT Manage Services
            </div>
            <div className="flex-1">
              <article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                amet
              </article>
            </div>
            <div>
              <button className="px-3 py-2 border-2 border-blue-300 text-blue-300 rounded-md">
                Learn more
              </button>
            </div>
          </div>
          <div className="shadow-2xl h-80 w-80 rounded-xl p-5 flex flex-col gap-5">
            <div className="text-[#20b1af] font-semibold">IT Academy</div>
            <div className="flex-1">
              <article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                amet
              </article>
            </div>
            <div>
              <button className="px-3 py-2 border-2 border-blue-300 text-blue-300 rounded-md">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
