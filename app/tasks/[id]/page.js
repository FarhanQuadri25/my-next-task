import EditorForm from "@/components/EditorForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";

const SingleTaskPage = async ({ params }) => {
  const { id } = await params;
  const task = await getTask(id);

  return (
    <>
      <div className="mb-16 p-12 new-container mx-auto">
        <Link
          href={"/tasks"}
          className="btn btn-outline border-2 border-indigo-700 hover:bg-indigo-700 font-poppins text-xl font-bold transition-all delay-100 mb-4"
        >
          &#8592; back to tasks
        </Link>
      </div>
      <EditorForm task={task} />
    </>
  );
};
export default SingleTaskPage;
