"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;
type RegisterForm = z.infer<typeof registerSchema>;

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginForm = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });
  const registerForm = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) });

  const handleLogin = async (data: LoginForm) => {
    setLoading(true);
    try {
      // Replace with actual API call
      // const res = await axios.post(`${API_URL}/auth/login`, data);
      toast.success("Welcome back! Signed in successfully.");
    } catch (err) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data: RegisterForm) => {
    setLoading(true);
    try {
      // const res = await axios.post(`${API_URL}/auth/register`, data);
      toast.success("Account created! Welcome to Stylish Desi.");
    } catch (err) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-8 pb-16 px-container-margin">
      {/* Hero Image */}
      <div className="w-full max-w-md mb-8 relative rounded-xl overflow-hidden aspect-[4/3] whisper-shadow">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXdlTLSNSHx4fLDzL5etKDgIAiasMbeWUr7UlqZlrUbw2kTMJuQn6iViNdYaWWsPDKAht-rIQl49iosJ0THhY4S3UM2Kw9YQ6VsodGAUuZKFxlHgMO-M2Z2w30XNrvNmhD1fbnFutUv86jh0TNPgSt57W-XIyFjv71Ezm5_GWCAffBnJxZ37vwj8n8Ie2ttXXdfOQb3XmUQe7JlpXlBiQ1j3RQ-9BRQz1zb09tZMBCGQtymjZnBwEYU8VilaJDRChN6vQtzNsrviqK"
          alt="Luxury Indian Embroidery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-gutter">
          <h1 className="font-headline-lg text-white text-2xl font-semibold mb-1">
            {mode === "login" ? "Welcome Back" : "Join Our Circle"}
          </h1>
          <p className="font-body-md text-white/90">
            {mode === "login"
              ? "Sign in to your curated collection."
              : "Create an account to explore heritage fashion."}
          </p>
        </div>
      </div>

      {/* Auth Form Container */}
      <div className="w-full max-w-md">
        {/* Mode Toggle */}
        <div className="flex border-b border-stone-200 mb-8">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 pb-3 font-label-sm text-[11px] uppercase tracking-widest transition-colors ${
              mode === "login"
                ? "text-primary border-b-2 border-primary -mb-[1px]"
                : "text-stone-400 hover:text-stone-600"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("register")}
            className={`flex-1 pb-3 font-label-sm text-[11px] uppercase tracking-widest transition-colors ${
              mode === "register"
                ? "text-primary border-b-2 border-primary -mb-[1px]"
                : "text-stone-400 hover:text-stone-600"
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Login Form */}
        {mode === "login" && (
          <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-6">
            <div className="space-y-2">
              <label className="font-label-sm text-[10px] text-on-surface-variant uppercase block">
                Email Address
              </label>
              <input
                {...loginForm.register("email")}
                type="email"
                placeholder="name@domain.com"
                className="input-boutique"
              />
              {loginForm.formState.errors.email && (
                <p className="text-error text-[11px] font-manrope">{loginForm.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-label-sm text-[10px] text-on-surface-variant uppercase block">
                  Password
                </label>
                <a href="#" className="font-label-sm text-[10px] text-primary uppercase hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  {...loginForm.register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input-boutique pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-0 top-3 text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {loginForm.formState.errors.password && (
                <p className="text-error text-[11px] font-manrope">{loginForm.formState.errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-container text-white font-label-sm py-4 rounded-lg tracking-widest hover:bg-primary transition-all duration-300 whisper-shadow active:scale-[0.98] uppercase text-[11px] disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        )}

        {/* Register Form */}
        {mode === "register" && (
          <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-6">
            <div className="space-y-2">
              <label className="font-label-sm text-[10px] text-on-surface-variant uppercase block">Full Name</label>
              <input {...registerForm.register("name")} type="text" placeholder="Ananya Sharma" className="input-boutique" />
              {registerForm.formState.errors.name && (
                <p className="text-error text-[11px] font-manrope">{registerForm.formState.errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-[10px] text-on-surface-variant uppercase block">Email Address</label>
              <input {...registerForm.register("email")} type="email" placeholder="name@domain.com" className="input-boutique" />
              {registerForm.formState.errors.email && (
                <p className="text-error text-[11px] font-manrope">{registerForm.formState.errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-[10px] text-on-surface-variant uppercase block">Phone Number (optional)</label>
              <input {...registerForm.register("phone")} type="tel" placeholder="+91 98765 43210" className="input-boutique" />
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-[10px] text-on-surface-variant uppercase block">Password</label>
              <div className="relative">
                <input {...registerForm.register("password")} type={showPassword ? "text" : "password"} placeholder="Min 8 characters" className="input-boutique pr-10" />
                <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-0 top-3 text-stone-400">
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
              {registerForm.formState.errors.password && (
                <p className="text-error text-[11px] font-manrope">{registerForm.formState.errors.password.message}</p>
              )}
            </div>
            <button type="submit" disabled={loading} className="w-full bg-primary-container text-white font-label-sm py-4 rounded-lg tracking-widest hover:bg-primary transition-all duration-300 whisper-shadow active:scale-[0.98] uppercase text-[11px] disabled:opacity-60">
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>
        )}

        {/* Social Auth Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow h-[1px] bg-stone-200" />
          <span className="px-4 font-label-sm text-[10px] text-stone-400 uppercase">Or continue with</span>
          <div className="flex-grow h-[1px] bg-stone-200" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-gutter mb-8">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 border border-stone-200 py-3 rounded-lg font-label-sm text-[10px] text-on-surface hover:bg-stone-50 transition-colors uppercase"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-stone-200 py-3 rounded-lg font-label-sm text-[10px] text-on-surface hover:bg-stone-50 transition-colors uppercase">
            <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        <p className="text-center font-manrope text-sm text-stone-500">
          {mode === "login" ? (
            <>Don't have an account?{" "}<button onClick={() => setMode("register")} className="text-primary font-semibold hover:underline">Sign Up</button></>
          ) : (
            <>Already have an account?{" "}<button onClick={() => setMode("login")} className="text-primary font-semibold hover:underline">Sign In</button></>
          )}
        </p>
      </div>
    </div>
  );
}
