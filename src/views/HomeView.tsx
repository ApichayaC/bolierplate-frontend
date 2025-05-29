"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useSignInStore } from "@/stores/signIn/signIn.model";
import { signInSchema, SignInSchema } from "@/constants/schema/signin.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const HomeView = () => {
  const router = useRouter();
  const { email, password, setEmail, setPassword } = useSignInStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInSchema) => {
    if (data.email && data.password) {
      router.push("/BOF");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
    >
      <div className="w-[320px] flex flex-col gap-2 items-center">
        <p className="text-2xl font-bold mb-2 text-primary shadow-2xl">
          Sign in to continue
        </p>
        <Input
          {...register("email")}
          placeholder="Email"
          className="h-10 text-sm rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="h-10 text-sm rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          disabled={!email || !password}
          className="h-10 w-full mt-2 text-sm font-normal cursor-pointer rounded-md"
        >
          Sign in
        </Button>
        {errors.email && (
          <p className="w-full flex items-end justify-start text-xs text-destructive font-medium">
            ***{errors.email.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default HomeView;
