import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          name="title"
          className="input input-bordered focus:outline-none join-item outline-none focus:border-4 focus:border-indigo-700 capitalize font-bold font-poppins text-xl w-full"
          placeholder="type here"
          required
        />
        <button className="btn btn-accent join-item font-poppins text-xl font-bold text-black capitalize">
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
