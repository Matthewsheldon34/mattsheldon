import Mattsheldonlogo from '../assets/Mattsheldonlogo.png'

import {NavLink} from 'react-router'
function About() {
    return (
        <div>

             <header>
            <nav>
                <div className="flex items-center   p-4 bg-gray-800 text-white gap-2">
                
<img src={Mattsheldonlogo} alt=" logo port"  className="h-25 w-25 rounded-full cursor-pointer"/>
 <span className="text-xl font-semibold ">Matt Sheldon</span>
                
                <ul className="ml-auto  flex justify-center gap-4  text-white p-2">
                    <li><NavLink to="/home" className={({ isActive }) => `hover:underline font-serif text-xl  ${isActive ? "text-white" : "text-gray-400"}`}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => `hover:underline font-serif text-xl ${isActive ? "text-white" : "text-gray-400"}`}>About</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) =>  `hover:underline font-serif text-xl ${isActive ? "text-white" : "text-gray-400"}`}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>  `hover:underline font-serif text-xl ${isActive ? "text-white" : "text-gray-400"}`}>Contact</NavLink></li>
                    
                </ul>
                </div>
            </nav>
        </header>
           <div>
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-6 py-20 text-white">

  {/* Background glow effects */}
  <div className="absolute -left-20 top-20 h-72 w-72 animate-pulse rounded-full bg-purple-600/20 blur-3xl"></div>
  <div className="absolute -right-20 bottom-10 h-72 w-72 animate-pulse rounded-full bg-blue-500/20 blur-3xl"></div>

  <div className="relative mx-auto max-w-6xl">

    {/* Heading */}
    <div className="mb-12 text-center">

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
        Get to know me
      </p>

      <h1 className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
        About Me
      </h1>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

    </div>


    {/* About content */}
    <div className="grid gap-8 lg:grid-cols-3">

      {/* Main About */}
      <div className="space-y-6 lg:col-span-2">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10">

          <h2 className="mb-4 text-2xl font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Matthew Sheldon
            </span>
            👋
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I’m a junior web developer from Kampala, Uganda, passionate about
            building modern, responsive, and user-friendly web applications.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            I have spent around{" "}
            <span className="font-semibold text-white">
              2 years
            </span>{" "}
            developing my web development skills through continuous learning
            and hands-on projects.
          </p>

          <p className="leading-8 text-gray-300">
            My main focus is frontend development, where I work with{" "}
            <span className="font-semibold text-indigo-300">
              React, JavaScript, Tailwind CSS, HTML, and CSS
            </span>{" "}
            to create interactive and responsive web experiences.
          </p>

        </div>


        {/* Projects */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10">

          <h2 className="mb-5 text-2xl font-bold">
            What I've Been Building
          </h2>

          <p className="leading-8 text-gray-300">
            Throughout my learning journey, I have built different types of
            projects, including{" "}
            <span className="text-purple-300">
              weather applications, e-commerce interfaces, contact forms,
              AI-powered applications, and other web projects.
            </span>
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            Working on these projects has helped me develop practical
            experience with APIs, authentication, responsive design,
            Git/GitHub, and deploying applications online.
          </p>

        </div>


        {/* AI & Backend */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/10">

          <h2 className="mb-5 text-2xl font-bold">
            Exploring Beyond Frontend
          </h2>

          <p className="leading-8 text-gray-300">
            I’m also expanding my knowledge beyond frontend development.
            I’m currently learning{" "}
            <span className="font-semibold text-pink-300">
              Python, REST APIs, SQL, and backend development
            </span>{" "}
            with the goal of becoming a well-rounded full-stack developer.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            One area I’m particularly interested in is{" "}
            <span className="font-semibold text-indigo-300">
              AI and web development
            </span>
            . I’m exploring how AI can be integrated into frontend
            applications to create smarter and more useful experiences.
          </p>

        </div>

      </div>


      {/* Right side */}
      <div className="space-y-6">

        {/* Continuous learner */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10">

          <div className="mb-5 text-4xl">
            🚀
          </div>

          <h2 className="mb-4 text-2xl font-bold">
            Continuous Learner
          </h2>

          <p className="leading-7 text-gray-300">
            I enjoy solving problems, experimenting with new technologies,
            and improving through practical experience.
          </p>

          <p className="mt-4 leading-7 text-gray-300">
            My goal is to keep building real-world applications, learn from
            experienced developers, and contribute to products that solve
            meaningful problems.
          </p>

        </div>


        {/* Skills */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">

          <h2 className="mb-6 text-2xl font-bold">
            What I Bring
          </h2>

          <div className="space-y-5">

            <div>
              <p className="mb-2 text-sm font-semibold text-indigo-300">
                Frontend
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-sm text-indigo-200 transition-all duration-300 hover:scale-105 hover:bg-indigo-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            <div>
              <p className="mb-2 text-sm font-semibold text-purple-300">
                Backend
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "REST APIs",
                  "SQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-sm text-purple-200 transition-all duration-300 hover:scale-105 hover:bg-purple-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            <div>
              <p className="mb-2 text-sm font-semibold text-pink-300">
                Tools
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "Vite",
                  "Netlify",
                  "Render",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-pink-400/20 bg-pink-400/10 px-3 py-1.5 text-sm text-pink-200 transition-all duration-300 hover:scale-105 hover:bg-pink-400/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>


    {/* Goals */}
    <div className="mt-10 rounded-3xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 text-center backdrop-blur-md transition-all duration-500 hover:border-indigo-400/40">

      <h2 className="mb-5 text-3xl font-bold">
        My{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Goals
        </span>
      </h2>

      <p className="mx-auto max-w-4xl leading-8 text-gray-300">
        My long-term goal is to become a strong full-stack developer capable
        of taking an idea from concept to a complete, reliable web
        application—from designing the interface and building the frontend
        to developing the backend and connecting databases and APIs.
      </p>

    </div>

  </div>
</section>
        </div>
        </div>
    );
}

export default About;