import Heading from "@/components/ui/Heading";
import { useRouter } from "next/router";
import React from "react";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <>
      <Heading title={"404!"} />
      <div className="text-center md:mt-[100px] mt-[50px]">
        <h1 className="md:text-8xl text-lg"> <span className="text-red-400">Oops!</span> Not Found</h1>
        <h1 className="md:text-8xl text-lg text-red-400">404!</h1>
        <button
          onClick={() => router.push("/")}
          className="mt-[12px] bg-blue-500 hover:bg-blue-600 px-[12px] py-[5px] text-white rounded-[6px]"
        >
          Back To Home
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
