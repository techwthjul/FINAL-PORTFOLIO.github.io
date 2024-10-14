import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Filter projects based on the selected category
  const filteredProjects = PROJECTS.filter((project) =>
    selectedCategory === "ALL"
      ? true
      : project.technologies.includes(selectedCategory)
  );

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Category Filter Buttons */}
      <div className="flex justify-center mb-8">
        {["ALL", "POWER BI", "EXCEL", "SQL", "R", "PYTHON"].map((category) => (
          <button
            key={category}
            className={`mr-4 px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-purple-900 text-white"
                : "bg-neutral-200 text-neutral-900"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Listing */}
      <div>
        {filteredProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-2 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap items-center">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 inline-block"
                  >
                    {tech}
                  </span>
                ))}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View Project
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;