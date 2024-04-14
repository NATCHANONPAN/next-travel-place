import PlaceCard from "./PlaceCard";

export default function PlaceCardList() {
  return (
    <div className="flex w-full items-center  justify-start gap-8 overflow-x-auto lg:flex-row lg:flex-wrap lg:justify-center lg:overflow-y-auto">
      <PlaceCard></PlaceCard>
      <PlaceCard></PlaceCard>
      <PlaceCard></PlaceCard>
      <PlaceCard></PlaceCard>
      <PlaceCard></PlaceCard>
      <PlaceCard></PlaceCard>
    </div>
  );
}
