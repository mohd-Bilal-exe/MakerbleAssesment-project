import { Plus } from "@phosphor-icons/react";
import { motion } from "framer-motion";
export default function AddButton({ text }: { text: string }) {
  return (
    <motion.button
      initial={{ width: "24px", height: "24px" }}
      whileHover={{ width: "105px", height: "26px" }}
      style={{ transformOrigin: "center" }}
      className={`bg-black/50 flex gap-1 pl-0.5 py-1  items-center absolute right-0 top-0  h-6  overflow-hidden rounded `}
    >
      <div className="flex gap-1  items-center h-full">
        <Plus size={23} weight="bold" className="ml-0 " />
        <h1
          style={{
            fontSize: "12px",
            lineHeight: "12px",
          }}
          className="font-semibold w-4/5"
        >
          New {text}
        </h1>
      </div>
    </motion.button>
  );
}
