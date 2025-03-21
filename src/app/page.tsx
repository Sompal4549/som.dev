import Image from "next/image";
  //  import CursorPointer from "@/components/Animations/CursorPointer"   
import SimpleForm from "@/components/Forms/SimpleForm";
import ActiveImage from "@/components/Images/ActiveImage"
import MultiFields from  "@/components/Forms/MultiFields"
import MultiDimensional from "@/components/Lists/MultiDimensional"
import SculptureGallery from "@/components/Gallery/SculptureGallery"
import RequestTracker, {App} from "@/components/Forms/RequestTracker"
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
{/* <CursorPointer/> */}
<SculptureGallery />
<RequestTracker/>
<App/>
<MultiDimensional/>
      <SimpleForm />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <MultiFields />
      <button popoverTarget="my-popover">
        Open popover
      </button>
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
  );
}
