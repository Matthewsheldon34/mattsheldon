
import Mattsheldonlogo from "../assets/Mattsheldonlogo.png";
import Sneakerspage from "../assets/Sneakerspage.png";
import spacetourism from "../assets/spacetourism.png";
import imageproject from "../assets/imageproject.png";
import CardComponents from "../assets/Cardcomponents.png";
import quizapplication from "../assets/quizapplication.png";
import vuvamontenzi from "../assets/vuvamontenzi.png";
import zioncafe from "../assets/zioncafe.png"; 
import matthewsheldonim from "../assets/matthewsheldonim.png"
import { NavLink } from "react-router";

function Projects() {

  const projects = [
    {
      title: "Weather API Integration",
      description:
        "A responsive weather application that integrates a weather API to display current weather information and forecasts.",
      image: imageproject,
      link: "https://matthewsheldon34.github.io/weather-main-apps",
      tags: ["React", "API", "Tailwind CSS"],
    },

    {
      title: "E-commerce Product Page",
      description:
        "A responsive e-commerce product page with product images, cart functionality, quantity controls, and an interactive product preview.",
      image: Sneakerspage,
      link: "https://matthewsheldon34.github.io/ecommerce-product-page-main",
      tags: ["React", "Tailwind CSS", "JavaScript"],
    },

    {
      title: "Interactive Card Details Form",
      description:
        "An interactive card details form that provides users with a clean interface for entering and previewing card information.",
      image: CardComponents,
      link: "https://interactive-card-details-form.netlify.app",
      tags: ["React", "Forms", "CSS"],
    },

    {
      title: "Space Tourism Website",
      description:
        "A responsive space tourism website featuring different destinations, crew members, and technology sections.",
      image: spacetourism,
      link: "https://space-tourism-website-main1.netlify.app",
      tags: ["React", "Responsive Design", "Tailwind CSS"],
    },
     {
      title: "online-quiz-application",
      description:
        "This quiz Application allows users to create their quiz title and add as many questions  as possible.Then get scores based on what they answered correctly.",
      image:quizapplication,
      link: "https://matthewsheldon34.github.io/online-quiz-application/",
      tags: ["React", "Responsive Design", "Tailwind CSS","JavaScript"],
    },
      {
      title: "Montenzi",
      description:
        " Montenzi is a modern lifestyle and fashion brand specializing in premium apparel and footwear that bridges the gap between everyday comfort and contemporary style.",
      image:vuvamontenzi,
      link: "https://matthewsheldon34.github.io/Montenzi/",
      tags: ["React", "Responsive Design", "Tailwind CSS","JavaScript"],
    },

      {
      title: "Zion Cafe",
      description:
        "Zion Coffee Restaurant (also known as Zion Coffee Shop is a cozy dining spot located at Victory City Church in Ntinda, Kampala. Known for its warm, welcoming community atmosphere and customer-first care, the restaurant blends local favorites with international dishes and comforting beverages.",
      image:zioncafe,
      link: "https://matthewsheldon34.github.io/zion/",
      tags: ["React", "Responsive Design", "Tailwind CSS","JavaScript"],
    },
      {
      title: "Matt Sheldon",
      description:
        "Matt Sheldon is the professional portfolio website of Matthew Sheldon, a junior web developer based in Kampala, Uganda.",
      image:matthewsheldonim ,
      link: "https://matthewsheldon34.github.io/mattsheldon/",
      tags: ["React", "Responsive Design", "Tailwind CSS","JavaScript"],
    },
  ];

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


      {/* ================= PROJECTS SECTION ================= */}

      <main className="relative px-6 py-20">

        {/* Background glow */}

        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl animate-pulse"></div>


        <div className="relative mx-auto max-w-7xl">

          {/* ================= TITLE ================= */}

          <div className="mb-16 text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
              My Work
            </p>

            <h1 className="text-4xl font-extrabold sm:text-5xl">

              Projects I've{" "}

              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Built
              </span>

            </h1>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Here are some of the projects I have built while developing
              my frontend and web development skills through hands-on
              experience.
            </p>

          </div>


          {/* ================= PROJECT GRID ================= */}

          <div className="grid gap-8 md:grid-cols-2">


            {projects.map((project, index) => (

              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10"
              >

                {/* Project Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  />


                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>


                  {/* Project number */}

                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 font-bold backdrop-blur-md">
                    0{index + 1}
                  </div>

                </div>


                {/* Project Content */}

                <div className="p-7">

                  <h2 className="text-2xl font-bold transition duration-300 group-hover:text-indigo-400">
                    {project.title}
                  </h2>


                  <p className="mt-4 leading-7 text-gray-300">
                    {project.description}
                  </p>


                  {/* Tags */}

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-sm text-indigo-200 transition duration-300 hover:bg-indigo-400/20"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>


                  {/* Button */}

                  <div className="mt-7">

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-semibold shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-indigo-500/40"
                    >
                      View Project

                      <span className="transition duration-300 group-hover:translate-x-1">
                        →
                      </span>

                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* ================= BOTTOM SECTION ================= */}

          <div className="mt-20 rounded-3xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-10 text-center backdrop-blur-md">

            <h2 className="text-3xl font-bold sm:text-4xl">

              More Projects{" "}

              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Coming Soon
              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
              I’m continuously learning and building new applications as
              I expand my skills in frontend development, backend
              technologies, APIs, and AI-powered applications.
            </p>


            <NavLink
              to="/contact"
              className="mt-7 inline-block rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Let's Connect
            </NavLink>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Projects;
