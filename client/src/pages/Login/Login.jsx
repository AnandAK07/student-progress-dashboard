import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data);

      localStorage.setItem("userInfo", JSON.stringify(response.data));

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6">Login</h1>

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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer font-medium"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
