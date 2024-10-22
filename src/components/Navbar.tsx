import { CaretDown, Notification, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "../zustand/useStores";
export default function Navbar() {
  const Profile = useStore((state) => state.Profile);
  const [isAppsDropDown, setIsAppsDropDown] = useState(false);
  const [isMoreDropDown, setIsMoreDropDown] = useState(false);
  const [isNotificationDropDown, setIsNotificationDropDown] = useState(false);
  const notifications = 0;
  const myApps = [
    "Welcome Hub",
    "Progress Boards",
    "Projects",
    "Albums",
    "Tasks",
    "Maps",
    "Ideas",
    "Metrics",
    "Change Makers",
  ];
  const more = ["About Us", "Settings", "Log out", "Help", "Request Support"];
  return (
    <div
      className={`w-screen h-14  fixed left-0 top-0 px-2 py-0.5  flex gap-8 items-center bg-white z-50`}
    >
      <a href="/">
        <div
          className="h-12 w-16 bg-contain bg-no-repeat"
          style={{
            backgroundImage: "url(/makerbleLogo.png)",
          }}
        ></div>
      </a>
      <div className={`flex gap-4 bg-black/20 px-5 py-1.5 rounded-xl`}>
        <div>Home</div>
        <div className={`h-6 w-[1px] bg-black/20`}></div>
        <div
          className="flex items-center gap-1 select-none cursor-pointer"
          onClick={() => setIsAppsDropDown(!isAppsDropDown)}
        >
          Apps
          <CaretDown
            size={13}
            className={`${
              isAppsDropDown ? "rotate-180" : "rotate-0"
            } transition-transform`}
          />
        </div>
        <AnimatePresence>
          {isAppsDropDown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-2 bg-black/20 backdrop-blur-md shadow-lg rounded-md p-4 w-[25%] flex gap-2 flex-wrap"
            >
              {myApps.map((app, index) => {
                return (
                  <a
                    key={index}
                    href="/app1"
                    className="w-[48%] text-sm  px-4 py-2 bg-black/50 text-white   hover:bg-black/70 transition-colors rounded-md"
                  >
                    {app}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-8  px-6  border-x w-1/2 ">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search anything"
            className="outline-none border-b p-0.5 mr-3"
          />
          <button className="bg-black/5 px-2 py-1 rounded-xl">Search</button>
        </div>
        <div
          onClick={() => setIsNotificationDropDown(!isNotificationDropDown)}
          className="relative"
        >
          <div className="flex items-center gap-2 text-xs bg-black/20 hover:bg-black/25 transition-colors  px-3 py-1.5 rounded-xl">
            <Notification
              size={22}
              className={`${notifications > 0 && "text-red-600"}`}
            />
            <div className={`h-5 w-[1px] bg-black/20`}></div>
            {notifications}
          </div>

          <AnimatePresence>
            {isNotificationDropDown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute text-center top-full left-[-80%]  mt-2 bg-black/10 backdrop-blur-md shadow-lg rounded-md p-4 w-56 flex gap-2 flex-col items-center"
              >
                No new <br /> Notification or Message
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-1 bg-black/20 hover:bg-black/25 transition-colors px-2 py-1.5 rounded-xl cursor-pointer ">
          <Plus size={18} weight="bold" />
          Create
        </div>
      </div>
      <div className="flex items-center gap-3 font-medium pr-10 border-r ">
        <img
          src={Profile.avatar}
          alt={Profile.name}
          className="w-10 h-10 rounded-full"
        />
        <h1>{Profile.name}</h1>
      </div>
      <div
        className="relative mx-auto flex items-center gap-4 bg-black/20 px-5 py-1.5 rounded-xl select-none cursor-pointer"
        onClick={() => setIsMoreDropDown(!isMoreDropDown)}
      >
        More
        <CaretDown
          size={13}
          className={`${
            isMoreDropDown ? "rotate-180" : "rotate-0"
          } transition-transform`}
        />
        <AnimatePresence>
          {isMoreDropDown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full -left-10  mt-2 bg-black/20 backdrop-blur-md shadow-lg rounded-md p-4 w-44 flex gap-2 flex-col"
            >
              {more.map((app, index) => {
                return (
                  <a
                    key={index}
                    href="/app1"
                    className="w-full text-sm  px-4 py-2 bg-black/50 text-white   hover:bg-black/70 transition-colors rounded-md"
                  >
                    {app}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
