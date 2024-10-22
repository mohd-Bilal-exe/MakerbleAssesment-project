import { useState } from "react";
import { useStore } from "../zustand/useStores";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  Check,
  Gear,
} from "@phosphor-icons/react";
import GradientDivs from "./GradientDivs";

export default function Tasks() {
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);
  const taskCompleted = useStore((state) => state.taskCompleted);
  const totalTasks = useStore((state) => state.totalTasks);
  const toggleTaskCompletion = useStore((state) => state.toggleTaskCompletion);
  // Local states for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5; // Number of tasks per page

  // Calculate the indices of tasks to display on the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Pagination logic: go to the next or previous page
  const nextPage = () => {
    if (currentPage < Math.ceil(tasks.length / tasksPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Function to determine border color based on priority
  const getBorderColor = (priority: number) => {
    if (priority >= 9) return "border-red-600 bg-red-600/10"; // Urgent
    if (priority >= 7) return "border-orange-500 bg-orange-500/10"; // High
    if (priority >= 5) return "border-yellow-400 bg-yellow-400/10"; // Medium
    if (priority >= 3) return "border-green-500 bg-green-500/10"; // Low
    if (priority >= 1) return "border-blue-400 bg-blue-400/10"; // Very low
    return "border-blue-400 bg-blue-400/10";
  };
  const handleTaskCompletness = (title: string) => {
    toggleTaskCompletion(title);
  };
  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const taskTitle = formData.get("task") as string;

    // Adding a new task to the global state
    if (taskTitle) {
      const newTask = {
        title: taskTitle,
        isCompleted: false,
        priority: Math.floor(Math.random() * 10) + 1, // Random priority for now
      };
      addTask(newTask);
    }
    event.currentTarget.reset(); // Reset form after submission
  };

  return (
    <div
      className={`text-black w-full   bg-black/5 p-4  rounded-xl  flex flex-col gap-3 shadow-md shadow-black/20 -z-10`}
    >
      <div id="heading" className="w-full relative flex justify-between px-2 ">
        <h1 className="text-2xl -z-10">Tasks</h1>
        <button>Filters</button>
        <GradientDivs classNames="absolute -bottom-2 h-[1px] mt-4 px-2" />
      </div>
      <div id="tasks" className="w-full min-h-64 flex flex-col gap-2 p-4">
        {currentTasks.map((task, index) => {
          return (
            <div
              key={`task${index}`}
              className={`h-8 text-base flex items-center justify-between  w-full border bg-black/5 rounded-lg px-2 transition-colors  ${getBorderColor(
                task.priority
              )}`}
            >
              <span className="w-4/5 flex  text-nowrap overflow-hidden">
                {task.title}{" "}
              </span>
              <div className="  flex gap-1">
                <button
                  onClick={() => handleTaskCompletness(task.title)}
                  className="w-4 h-4 rounded-full border p-[2px] border-black bg-zinc-100"
                >
                  {task.isCompleted && <Check size={"100%"} />}
                </button>
                <button className="w-4 h-4  border-black bg-zinc-100 rounded-full">
                  <Gear size={"100%"} />
                </button>
              </div>
            </div>
          );
        })}
        <form
          onSubmit={handleSubmit}
          className="w-full px-2  flex  items-center gap-2 mt-4"
        >
          <input
            type="text"
            name="task"
            placeholder="Add your next task"
            className="border px-3 py-1 w-3/4 rounded outline-none focus:border-black/60 transition-colors"
            required
          />
          <button
            type="submit"
            className="w-1/4 h-full text-xs  bg-black/50 hover:bg-black/60  text-white px-2 py-0.5 rounded transition-colors"
          >
            Save Task
          </button>
        </form>
      </div>
      <div
        id="pagination"
        className="text-xs flex flex-col items-center mt-2 gap-2"
      >
        <div className="w-full px-4 flex justify-between items-center">
          <button
            onClick={previousPage}
            disabled={currentPage === 1}
            className=" flex items-center gap-1 bg-black/5 px-3 py-2 rounded-md"
          >
            <CaretDoubleLeft size={18} />
            Previous
          </button>
          <span className="text-xs text-center">{`Completed tasks ${taskCompleted}/${totalTasks}`}</span>
          <button
            onClick={nextPage}
            disabled={currentPage >= Math.ceil(tasks.length / tasksPerPage)}
            className="flex items-center gap-1 bg-black/5 px-3 py-2 rounded-md"
          >
            Next
            <CaretDoubleRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
