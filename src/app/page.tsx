import { sanityClient } from "@/libs/sanity";
import Image from "next/image";

export default async function Home() {
  const posts = await sanityClient.fetch(`*[_type == "post"]`)
  console.log(posts, 'POSTS')
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  );
}
