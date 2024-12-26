import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[70vh]">
        <LoginForm />
      </div>
    </>
  );
}
