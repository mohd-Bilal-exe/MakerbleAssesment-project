import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../zustand/useStores";
import { useState } from "react";
import AddButton from "./AddButton";
import GradientDivs from "./GradientDivs";
export default function Projects({
  sidebarExpanded,
}: {
  sidebarExpanded: boolean;
}) {
  const Projects = useStore((state) => state.Projects);
  const [ProjectsToShow, setProjectsToShow] = useState(6);
  const handleLoadMoreProjects = () => {
    setProjectsToShow((pv) => pv + 6);
  };
  const handleLoadLessProjects = () => {
    setProjectsToShow((pv) => pv - 6);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: !sidebarExpanded ? 0.8 : 0.5 }}
      exit={{ opacity: 0, x: -100 }}
      className="text-black w-full bg-black/5 p-4 pb-7 rounded-xl  flex flex-col gap-3 shadow-md shadow-black/20 -z-10"
    >
      <div className="relative text-2xl  ">
        Projects
        <GradientDivs classNames="h-[1px] mt-3 px-2" />
        <AddButton text="Project" />
      </div>
      <div className={`max-h-[180px] flex flex-col gap-1 mt-4 overflow-y-auto`}>
        <AnimatePresence mode="wait">
          {" "}
          {Projects.slice(0, ProjectsToShow).map((album) => {
            return (
              <motion.div
                key={album.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-[95%] flex justify-start items-center gap-2  text-sm bg-black/10 p-2 rounded-xl"
              >
                <img
                  src={album.pfp}
                  alt="Album"
                  className="size-10  object-cover rounded-md"
                />
                <motion.h1
                  animate={{ fontSize: sidebarExpanded ? "95%" : "100%" }}
                >
                  {album.name}
                </motion.h1>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {
          <div className="w-full flex justify-center mt-1 text-sm">
            <button
              onClick={
                ProjectsToShow < Projects.length
                  ? handleLoadMoreProjects
                  : handleLoadLessProjects
              }
              className="px-4 py-1 bg-slate-300 rounded-md"
            >
              {ProjectsToShow < Projects.length
                ? "Load More"
                : "Collapse Projects"}
            </button>
          </div>
        }
      </div>
    </motion.div>
  );
}
