import Header from "@/components/Header";
import GetStartButton from "@/components/GetStartButton";
import Image from "next/image";
import PlaceCardList from "@/components/PlaceCardList";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-gray-100">
      <div className="flex h-screen min-h-screen w-full">
        <div className="flex h-full w-full items-center justify-center bg-[url('/main_background.jpg')] bg-cover pt-16 text-white xl:pt-24">
          <div className="flex flex-col items-center justify-center gap-12">
            <h1 className="text-5xl lg:text-9xl">Traveling</h1>
            <GetStartButton></GetStartButton>
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100vh-64px)] w-full bg-[url('/main_background2.jpeg')] bg-cover lg:h-[calc(100vh-96px)]">
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-8 lg:p-16">
          <div className="p-4 text-4xl font-bold  text-gray-100">
            FIND SOMETHING
          </div>
          <PlaceCardList></PlaceCardList>
        </div>
      </div>
    </div>
  );
}
