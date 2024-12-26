import { auth } from "@/auth";
import Image from "next/image";
import Signin from "./Signin";
import SignOut from "./SignOut";
const Header = async () => {
  const secction = await auth();
  console.log(secction);

  return (
    <div className="flex gap-4 justify-center mt-6">
      {secction?.user ? (
        <>
          {" "}
          <h1 className="mr-6">{secction.user.name}</h1>
          <Image
            alt="tes0"
            height={32}
            width={32}
            src={secction.user.image || "/favicon.png"}
            className="rounded-full"
          />
          <SignOut />
        </>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default Header;
