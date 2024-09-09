import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="h-[calc(100vh-96px)] mt-40 flex items-center justify-center">
        <SignUp />
    </div>
  );
}