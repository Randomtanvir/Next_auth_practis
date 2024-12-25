import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <>
      <div className="text-center text-gray-600 bg-zinc-300 text-xl p-4">
        Hellcome Next auth
      </div>
      <div className="flex justify-center items-center h-[70vh]">
        <LoginForm />
      </div>
    </>
  );
}
