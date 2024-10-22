import { useState } from "react";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Tasks from "./components/Tasks";
import { AnimatePresence, motion } from "framer-motion";
import { CaretRight } from "@phosphor-icons/react";
import Albums from "./components/Albums";
import Projects from "./components/Projects";
import Organizations from "./components/Organizations";
import Contact from "./components/Contacts";
import Boards from "./components/Boards";
import Navbar from "./components/Navbar";
import Futter from "./components/Futter";
function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  return (
    <>
      <div className="w-screen flex px-4 pb-4 gap-4">
        <Navbar />
        <motion.div
          initial={{ width: "1%" }}
          animate={{ width: sidebarExpanded ? "25%" : "1%" }}
          transition={{ delay: 0.5 }}
          onClick={() =>
            !sidebarExpanded && setSidebarExpanded(!sidebarExpanded)
          }
          className={`relative  rounded-lg flex flex-col gap-4 mt-16 ${
            sidebarExpanded
              ? "h-[990px]"
              : "h-screen bg-black/15 delay-700 cursor-pointer"
          } transition-colors z-0 `}
        >
          <motion.button
            layout
            className={` flex   justify-center items-center ${
              !sidebarExpanded ? "h-full" : "h-6 bg-black/20"
            } transition-all delay-500    w-6 p-1  rounded-full`}
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
          >
            <CaretRight
              size={"90%"}
              weight="bold"
              className={` ${
                sidebarExpanded ? "rotate-180" : "rotate-0"
              } delay-300 transition-all`}
            />
          </motion.button>
          <AnimatePresence>
            {sidebarExpanded && <Profile sidebarExpanded={sidebarExpanded} />}
          </AnimatePresence>
          <AnimatePresence>
            {sidebarExpanded && <Albums sidebarExpanded={sidebarExpanded} />}
          </AnimatePresence>
          <AnimatePresence>
            {sidebarExpanded && (
              <Organizations sidebarExpanded={sidebarExpanded} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {sidebarExpanded && <Boards sidebarExpanded={sidebarExpanded} />}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ width: "66.666667%" }}
          animate={{ width: sidebarExpanded ? "50%" : "66.666667%" }}
          transition={{ delay: 0.5 }}
          className={`mt-16`}
        >
          <Feed sidebarExpanded={sidebarExpanded} />
        </motion.div>
        <motion.div
          initial={{ width: "33.333333%" }}
          animate={{ width: sidebarExpanded ? "25%" : "33.333333%" }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-4 mt-16"
        >
          <Tasks />
          <Projects sidebarExpanded={sidebarExpanded} />
          <Contact sidebarExpanded={sidebarExpanded} />
        </motion.div>
      </div>
      <Futter />
    </>
  );
}

export default App;
