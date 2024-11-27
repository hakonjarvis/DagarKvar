import DaysLeft from "./DaysLeft/DaysLeft";
import Spinner from "./Spinner/Spinner";
import Image from "next/image";
import CartoonTrees from "../assets/CartoonTrees.svg";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image src={CartoonTrees} alt="Cartoon Trees Background" layout="fill" objectFit="cover" className="z-[-1]" />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-16 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-4 sm:gap-8 row-start-2 items-center sm:items-start">
          <Spinner size='lg'/>
          <DaysLeft/>
        </main>
      </div>
    </div>
  );
}
