import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  Album,
  Boards,
  Organizations,
  Post,
  Profile,
  Projects,
  Task,
} from "../lib/typeDefinitions";

// Define the state and actions for your store
interface UserState {
  toggleLiked: (postId: string) => void;
  Posts: Post[];
  Albums: Album[];
  Projects: Projects[];
  Profile: Profile;
  tasks: Task[];
  Organizations: Organizations[];
  Boards: Boards[];
  totalTasks: number;
  taskCompleted: number;
  addPost: (post: Post) => void;
  addTask: (task: Task) => void;
  toggleTaskCompletion: (taskId: string) => void; // Toggle task completion
}
const randomDate = () => {
  // Generate a random date within the last 30 days
  const end = new Date(); // Current date
  const start = new Date();
  start.setDate(start.getDate() - 30); // 30 days ago
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
export const useStore = create<UserState>()(
  persist(
    (set) => ({
      Posts: [
        {
          id: "post1",
          workingOn: "Using football to teach life skills to children",
          workingIn: "Dufentchmertz.inc",
          workingWith: "Sofia Vagara",
          author: "John Doe",
          content: "Yeah! Something",
          pfp: "https://i.pravatar.cc/300?img=1",
          timestampEdited: randomDate().getTime(), // Random edited timestamp
          timestampPosted: randomDate().getTime(), // Random posted timestamp
          timestampActivity: randomDate().getTime(), // Random activity timestamp
          commentsCount: 5, // Example comment count
          isLiked: false, // Like status
          favCount: 10, // Example favorite count
          docName: "randomName1", // Random document name
        },
        {
          id: "post2",
          workingOn: "Leveraging technology for efficient project management",
          workingIn: "Tech Innovators Ltd.",
          workingWith: "Maria Johnson",
          author: "Jane Doe",
          content: "Yeah! Something",
          pfp: "https://i.pravatar.cc/300?img=2",
          timestampEdited: randomDate().getTime(), // Random edited timestamp
          timestampPosted: randomDate().getTime(), // Random posted timestamp
          timestampActivity: randomDate().getTime(), // Random activity timestamp
          commentsCount: 2, // Example comment count
          isLiked: false, // Like status
          favCount: 7, // Example favorite count
          docName: "randomName2", // Random document name
        },
        {
          id: "post3",
          workingOn: "Creating engaging user experiences through design",
          workingIn: "Design Pros Inc.",
          workingWith: "James Smith",
          author: "Alex Brown",
          content: "Yeah! Something",
          pfp: "https://i.pravatar.cc/300?img=3",
          timestampEdited: randomDate().getTime(), // Random edited timestamp
          timestampPosted: randomDate().getTime(), // Random posted timestamp
          timestampActivity: randomDate().getTime(), // Random activity timestamp
          commentsCount: 8, // Example comment count
          isLiked: false, // Like status
          favCount: 3, // Example favorite count
          docName: "randomName3", // Random document name
        },
        {
          id: "post4",
          workingOn: "Developing innovative solutions for global challenges",
          workingIn: "Global Solutions LLC",
          workingWith: "Emily Davis",
          author: "Mike Wilson",
          content: "Yeah! Something",
          pfp: "https://i.pravatar.cc/300?img=4",
          timestampEdited: randomDate().getTime(), // Random edited timestamp
          timestampPosted: randomDate().getTime(), // Random posted timestamp
          timestampActivity: randomDate().getTime(), // Random activity timestamp
          commentsCount: 1, // Example comment count
          isLiked: false, // Like status
          favCount: 5, // Example favorite count
          docName: "randomName4", // Random document name
        },
        {
          id: "post5",
          workingOn: "Exploring the intersections of art and technology",
          workingIn: "ArtTech Co.",
          workingWith: "Lily Turner",
          author: "Sara Connor",
          content: "Yeah! Something",
          pfp: "https://i.pravatar.cc/300?img=5",
          timestampEdited: randomDate().getTime(), // Random edited timestamp
          timestampPosted: randomDate().getTime(), // Random posted timestamp
          timestampActivity: randomDate().getTime(), // Random activity timestamp
          commentsCount: 6, // Example comment count
          isLiked: false, // Like status
          favCount: 8, // Example favorite count
          docName: "randomName5", // Random document name
        },
      ],
      Profile: {
        id: "userr",
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300",
        progress: [
          {
            title: "Are either of your parents living?",
            value: 70,
            color: "bg-green-500",
          },
          {
            title: "Do you belong to any groups?",
            value: 60,
            color: "bg-blue-600",
          },
          {
            title: "1-2-1 Events",
            value: 27,
            color: "bg-red-400",
          },
          {
            title: "Community Engagement",
            value: 85,
            color: "bg-purple-700",
          },
          {
            title: "Volunteer Hours",
            value: 45,
            color: "bg-yellow-400",
          },
          {
            title: "Skills Workshops Attended",
            value: 75,
            color: "bg-teal-500",
          },
          {
            title: "Networking Events",
            value: 50,
            color: "bg-orange-500",
          },
          {
            title: "Project Contributions",
            value: 90,
            color: "bg-indigo-600",
          },
          {
            title: "Feedback Received",
            value: 30,
            color: "bg-pink-400",
          },
          {
            title: "Goals Achieved",
            value: 80,
            color: "bg-gray-600",
          },
        ],
        followers: [
          {
            name: "Jane Smith",
            pfp: "https://i.pravatar.cc/300?img=1",
          },
          {
            name: "Bob Johnson",
            pfp: "https://i.pravatar.cc/300?img=2",
          },
          {
            name: "Alice Green",
            pfp: "https://i.pravatar.cc/300?img=3",
          },
          {
            name: "Charlie Brown",
            pfp: "https://i.pravatar.cc/300?img=4",
          },
          {
            name: "David Lee",
            pfp: "https://i.pravatar.cc/300?img=5",
          },
          {
            name: "Emma Wilson",
            pfp: "https://i.pravatar.cc/300?img=6",
          },
          // New dummy followers
          {
            name: "Henry Clark",
            pfp: "https://i.pravatar.cc/300?img=13",
          },
          {
            name: "Olivia Taylor",
            pfp: "https://i.pravatar.cc/300?img=14",
          },
          {
            name: "William Anderson",
            pfp: "https://i.pravatar.cc/300?img=15",
          },
          {
            name: "Ava White",
            pfp: "https://i.pravatar.cc/300?img=16",
          },
          {
            name: "James Harris",
            pfp: "https://i.pravatar.cc/300?img=17",
          },
          {
            name: "Sophia Scott",
            pfp: "https://i.pravatar.cc/300?img=18",
          },
        ],
        following: [
          {
            name: "Sophia Turner",
            pfp: "https://i.pravatar.cc/300?img=7",
          },
          {
            name: "Oliver Martinez",
            pfp: "https://i.pravatar.cc/300?img=8",
          },
          {
            name: "Mia Davis",
            pfp: "https://i.pravatar.cc/300?img=9",
          },
          {
            name: "Liam Garcia",
            pfp: "https://i.pravatar.cc/300?img=10",
          },
          {
            name: "Noah Brown",
            pfp: "https://i.pravatar.cc/300?img=11",
          },
          {
            name: "Isabella Adams",
            pfp: "https://i.pravatar.cc/300?img=12",
          },
          // New dummy following
          {
            name: "Ethan Robinson",
            pfp: "https://i.pravatar.cc/300?img=19",
          },
          {
            name: "Mason Lewis",
            pfp: "https://i.pravatar.cc/300?img=20",
          },
          {
            name: "Amelia Walker",
            pfp: "https://i.pravatar.cc/300?img=21",
          },
          {
            name: "Lucas Young",
            pfp: "https://i.pravatar.cc/300?img=22",
          },
          {
            name: "Aiden King",
            pfp: "https://i.pravatar.cc/300?img=23",
          },
          {
            name: "Chloe Hall",
            pfp: "https://i.pravatar.cc/300?img=24",
          },
        ],
      },
      Albums: [
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+1",
          name: "Album 1",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+2",
          name: "Album 2",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+3",
          name: "Album 3",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+4",
          name: "Album 4",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+5",
          name: "Album 5",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+6",
          name: "Album 6",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+7",
          name: "Album 7",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+8",
          name: "Album 8",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+9",
          name: "Album 9",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+10",
          name: "Album 10",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+11",
          name: "Album 11",
        },
        {
          pfp: "https://dummyimage.com/100x100/000/fff.png&text=Album+12",
          name: "Album 12",
        },
      ],
      Projects: [
        {
          pfp: "https://picsum.photos/100/100?random=6",
          name: "Whiskers in the Wild",
        },
        {
          pfp: "https://placebear.com/100/100",
          name: "Grizzly Grooves",
        },
        {
          pfp: "https://picsum.photos/100/100?random=1",
          name: "Pixel Odyssey",
        },
        {
          pfp: "https://placebeard.it/100/100",
          name: "Bearded Beats",
        },
        {
          pfp: "https://picsum.photos/100/100?random=15",
          name: "Nature's Symphony",
        },
        {
          pfp: "https://loremflickr.com/100/100",
          name: "Flicker of Dreams",
        },
        {
          pfp: "https://picsum.photos/100/100?random=69",
          name: "Kitten Chronicles",
        },
        {
          pfp: "https://placebear.com/100/101",
          name: "Bearfoot Melodies",
        },
        {
          pfp: "https://picsum.photos/100/100?random=2",
          name: "Echoes of Pixels",
        },
        {
          pfp: "https://picsum.photos/100/100?random=120501",
          name: "Digital Horizons",
        },
        {
          pfp: "https://placebeard.it/100/101",
          name: "Whiskers & Wisdom",
        },
        {
          pfp: "https://loremflickr.com/100/100?random=2",
          name: "Shuttered Stories",
        },
      ],
      Organizations: [
        {
          pfp: "https://picsum.photos/100/100?random=6",
          name: "Tech Innovators Inc.",
        },
        {
          pfp: "https://placebear.com/100/100",
          name: "Grizzly Solutions",
        },
        {
          pfp: "https://picsum.photos/100/100?random=1",
          name: "Pixel Ventures",
        },
        {
          pfp: "https://placebeard.it/100/100",
          name: "BeardTech Enterprises",
        },
        {
          pfp: "https://picsum.photos/100/100?random=15",
          name: "NatureSoft Corp.",
        },
        {
          pfp: "https://loremflickr.com/100/100",
          name: "DreamFlick Solutions",
        },
        {
          pfp: "https://picsum.photos/100/100?random=69",
          name: "Chronicle Systems",
        },
        {
          pfp: "https://placebear.com/100/101",
          name: "Bearfoot Technologies",
        },
        {
          pfp: "https://picsum.photos/100/100?random=2",
          name: "EchoTech Labs",
        },
        {
          pfp: "https://picsum.photos/100/100?random=120501",
          name: "Digital Horizons Ltd.",
        },
        {
          pfp: "https://placebeard.it/100/101",
          name: "WhiskersTech Solutions",
        },
        {
          pfp: "https://loremflickr.com/100/100?random=2",
          name: "Shutter Systems",
        },
      ],
      Boards: [
        {
          pfp: "https://picsum.photos/100/100?random=6",
          board: "Attendance Reporting",
        },
        {
          pfp: "https://placebear.com/100/100",
          board: "Angola Production",
        },
        {
          pfp: "https://picsum.photos/100/100?random=1",
          board: "Marketing Strategies",
        },
        {
          pfp: "https://placebeard.it/100/100",
          board: "Product Development",
        },
        {
          pfp: "https://picsum.photos/100/100?random=15",
          board: "Sustainability Initiatives",
        },
        {
          pfp: "https://loremflickr.com/100/100",
          board: "Creative Direction",
        },
        {
          pfp: "https://picsum.photos/100/100?random=69",
          board: "Data Analytics",
        },
        {
          pfp: "https://placebear.com/100/101",
          board: "Technical Support",
        },
        {
          pfp: "https://picsum.photos/100/100?random=2",
          board: "R&D Innovation",
        },
        {
          pfp: "https://picsum.photos/100/100?random=120501",
          board: "Digital Transformation",
        },
        {
          pfp: "https://placebeard.it/100/101",
          board: "Customer Engagement",
        },
        {
          pfp: "https://loremflickr.com/100/100?random=2",
          board: "Supply Chain Management",
        },
      ],
      tasks: [
        {
          title: "follow up call needed",
          isCompleted: false,
          priority: 6,
        },
        {
          title: "contact the local authority",
          isCompleted: false,
          priority: 10,
        },
        {
          title: "prepare project presentation",
          isCompleted: false,
          priority: 9,
        },
        {
          title: "finish the UI for profile page",
          isCompleted: true,
          priority: 0,
        },
        {
          title: "write documentation for API",
          isCompleted: false,
          priority: 8,
        },
        {
          title: "Something else",
          isCompleted: false,
          priority: 8,
        },
        {
          title: "Some more stuff",
          isCompleted: false,
          priority: 8,
        },
        {
          title: "Last thing",
          isCompleted: false,
          priority: 8,
        },
      ],
      totalTasks: 5,
      taskCompleted: 1,

      // Function to add a new task
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
          totalTasks: state.tasks.length + 1, // Update totalTasks
          taskCompleted: state.tasks.filter((t) => t.isCompleted).length, // Update completed tasks count
        })),

      // New function to toggle task completion status
      toggleTaskCompletion: (taskId: string) =>
        set((state) => {
          const updatedTasks = state.tasks.map((task) =>
            task.title === taskId // Assuming `title` is unique, otherwise use a real `id`
              ? { ...task, isCompleted: !task.isCompleted, priority: 0 }
              : task
          );

          return {
            tasks: updatedTasks,
            taskCompleted: updatedTasks.filter((t) => t.isCompleted).length, // Update completed count
          };
        }),
      toggleLiked: (postId: string) =>
        set((state) => {
          const updatedPosts = state.Posts.map((post) =>
            post.id === postId ? { ...post, isLiked: !post.isLiked } : post
          );

          return {
            Posts: updatedPosts, // Correctly update the Posts array in the store
          };
        }),

      addPost: (post) =>
        set((state) => ({
          Posts: [post, ...state.Posts],
        })),
    }),
    {
      name: "user-profile", // key for localStorage
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        // Persist only posts and profile, exclude tasks from being persisted
        Posts: state.Posts,
        Profile: state.Profile,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          console.log("Rehydrated state from localStorage:", state);
        }
      },
    }
  )
);
