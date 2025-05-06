// src/pages/Login.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-white/70" />
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-white/70" />
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-white text-indigo-700 font-semibold py-3 rounded-lg hover:bg-white/90 transition"
          >
            Login
          </motion.button>
        </form>
        <p className="text-sm mt-4 text-center text-white/80">
          Don't have an account?{" "}
          <a href="#" className="underline hover:text-white">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
}
