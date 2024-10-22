import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../zustand/useStores";
import { useState } from "react";
import AddButton from "./AddButton";
import GradientDivs from "./GradientDivs";
export default function Albums({
  sidebarExpanded,
}: {
  sidebarExpanded: boolean;
}) {
  const Albums = useStore((state) => state.Albums);
  const [albumsToShow, setAlbumsToShow] = useState(6);
  const handleLoadMoreAlbums = () => {
    setAlbumsToShow((pv) => pv + 6);
  };
  const handleLoadLessAlbums = () => {
    setAlbumsToShow((pv) => pv - 6);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: !sidebarExpanded ? 0.8 : 0.7 }}
      exit={{ opacity: 0, x: -100 }}
      className="text-black w-full bg-black/5 p-4 pb-7 rounded-xl  flex flex-col gap-3 shadow-md shadow-black/20 -z-10"
    >
      <div className="relative text-2xl -z-10">
        Albums
        <GradientDivs classNames="h-[1px] mt-3 px-2" />
        <AddButton text="Album" />
      </div>
      <div
        className={`max-h-[155px] flex flex-wrap gap-1 mt-4 overflow-y-auto`}
      >
        <AnimatePresence mode="wait">
          {" "}
          {Albums.slice(0, albumsToShow).map((album) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-[32%] flex justify-start items-center gap-2  text-sm bg-black/10 p-2 rounded-xl"
              >
                <img
                  src={album.pfp}
                  alt="Album"
                  className="size-10  object-cover rounded-md"
                />
                <motion.h1
                  animate={{ fontSize: sidebarExpanded ? "65%" : "90%" }}
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
                albumsToShow < Albums.length
                  ? handleLoadMoreAlbums
                  : handleLoadLessAlbums
              }
              className="px-4 py-1 bg-slate-300 rounded-md"
            >
              {albumsToShow < Albums.length ? "Load More" : "Collapse Albums"}
            </button>
          </div>
        }
      </div>
    </motion.div>
  );
}
