import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen">
      <div className="p-5 text-xl font-bold border-b border-slate-700">
        LearnTrack
      </div>

      <div className="flex flex-col p-4 gap-3">
        <Link
          to="/dashboard"
          className="hover:bg-slate-700 p-3 rounded"
        >
          Dashboard
        </Link>

        <Link
          to="/courses"
          className="hover:bg-slate-700 p-3 rounded"
        >
          Courses
        </Link>

        <Link
          to="/profile"
          className="hover:bg-slate-700 p-3 rounded"
        >
          Profile
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;