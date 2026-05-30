import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/register", data);

      console.log(response.data);

      alert("Registration Successful");
      navigate("/");
    } catch (error) {
      console.error(error.response?.data);
      alert(error.response?.data?.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6">Register</h1>

        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
        />

        <select
          {...register("role")}
          className="w-full border p-3 mb-4 rounded"
        >
          <option value="student">Student</option>

          <option value="mentor">Mentor</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
