
import Mattsheldonlogo from "../assets/Mattsheldonlogo.png";
import { NavLink } from "react-router";

function Contact() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">

        <nav className="mx-auto max-w-7xl px-6">

          <div className="flex items-center justify-between py-4">

            {/* Logo */}

            <NavLink
              to="/home"
              className="flex items-center gap-3"
            >

              <img
                src={Mattsheldonlogo}
                alt="Matt Sheldon logo"
                className="h-14 w-14 rounded-full border-2 border-indigo-400/30 object-cover transition duration-500 hover:scale-110 hover:rotate-6"
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
                    `font-medium transition duration-300 ${
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


      {/* ================= CONTACT SECTION ================= */}

      <main className="relative px-6 py-20">

        {/* Background glow */}

        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl animate-pulse"></div>


        <section className="relative mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-16 text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
              Let's Connect
            </p>

            <h1 className="text-4xl font-extrabold sm:text-5xl">

              Get In{" "}

              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Touch With Me
              </span>

            </h1>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Have a project idea, a question, or an opportunity you'd like
              to discuss? I'd be happy to hear from you.
            </p>

          </div>


          {/* ================= TWO COLUMN LAYOUT ================= */}

          <div className="grid gap-10 lg:grid-cols-2">


            {/* ================= LEFT SIDE ================= */}

            <div className="flex flex-col justify-center">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md transition duration-500 hover:border-indigo-400/30 hover:bg-white/10">

                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                  Contact Me
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">

                  Let's Build Something{" "}

                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Great
                  </span>

                </h2>


                <p className="mt-5 leading-8 text-gray-300">
                  I'm always interested in learning, building new projects,
                  and connecting with people who are working on interesting
                  ideas. If you'd like to work together or simply have a
                  conversation, feel free to reach out.
                </p>


                {/* Contact details */}

                <div className="mt-8 space-y-5">


                  {/* Email */}

                  <a
                    href="mailto:matthewsheldon34@gmail.com"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-500/10"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl transition duration-300 group-hover:scale-110">
                      ✉️
                    </div>

                    <div>

                      <p className="text-sm text-gray-400">
                        Email
                      </p>

                      <p className="font-medium text-gray-200">
                        matthewsheldon34@gmail.com
                      </p>

                    </div>

                  </a>


                  {/* Phone */}

                  <a
                    href="tel:+256000000000"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl transition duration-300 group-hover:scale-110">
                      📱
                    </div>

                    <div>

                      <p className="text-sm text-gray-400">
                        Phone
                      </p>

                      <p className="font-medium text-gray-200">
                        +256 XXX XXX XXX
                      </p>

                    </div>

                  </a>


                  {/* GitHub */}

                  <a
                    href="https://github.com/Matthew254-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-2xl transition duration-300 group-hover:scale-110">
                      💻
                    </div>

                    <div>

                      <p className="text-sm text-gray-400">
                        GitHub
                      </p>

                      <p className="font-medium text-gray-200">
                        github.com/Matthew254-hub
                      </p>

                    </div>

                  </a>


                </div>


                {/* Availability */}

                <div className="mt-8 flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/5 px-4 py-3">

                  <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>

                  <p className="text-sm text-gray-300">
                    Open to junior developer opportunities and interesting projects.
                  </p>

                </div>

              </div>

            </div>


            {/* ================= RIGHT SIDE FORM ================= */}

            <div>

              <form
                method="POST"
                action="/contact"
                className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md transition duration-500 hover:border-indigo-400/30"
              >

                <h2 className="mb-2 text-2xl font-bold">
                  Send Me a Message
                </h2>

                <p className="mb-7 text-gray-400">
                  Fill out the form and I'll get back to you.
                </p>


                {/* Name */}

                <div className="mb-5">

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                  />

                </div>


                {/* Email */}

                <div className="mb-5">

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                  />

                </div>


                {/* Phone */}

                <div className="mb-5">

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+256..."
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  />

                </div>


                {/* Message */}

                <div className="mb-6">

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell me about your project or idea..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
                  ></textarea>

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="group w-full rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3.5 font-semibold shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-indigo-500/40"
                >

                  Send Message

                  <span className="ml-2 inline-block transition duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button>

              </form>

            </div>

          </div>


          {/* ================= BOTTOM ================= */}

          <div className="mt-16 text-center">

            <p className="text-gray-400">
              Thanks for visiting my portfolio.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Matthew Sheldon • Junior Web Developer
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Contact;
