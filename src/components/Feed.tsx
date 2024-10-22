import { ClipboardText, Heart, PaperPlaneRight } from "@phosphor-icons/react";
import { useStore } from "../zustand/useStores";
import formatTime from "../utils/timeFormat";
import { updatedAgo } from "../utils/updatedAgo";
import { motion } from "framer-motion";
import { useState } from "react";
import GradientDivs from "./GradientDivs";

export default function Feed({
  sidebarExpanded,
}: {
  sidebarExpanded: boolean;
}) {
  const Posts = useStore((state) => state.Posts);
  const ProfileName = useStore((state) => state.Profile.name);
  const toggleLike = useStore((state) => state.toggleLiked);
  const addPost = useStore((state) => state.addPost);
  const [postContent, setPostContent] = useState("");
  const [expandedPost, setExpandedPost] = useState("null");

  const toggleExpand = (postId: string) => {
    setExpandedPost(expandedPost === postId ? "" : postId); // Toggle between expand/collapse
  };
  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postContent.trim()) {
      const newPost = {
        id: `post${Math.random()}`, // Unique ID for the new post
        workingOn: "Something Carzy", // Use the content from the input field
        workingIn: "New Company",
        workingWith: "New Person",
        author: ProfileName, // Author's name
        content: postContent,
        pfp: "https://i.pravatar.cc/300", // Example profile pic
        timestampEdited: Date.now(), // Current timestamp
        timestampPosted: Date.now(), // Current timestamp
        timestampActivity: Date.now(), // Current timestamp
        commentsCount: 0, // Initially 0 comments
        isLiked: false, // Initially not liked
        favCount: 0, // Initially no favorites
        docName: `randomName${Math.ceil(Math.random() * 10)}`, // Example document name
      };

      // Add the new post to the global state
      addPost(newPost);

      // Clear the input field after submission
      setPostContent("");
    }
  };
  return (
    <div
      className={`w-full ${
        sidebarExpanded ? "h-[1295px]" : "max-h-[990px]"
      }   bg-black/5 rounded-xl p-4 shadow-md shadow-black/30 overflow-y-auto `}
    >
      <div id="heading" className="w-full relative flex justify-between px-2 ">
        <h1 className="text-2xl ">Stories</h1>
        <button>Filters</button>
        <GradientDivs classNames="absolute -bottom-2 h-[1px] mt-4 px-2" />
      </div>
      <div
        key={"New Post"}
        className="relative bg-black/10 rounded-lg my-5 py-2 px-3 "
      >
        <form onSubmit={handlePostSubmit}>
          <div id="PostComment" className="flex gap-1 p-1 w-full">
            <input
              type="text"
              placeholder={`${ProfileName}, share some progress`}
              className="w-[92%] rounded-md outline-none focus:bg-black/20 bg-black/10 px-3 placeholder:text-black/50 placeholder:text-sm "
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <button
              type="submit"
              className="w-[8%] px-2 py-0.5 flex gap-1 justify-between items-center rounded-lg bg-zinc-400 text-indigo-900 font-semibold"
            >
              <span>Post</span>
              <PaperPlaneRight size={22} weight="duotone" />
            </button>
          </div>
        </form>
      </div>
      <div id="cards" className="flex flex-col gap-2 ">
        {Posts.map((Post) => {
          const isExpanded = expandedPost === Post.id;
          return (
            <div key={Post.id} className="bg-black/10 rounded-md ">
              <div
                id="pfpandstuff"
                className="w-full p-4 flex gap-2 items-center justify-between text-sm"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={Post.pfp}
                    alt="Post.author"
                    className="size-[12%] rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl">{Post.author}</span>
                    <span className="text-xs text-black/60">
                      Edited: {formatTime(Post.timestampEdited)}
                    </span>
                  </div>
                </div>
                <div className="h-full text-xs text-black/60">
                  Edited: {updatedAgo(Post.timestampEdited)}
                </div>
              </div>
              <motion.div
                id="mainContent"
                animate={{ height: isExpanded ? "200px" : "80px" }}
                className={`relative flex flex-col px-8 pb-4 overflow-hidden transition-all duration-300 `}
              >
                <div className="w-[1px] h-full absolute bg-black/10 -top-5 left-8 "></div>
                <div className="flex gap-1 items-center h-6 w-fit px-2 py-1 ml-5  text-center bg-black/80 text-white rounded-2xl">
                  <ClipboardText size={"100%"} weight="duotone" />
                  {Post.docName}
                </div>
                <div className="ml-5">
                  <span className="bg-gradient-to-br from-red-500 via-pink-600 to-orange-700 text-transparent bg-clip-text font-semibold">
                    New Update
                  </span>{" "}
                  by <span>{Post.author}</span> working on the{" "}
                  <span>{Post.workingOn}</span> for{" "}
                  <span>{Post.workingIn}</span> with{" "}
                  <span>{Post.workingWith}</span>.
                </div>
                <div className="h-[1px] w-4/5 abso lute bg-black/10 mt-7"></div>
                <div className="ml-5 mt-2">{Post.content}</div>
                <button
                  className="absolute bottom-0 right-3 backdrop-blur px-2 py-1"
                  onClick={() => toggleExpand(Post.id)}
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              </motion.div>
              <div
                id="timeAndStuff"
                className={`flex justify-between border-y border-black/10 px-4 py-1 text-black/60 text-xs`}
              >
                <span>Posted: {formatTime(Post.timestampPosted)}</span>
                <span>Last Activity: {formatTime(Post.timestampActivity)}</span>
              </div>
              <div
                id="likesAndComments"
                className={`flex justify-between items-center px-3 py-2`}
              >
                <button
                  onClick={() => toggleLike(Post.id)}
                  className="w-8 p-1.5 rounded-full bg-zinc-500"
                >
                  <Heart
                    size={"100%"}
                    weight={Post.isLiked ? "fill" : "duotone"}
                    className={`${
                      Post.isLiked ? "text-red-700" : "text-white"
                    } transition-all`}
                  />
                </button>
                <div id="PostComment" className="flex gap-1 p-1 w-[98%]">
                  <input
                    type="text"
                    placeholder="Write a Comment"
                    className="w-[95%] rounded-2xl outline-none focus:bg-black/20 bg-black/10 px-3 placeholder:text-black/50 placeholder:text-sm"
                  />
                  <button className="w-8 p-1.5 rounded-full bg-zinc-500">
                    <PaperPlaneRight size={"100%"} weight="duotone" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
