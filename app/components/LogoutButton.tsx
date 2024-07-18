"use client";
import { useRouter } from "next/navigation";
import { resetAuthCookies } from "../lib/actions";
import MenuLink from "./navbar/MenuLink";

const LogoutButton = () => {
  const router = useRouter();
  const submitLogout = async () => {
    resetAuthCookies();
    router.push("/");
  };
  return <MenuLink label="Log out" onClick={submitLogout} />;
};

export default LogoutButton;
