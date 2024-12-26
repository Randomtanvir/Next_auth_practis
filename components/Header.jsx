import { auth } from "@/auth";
import Image from "next/image";
const Header = async () => {
  const secction = await auth();
  console.log(secction);

  return (
    <div className="flex gap-4 justify-center mt-6">
      <h1 className="mr-6">{secction.user.name}</h1>
      <Image
        alt="tes0"
        height={32}
        width={32}
        src={secction.user.image}
        className="rounded-full"
      />
    </div>
  );
};

export default Header;
