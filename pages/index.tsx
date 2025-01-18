import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleShare = async () => {
    const blob = await fetch(
      "https://www.kawenlah.com/images/Kawenlah.svg"
    ).then((r) => r.blob());
    console.log(blob);
    if (navigator.share) {
      try {
        // Fetch or create the image file

        const data = {
          files: [
            new File([blob], "file.png", {
              type: blob.type,
            }),
          ],
          title: "test",
          text: "huahua",
        };
        await navigator.share(data);
        console.log("Content shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Your browser does not support sharing files.");
    }
  };
  return (
    <div className={`flex items-center justify-center  min-h-screen `}>
      <main className='flex flex-col justify-center items-center text-center'>
        <Image
          className='dark:invert'
          src='/cuba_test.jpg'
          alt='Next.js logo'
          width={250}
          height={500}
          priority
        />
        <div className='flex space-x-1 py-4'>
          <Button variant={"outline"}>Threads</Button>
          <Button variant={"outline"}>IgStory</Button>
          <Button variant={"outline"}>twitter</Button>
          <Button onClick={handleShare} variant={"outline"}>
            Share Via..
          </Button>
        </div>
      </main>
    </div>
  );
}
