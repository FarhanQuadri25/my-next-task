import TaskForm from "@/components/TaskForm";
import TasksList from "@/components/TasksList";
import Link from "next/link";

const TaskPage = () => {
  return (
    <div className="new-container mx-auto">
      <Link
        href={"/"}
        className="btn btn-outline border-2 border-indigo-700 hover:bg-indigo-700 font-poppins text-xl font-bold transition-all delay-100 mb-4"
      >
        &#8592; Back Home
      </Link>
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default TaskPage;
