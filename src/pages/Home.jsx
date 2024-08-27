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
    </Layout>
  );
}

export default Home;
