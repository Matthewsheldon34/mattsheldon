
import Mattsheldonlogo from "../assets/Mattsheldonlogo.png";
import sheldon from "../assets/sheldon.jpeg";
import { NavLink } from "react-router";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
        <nav className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <NavLink to="/home" className="flex items-center gap-3">
              <img
                src={Mattsheldonlogo}
                alt="Matt Sheldon logo"
                className="h-14 w-14 rounded-full border-2 border-indigo-400/40 object-cover transition duration-500 hover:scale-110 hover:rotate-6"
              />

              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent">
                Matt Sheldon
              </span>
            </NavLink>


            {/* Navigation */}
            <ul className="hidden items-center gap-8 md:flex">

              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `relative font-medium transition duration-300 ${
                      isActive
                        ? "text-indigo-400"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `font-medium transition duration-300 ${
                      isActive
                        ? "text-indigo-400"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `font-medium transition duration-300 ${
                      isActive
                        ? "text-indigo-400"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `font-medium transition duration-300 ${
                      isActive
                        ? "text-indigo-400"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        </nav>
      </header>


      {/* ================= HERO SECTION ================= */}
      <main className="relative">

        {/* Background glow */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl animate-pulse"></div>

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl animate-pulse"></div>


        <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20">

          <div className="grid w-full items-center gap-14 lg:grid-cols-2">


            {/* ================= PROFILE IMAGE ================= */}
            <div className="flex justify-center lg:justify-start">

              <div className="relative">

                {/* Outer glow */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-2xl"></div>

                {/* Image container */}
                <div className="relative rounded-full border border-white/20 bg-white/5 p-3 shadow-2xl  transition duration-700 hover:scale-105 hover:border-indigo-400/50">

                  <img
                    src={sheldon}
                    alt="Matthew Sheldon"
                    className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80"
                  />

                </div>

                {/* Small floating badge */}
                <div className="absolute -bottom-4 -right-4 rounded-xl border border-white/10 bg-slate-900/90 px-5 py-3 shadow-xl backdrop-blur-md">
                  <p className="text-sm text-gray-400">
                    Currently
                  </p>

                  <p className="font-semibold text-indigo-400">
                    Learning & Building 🚀
                  </p>
                </div>

              </div>

            </div>


            {/* ================= HERO TEXT ================= */}
            <div className="text-center lg:text-left">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                Junior Web Developer
              </p>


              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

                Building{" "}

                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Modern
                </span>

                <br />

                Responsive Web Experiences.

              </h1>


              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                Hi, I'm{" "}
                <span className="font-semibold text-white">
                  Matthew Sheldon
                </span>
                , a junior web developer from Kampala, Uganda.
                I enjoy turning ideas into practical, responsive,
                and user-friendly web applications.
              </p>


              {/* Skills */}
              <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">

                {[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-200 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-400/20"
                  >
                    {skill}
                  </span>
                ))}

              </div>


              {/* Buttons */}
              <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">

                <NavLink
                  to="/projects"
                  className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-3 font-semibold shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-indigo-500/40"
                >
                  View My Projects
                </NavLink>


                <NavLink
                  to="/contact"
                  className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Contact Me
                </NavLink>

              </div>

            </div>

          </div>

        </section>


        {/* ================= WHAT I DO ================= */}
        <section className="relative border-t border-white/10 bg-black/10 px-6 py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                My Skills
              </p>

              <h2 className="text-4xl font-bold">
                What I{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Do
                </span>
              </h2>

            </div>


            <div className="grid gap-6 md:grid-cols-2">


              {/* Frontend */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/10">

                <div className="mb-5 text-4xl">
                  💻
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  Frontend Development
                </h3>

                <ul className="space-y-3 text-gray-300">

                  <li className="transition group-hover:translate-x-1">
                    → Build responsive websites and applications with React.
                  </li>

                  <li className="transition group-hover:translate-x-1">
                    → Create modern interfaces using Tailwind CSS.
                  </li>

                  <li className="transition group-hover:translate-x-1">
                    → Implement interactive features with JavaScript.
                  </li>

                  <li className="transition group-hover:translate-x-1">
                    → Turn designs and ideas into functional interfaces.
                  </li>

                </ul>

              </div>


              {/* API */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/10">

                <div className="mb-5 text-4xl">
                  ⚡
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  API & Application Development
                </h3>

                <ul className="space-y-3 text-gray-300">

                  <li className="transition group-hover:translate-x-1">
                    → Work with REST API integration.
                  </li>

                  <li className="transition group-hover:translate-x-1">
                    → Connect frontend applications to backend services.
                  </li>

                  <li className="transition group-hover:translate-x-1">
                    → Work with authentication and application data.
                  </li>

                  <li className="transition group-hover:translate-x-1">
                    → Deploy applications using Netlify, GitHub Pages and Render.
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CURRENT FOCUS ================= */}
        <section className="px-6 py-20">

          <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-10 text-center backdrop-blur-md">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
              My Direction
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Growing Toward{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Full-Stack Development
              </span>
            </h2>

            <p className="leading-8 text-gray-300">
              I’m currently expanding my knowledge in backend development,
              Python, REST APIs, SQL, and AI-powered applications while
              continuing to strengthen my frontend skills through real-world
              projects.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;
