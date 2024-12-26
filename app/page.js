import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Link className="flex justify-center mt-6" href="/login">
        Login
      </Link>
    </>
  );
}
