import React from "react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="min-h-screen p-10">
        <div className="text-4xl font-bold flex justify-center gap-8">
          <div className="shadow-md overflow-hidden rounded-2xl">
            <div className="bg-red-400 h-screen max-h-[200px] p-4"></div>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex flex-col">
                <div className="text-[24px]">Serayu Rafting</div>
                <div className="text-[12px] text-gray-400">
                  Dieng, Indonesia
                </div>
              </div>
              <div className="flex gap-8 justify-center items-center">
                <p className="text-xl">$20/person</p>
                <button className="text-xl text-orange-400 border border-orange-400 py-2 px-4 rounded-xl">
                  Book
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md overflow-hidden rounded-2xl">
            <div className="bg-yellow-400 h-screen max-h-[200px] p-4"></div>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex flex-col">
                <div className="text-[24px]">Serayu Rafting</div>
                <div className="text-[12px] text-gray-400">
                  Dieng, Indonesia
                </div>
              </div>
              <div className="flex gap-8 justify-center items-center">
                <p className="text-xl">$20/person</p>
                <button className="text-xl text-orange-400 border border-orange-400 py-2 px-4 rounded-xl">
                  Book
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md overflow-hidden rounded-2xl">
            <div className="bg-green-400 h-screen max-h-[200px] p-4"></div>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex flex-col">
                <div className="text-[24px]">Serayu Rafting</div>
                <div className="text-[12px] text-gray-400">
                  Dieng, Indonesia
                </div>
              </div>
              <div className="flex gap-8 justify-center items-center">
                <p className="text-xl">$20/person</p>
                <button className="text-xl text-orange-400 border border-orange-400 py-2 px-4 rounded-xl">
                  Book
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md overflow-hidden rounded-2xl">
            <div className="bg-blue-400 h-screen max-h-[200px] p-4"></div>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex flex-col">
                <div className="text-[24px]">Serayu Rafting</div>
                <div className="text-[12px] text-gray-400">
                  Dieng, Indonesia
                </div>
              </div>
              <div className="flex gap-8 justify-center items-center">
                <p className="text-xl">$20/person</p>
                <button className="text-xl text-orange-400 border border-orange-400 py-2 px-4 rounded-xl">
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
