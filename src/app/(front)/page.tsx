import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import { Button } from "@/components/ui/button";
import Login from "../(authPages)/login/page";
import Register from "../(authPages)/register/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      welcome to socio
      <ThemeToggleBtn />
      {session && JSON.stringify(session)}
    </div>
  );
}
