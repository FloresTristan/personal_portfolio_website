import { VscGithub } from "react-icons/vsc";
import { LiaFacebook } from "react-icons/lia";
import { SiGoogle } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Header(){
    return(
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
                <div className="flex min-w-max justify-around items-center md:justify-start">
                    <div className="avatar avatar-online pb-5 ">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                        </div>
                    </div>
                    <div className="md:pl-5">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                            Michael Flores
                        </h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                            Jr. Web Developer
                        </h2>
                    </div>
                </div>
                <p className="mt-4 max-w-xs leading-normal">
                    I build modern web applications with kinda clean code and thoughtful design.
                </p>
                <nav className="nav hidden lg:block">
                    <ul className="mt-16 w-max">
                        <li>
                            <a className="group flex items-center py-3" href="#about">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all 
                                group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200
                                 motion-reduce:transition-none">

                                </span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    About
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="group flex items-center py-3" href="#projects">
                                <span className=" mr-4 h-px w-8 bg-slate-600 transition-all 
                                group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200
                                 motion-reduce:transition-none">

                                </span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    Projects
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="group flex items-center py-3" href="#experience">
                                <span className="mr-4 h-px w-8 bg-slate-600 transition-all
                                group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200
                                 motion-reduce:transition-none">
                                </span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    Experience
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="group flex items-center py-3" href="#contact">
                                <span className="mr-4 h-px w-8 bg-slate-600 transition-all
                                group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200
                                 motion-reduce:transition-none">
                                </span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    Contact
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center">
                <li className="mr-5 shrink-0 text-xs">
                    <a className="block hover:text-slate-200" href="mailto:michaeltristanflores646@gmail.com">
                        <span className="sr-only">
                            Gmail
                        </span>
                        <SiGoogle className="w-6 h-6"/>
                    </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <a className="block hover:text-slate-200" href="www.linkedin.com/in/michael-tristan-flores">
                        <span className="sr-only">
                            LinkedIn
                        </span>
                        <TiSocialLinkedinCircular className="w-9 h-9"/>
                    </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <a className="block hover:text-slate-200" href="https://github.com/FloresTristan">
                        <span className="sr-only">
                            Github
                        </span>
                        <VscGithub className="w-7 h-7"/>
                    </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <a className="block hover:text-slate-200" href="https://facebook.com/michaeltristan.flores">
                        <span className="sr-only">
                            FaceBook
                        </span>
                        <LiaFacebook className="w-9 h-9"/>
                    </a>
                </li>
            </ul>
        </header>
    );
}