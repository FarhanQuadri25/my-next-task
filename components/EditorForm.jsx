"use client";

import { updateTask } from "@/utils/actions";

const EditorForm = ({ task }) => {
  const { id, title, completed } = task;
  return (
    <form
      action={updateTask}
      className="flex flex-col space-y-5 mx-auto new-container"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="title"
        defaultValue={title}
        className="input input-bordered focus:outline-none focus:border-4 focus:border-indigo-700 capitalize font-bold font-poppins text-xl w-full"
        required
      />
      <div className="form-control">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text text-xl font-poppins tracking-wider">
            completed
          </span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <button className="btn btn-accent btn-block font-poppins font-bold text-black capitalize">
        edit
      </button>
    </form>
  );
};

export default EditorForm;
