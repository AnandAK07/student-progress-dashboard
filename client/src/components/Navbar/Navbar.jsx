import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  return (
    <nav className="h-16 bg-white shadow px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold">Student Progress Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="font-medium">Welcome, {userInfo?.name}</span>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
