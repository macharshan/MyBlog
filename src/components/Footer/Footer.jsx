import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../Logo'
import { IoLogoGithub, IoLogoLinkedin  } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

function Footer() {
  return (
    <section className="w-full relative overflow-hidden py-10 bg-zinc-950 buttom-0 border border-zinc-950">
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-wrap">
                    <div className="w-full py-6 basis-2/4 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center text-white">
                                <Logo size={50}/>
                            </div>
                            <div>
                            <h2 className="text-sm text-cyan-600 mb-4">
                                A blog made with React-JS library.</h2>
                                <p className="text-sm text-cyan-600">
                                    &copy; Copyright 2023.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="basis-1/4 w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-cyan-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="basis-1/4 w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-cyan-500">
                                Contact
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700 flex justify items-center gap-2"
                                        to="https://github.com/macharshan"
                                        target='_blank'
                                    >
                                        <IoLogoGithub title='GitHub' /> GitHub
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700 flex justify items-center gap-2"
                                        to="https://www.linkedin.com/in/harsha-vardhan-macharla/"
                                        target='_blank'
                                    >
                                        <IoLogoLinkedin /> Linked in
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700 flex justify items-center gap-2"
                                        to="mailto:harshavardhan2906@gmail.com"
                                        target='_blank'
                                    >
                                        <MdOutlineEmail /> Email me
                                    </Link>
                                </li>
                                <li>
                                    <NavLink
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700 flex justify items-center gap-2"
                                        to="/feed-back"
                                    >
                                        <VscFeedback /> Feed Back
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-cyan-500">
                                Projects
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700"
                                        to="https://harshavardhanmacharla.netlify.app/"
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700"
                                        to="https://weatheronroad.netlify.app/"
                                    >
                                        Weather on-road
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-cyan-900 hover:text-cyan-700"
                                        to="https://seriesinformation.netlify.app/"
                                    >
                                        Series Information
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer