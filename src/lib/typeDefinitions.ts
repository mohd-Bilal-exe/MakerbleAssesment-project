export interface Post {
  id: string;
  workingOn: string; // e.g., "Using football to teach life skills to children"
  workingIn: string; // e.g., "Dufentchmertz.inc"
  workingWith: string;
  content: string;
  pfp: string;
  author: string;
  timestampEdited: Date | number;
  timestampPosted: Date | number;
  timestampActivity: Date | number;
  commentsCount: number;
  isLiked: boolean;
  favCount: number;
  docName: string;
}
export interface Progress {
  title: string;
  value: number;
  color: string;
}
export interface Album {
  pfp: string;
  name: string;
}
export interface Projects {
  pfp: string;
  name: string;
}
export interface Boards {
  pfp: string;
  board: string;
}
export interface Organizations {
  pfp: string;
  name: string;
}
interface Follower {
  name: string;
  pfp: string; // Profile picture URL
}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  progress: Progress[];
  followers: Follower[];
  following: Follower[];
}
// Define a type for Task
export interface Task {
  title: string;
  isCompleted: boolean;
  priority: number;
}
