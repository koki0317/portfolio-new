"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  console.log("Hello");
  const route = useRouter();
  console.log(route);
  useEffect(() => {
    return route.push("/");
  }, []);
  return <div className="text-black">HELlo</div>;
}
