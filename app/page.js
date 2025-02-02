import Link from "next/link";

export default function HomePage() {
  return (
    <div className="new-container mx-auto">
      <h1 className="text-4xl font-bold text-center capitalize">
        Go To Task Manager
      </h1>
      <Link
        href={"/tasks"}
        className="btn btn-outline border-2 border-indigo-700 hover:bg-indigo-700 font-poppins text-xl font-bold transition-all delay-100 mb-4"
      >
        Task Manager &#8594;
      </Link>
    </div>
  );
}
