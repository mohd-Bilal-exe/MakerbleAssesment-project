import { useState } from "react";
import { useStore } from "../zustand/useStores";
import { motion } from "framer-motion";
import { CaretRight } from "@phosphor-icons/react";
import GradientDivs from "./GradientDivs";

export default function Profile({
  sidebarExpanded,
}: {
  sidebarExpanded: boolean;
}) {
  const Profile = useStore((state) => state.Profile);

  // State for expansion of followers/following sections
  const [followersExpanded, setFollowersExpanded] = useState(false);
  const [followingExpanded, setFollowingExpanded] = useState(false);
  const [progressExpanded, setProgressExpanded] = useState(false);

  // State for showing more followers/following
  const [followersToShow, setFollowersToShow] = useState(6);
  const [followingToShow, setFollowingToShow] = useState(6);
  const [progressToShow, setProgressToShow] = useState(3);
  // Handlers for loading more items
  const handleLoadMoreFollowers = () => {
    setFollowersToShow((prev) => prev + 6);
  };

  const handleLoadMoreFollowing = () => {
    setFollowingToShow((prev) => prev + 6);
  };
  const handleLoadMoreProgress = () => {
    setProgressToShow((prev) => prev + 3);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: !sidebarExpanded ? 0.8 : 0.7 }}
      exit={{ opacity: 0, x: -100 }}
      className="text-black w-full bg-black/5 p-4 pb-7 rounded-xl  flex flex-col gap-3 shadow-md shadow-black/20 -z-10"
    >
      <div className="text-2xl -z-10">
        Profile
        <GradientDivs classNames="h-[1px] mt-3 px-2" />
      </div>
      <div id="pfpName" className="ml-2 flex gap-4 items-center">
        <img
          src={Profile.avatar}
          alt={Profile.name}
          className="w-20 rounded-full"
        />
        <div>
          <h1 className="text-3xl">{Profile.name}</h1>
        </div>
      </div>

      {/* Followers Section */}
      <motion.div
        id="followers"
        initial={{ height: "42px" }}
        animate={{ height: followersExpanded ? "200px" : "42px" }} // Set fixed height for expanded section
        transition={{
          delay: 0.5,
          ease: "easeInOut",
        }}
        className={`bg-black/10 px-4 py-2 rounded-xl overflow-hidden`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setFollowersExpanded(!followersExpanded)}
        >
          <div>Followers</div>
          <CaretRight
            size={"100%"}
            className={`w-4 ${
              followersExpanded ? "rotate-90" : "rotate-0"
            } duration-500 transition-all`}
          />
        </div>

        <div className="w-full h-[140px] flex justify-center flex-wrap gap-1 mt-4 overflow-y-auto">
          {Profile.followers.slice(0, followersToShow).map((follower) => (
            <div
              key={follower.name}
              className="w-[32%] flex items-center gap-1 bg-black/10 p-1 rounded-xl"
            >
              <img
                src={follower.pfp}
                alt={follower.name}
                className="w-8 rounded-full"
              />
              <motion.h1
                animate={{ fontSize: sidebarExpanded ? "65%" : "90%" }}
              >
                {follower.name}
              </motion.h1>
            </div>
          ))}
          {followersToShow < Profile.followers.length && (
            <div className="flex justify-center mt-1 text-sm">
              <button
                onClick={handleLoadMoreFollowers}
                className="px-4 py-1 bg-slate-300 rounded-md"
              >
                Load More Followers
              </button>
            </div>
          )}
        </div>
      </motion.div>
      <motion.div
        id="following"
        initial={{ height: "42px" }}
        animate={{ height: followingExpanded ? "200px" : "42px" }} // Set fixed height for expanded section
        transition={{ delay: 0.5, ease: "easeInOut" }}
        className={`bg-black/10 px-4 py-2 rounded-xl overflow-hidden`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setFollowingExpanded(!followingExpanded)}
        >
          <div>People You Follow</div>
          <CaretRight
            size={"100%"}
            className={`w-4 ${
              followingExpanded ? "rotate-90" : "rotate-0"
            } duration-500 transition-all`}
          />
        </div>

        <div className="w-full h-[140px] flex justify-center flex-wrap gap-1 mt-4 overflow-y-auto">
          {Profile.following.slice(0, followingToShow).map((following) => (
            <div
              key={following.name}
              className="w-[32%] flex items-center gap-1 bg-black/10 p-1 rounded-xl"
            >
              <img
                src={following.pfp}
                alt={following.name}
                className="w-8 rounded-full"
              />
              <motion.h1
                animate={{ fontSize: sidebarExpanded ? "65%" : "100%" }}
              >
                {following.name}
              </motion.h1>
            </div>
          ))}
          {followingToShow < Profile.following.length && (
            <div className="flex justify-center mt-1 text-sm">
              <button
                onClick={handleLoadMoreFollowing}
                className="px-4 py-1 bg-slate-300 rounded-md"
              >
                Load More Following
              </button>
            </div>
          )}
        </div>
      </motion.div>
      <motion.div
        id="progress"
        initial={{ height: "42px" }}
        animate={{ height: progressExpanded ? "200px" : "42px" }} // Set fixed height for expanded section
        transition={{ delay: 0.5, ease: "easeInOut" }}
        className={`bg-black/10 px-4 py-2 rounded-xl overflow-hidden`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setProgressExpanded(!progressExpanded)}
        >
          <div>Personal Progress</div>
          <CaretRight
            size={"100%"}
            className={`w-4 ${
              progressExpanded ? "rotate-90" : "rotate-0"
            } duration-500 transition-all`}
          />
        </div>

        <div className="w-full h-[140px] flex justify-start flex-col gap-3 mt-4 overflow-y-auto">
          {Profile.progress.slice(0, progressToShow).map((item, index) => {
            return (
              <div key={index} className="w-full flex flex-col gap-1 px-2">
                <h1>{item.title}</h1>
                <div
                  id="progressSlider"
                  className="w-full border bg-black/5  border-black/20 rounded-xl overflow-hidden"
                >
                  <div>
                    <motion.div
                      className={`h-2 rounded-xl  ${item.color}`}
                      initial={{ width: "0px" }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{
                        duration: 0.6,

                        delay: progressToShow > 3 ? 0 : 0.2 * (index + 1),
                      }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            );
          })}
          {progressToShow < Profile.progress.length && (
            <div className="flex justify-center mt-1 text-sm">
              <button
                onClick={handleLoadMoreProgress}
                className="px-4 py-1 bg-slate-300 rounded-md"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
