"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>

      <div className="absolute inset-0 -z-10 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-blue-400 opacity-50 blur-[120px]" />
        <div className="absolute top-0 left-0 h-full w-[600px] -translate-x-1/3 -translate-y-1/4 rounded-full bg-purple-400 opacity-50 blur-[120px]" />
      </div>

      <section className="mt-35 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Set Reminders. Time. <br />
          <span className="text-blue-500">Get Alerts</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn by building real-world projects, guided by expert mentors. <br />
          Get job-ready with full career support.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-base font-semibold hover:cursor-pointer shadow-lg hover:shadow-blue-400/70 transition">
            <Link href="/signup">Sign Up</Link>
          </button>
        </div>
      </section>

      <section id="feature" className="flex flex-col md:flex-row gap-6 mt-18 m-4 justify-between">

        <div className="flex flex-col gap-4 rounded-lg p-2">
          <div className="bg-white min-w-[10rem] h-35 rounded-lg p-4 shadow-md">
            <span className="text-3xl font-semibold text-blue-400">No 1</span>
          </div>
          <div className="bg-white min-w-[10rem] rounded-lg flex flex-col p-4 shadow-md">
            <span className="text-7xl text-blue-400">"</span>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a
              modi, eum explicabo, eaque quod accusantium obcaecati distinctio
              saepe quo suscipit sapiente.
            </p>
            <img
              className="rounded w-20 h-20 inline-block p-3 border-2 border-gray-200"
              src="./google.png"
              alt="Google Logo"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-2">
          <div className="bg-white p-6 rounded-lg shadow-md text-center h-50 min-w-[25rem]">
            img
          </div>
          <div className="flex flex-row gap-4 h-50">
            <div className="rounded-lg bg-white p-4 shadow-md w-full text-center">
              stats
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md w-full text-center">
              calls
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md min-w-[20rem] text-center">
          demands
        </div>
      </section>
    </>
  );
};

export default HeroSection;
