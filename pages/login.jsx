import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginButton from "@/components/login-btn";

function login() {
  return (
    <div>
      <LoginButton />
    </div>
  );
}

export default login;
