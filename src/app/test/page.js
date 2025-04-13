import Image from "next/image";
//  import CursorPointer from "@/components/Animations/CursorPointer"
import SimpleForm from "@/components/Forms/SimpleForm";
import ActiveImage from "@/components/Images/ActiveImage";
import MultiFields from "@/components/Forms/MultiFields";
import MultiDimensional from "@/components/Lists/MultiDimensional";
import SculptureGallery from "@/components/Gallery/SculptureGallery";
import RequestTracker, { App } from "@/components/Forms/RequestTracker";
import Chat from "@/components/Forms/Chat";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navigations/Navbar";
import WrapLayout from "@/components/ui/WrapLayout";
export default function Home() {
  const navData = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "Cart", url: "/cart" },
    // { title: "MovieDb", url: "/movies" },
    { title: "Blogs", url: "/blogs" },
    { title: "Commentary", url: "/commentary" },
  ];
  return (
    <WrapLayout>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <Box>
          <Navbar navData={navData} />
        </Box>
        {/* <CursorPointer/> */}

        <SculptureGallery />
        <Box as="section">
          {/* <iframe src="https://eyes.nasa.gov/apps/solar-system/#/earth?interactPrompt=true&detailPanel=false&logo=false&search=false&shareButton=false&menu=false&collapseSettingsOptions=true&hideFullScreenToggle=true&lighting=natural" allowfullscreen ></iframe> */}
          {/* <Box as="iframe" width="100vw" height="100vh" src="https://eyes.nasa.gov/apps/solar-system/#/earth?interactPrompt=true&detailPanel=false&logo=false&search=false&shareButton=false&menu=false&collapseSettingsOptions=true&hideFullScreenToggle=true&lighting=natural" allowfullscreen={true} ></Box> */}
          {/* <Box as="iframe" src="https://app.spline.design/file/893aa38d-b0e3-47e4-83fa-08155a091a38" 
 width="100vw" height="100vh"
></Box> */}
        </Box>
        <RequestTracker />
        <App />
        <MultiDimensional />
        <Chat />
        <SimpleForm />
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          {/* <MultiFields /> */}
          <button popoverTarget="my-popover">Open popover</button>
          <div id="my-popover" popover="auto">
            <ActiveImage />
          </div>
        </main>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </WrapLayout>
  );
}
