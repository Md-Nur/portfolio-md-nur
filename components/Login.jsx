"use client";
import appwriteService from "@/appwrite/config.js";
import { useRouter } from "next/navigation";
import useAuth from "@/context/useAuth";
import { useState } from "react";
import Button from "./basic/Button";
import Card from "./basic/Card";

const Login = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      const session = await appwriteService.login(
        formData.email,
        formData.password
      );
      if (session) {
        setAuthStatus(true);
        router.push("/profile");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center my-8 flex-wrap">
      <div className="max-w-[500px] w-full">
        <Card>
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[60px]">
              <img src="/favicon.ico" alt="Logo" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Log in to your account
          </h2>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={login} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="text-base font-medium ">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="Email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    id="password"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button type="submit">Login</Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
