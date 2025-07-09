// import ProjectsSection from "./projects";
import ProjectsSection from "./old_projects_section";
import ExperienceSection from "./experience";
import ContactSection from "./contact";

export default function Main(){
    return(
        <main className="pt-24 lg:w-[52%] lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-base-100 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                        About
                    </h2>
                </div>
                <div>
                    <p className="mb-4">
                        I’m a web developer and computer engineering student with a passion for building clean, accessible, and responsive web applications. I enjoy bringing ideas to life through thoughtful design and well-structured code.
                    </p>
                    <p className="mb-4">
                        As a student, I’ve built projects that range from simple static websites to dynamic applications using React, Next.js, and Python. I’m always exploring new technologies to expand my skills and deliver better solutions — whether it’s modern frontend frameworks, backend development, or cloud tools.
                    </p>
                    <p className="mb-4">
                        Right now, I’m focused on growing as a developer through self-driven projects and contributing to real-world solutions that make people’s lives easier. I love collaborating, solving problems, and learning new ways to make the web faster, more user-friendly, and accessible to everyone.
                    </p>
                    <p className="mb-4">
                        When I’m not coding, you’ll usually find me gaming, tinkering with tech, or researching my next project idea.
                    </p>
                </div>
            </section>
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-base-100 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest  lg:sr-only">
                        Projects
                    </h2>
                </div>
                <div>
                    <ProjectsSection/>
                </div>
            </section>
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-base-100 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest  lg:sr-only">
                        Experience
                    </h2>
                </div>
                <div>
                    <ExperienceSection/>
                </div>
            </section>
            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-base-100 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest  lg:sr-only">
                        Contact
                    </h2>
                </div>
                <div>
                    <ContactSection/>
                </div>
            </section>
        </main>
    );
}