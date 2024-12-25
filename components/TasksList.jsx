import { getPosts } from "@/utils/actions";
import Link from "next/link";
import DeleteForm from "./DeleteForm";

const TasksList = async () => {
  const tasks = await getPosts();
  if (tasks.length === 0) {
    return (
      <h2 className="font-poppins text-2xl font-bold text-indigo-700">
        No Tasks To Show
      </h2>
    );
  }
  return (
    <ul className="mt-8 font-poppins font-bold text-xl">
      {tasks.map((task) => {
        const { id, title, completed } = task;
        return (
          <li
            key={id}
            className="flex justify-between items-center px-8 py-6 mb-7 border border-base-300 rounded-xl shadow-lg hover:translate-y-5 transition-all delay-150 cursor-pointer capitalize"
          >
            <h2 className={`text-lg ${completed ? "line-through" : null}`}>
              {title}
            </h2>
            <div className="flex gap-6 item-center">
              <Link
                href={`/tasks/${id}`}
                className="btn btn-primary btn-sm capitalize"
              >
                edit
              </Link>
              <DeleteForm id={id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TasksList;
