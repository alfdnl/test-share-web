import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleShare = async () => {
    const blob = await fetch("/cuba_test.jpg").then((r) => r.blob());
    console.log(blob);
    if (navigator.share) {
      try {
        // Fetch or create the image file

        const data = {
          files: [
            new File([blob], "file.jpg", {
              type: blob.type,
            }),
          ],
          title: "test",
          text: "huahua",
          url: "https://www.kawenlah.com",
        };
        console.log(data);
        await navigator.share(data);
        console.log("Content shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Your browser does not support sharing files.");
    }
  };

  const postIGStory = async () => {
    // Fetch an example image from a URL
    const blob = await fetch("/cuba_test.jpg").then((r) => r.blob());

    // Create a File object (Instagram may require this format)
    const file = new File([blob], "sample-image.png", { type: "image/png" });

    // Create an object URL to test Instagram sharing
    const objectURL = URL.createObjectURL(file);

    // Simulate Instagram Story sharing (Instagram won't accept this directly, but you can test)
    console.log(objectURL);
    window.location.href = `instagram://story-camera?file=${objectURL}`;
  };

  const postThreads = async () => {
    // Fetch an example image from a URL
    const blob = await fetch("/cuba_test.jpg").then((r) => r.blob());

    // Create a File object (Instagram may require this format)
    const file = new File([blob], "sample-image.png", { type: "image/png" });

    // Create an object URL to test Instagram sharing
    const objectURL = URL.createObjectURL(file);

    // Simulate Instagram Story sharing (Instagram won't accept this directly, but you can test)
    console.log(objectURL);
    window.location.href = `www.kawenlah.com`;
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
          <Button onClick={postThreads} variant={"outline"}>
            Threads
          </Button>
          <Button onClick={postIGStory} variant={"outline"}>
            IgStory
          </Button>
          <Button variant={"outline"}>twitter</Button>
          <Button onClick={handleShare} variant={"outline"}>
            Share Via..
          </Button>
        </div>
      </main>
    </div>
  );
}
