import LinkButton from "./LinkButton";

export default function PlaceCard() {
  return (
    <div className="flex h-full max-h-[520px] w-[calc(100vw-64px)] max-w-80 flex-col rounded-2xl lg:max-h-[620px] lg:w-1/3 lg:max-w-96">
      <img
        alt="place image"
        src="./default.jpeg"
        className="h-1/2 w-full rounded-t-2xl"
      />
      <div className="flex h-1/2 w-full flex-col justify-between gap-3 rounded-b-2xl bg-white p-5 lg:gap-5 lg:p-6">
        <div className="flex h-2/3 w-full flex-col gap-2 lg:gap-4">
          <div className="text-xl lg:text-2xl"> Header</div>
          <div className="w-full flex-shrink overflow-auto break-words  text-sm lg:text-base">
            DescriptionDescriptionDescriptionDescriptionDescription Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description
          </div>
        </div>
        <LinkButton></LinkButton>
      </div>
    </div>
  );
}
