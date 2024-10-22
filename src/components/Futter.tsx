import GradientDivs from "./GradientDivs";

export default function Futter() {
  return (
    <div className="w-screen h-56">
      <div className="flex">
        <GradientDivs classNames="h-2" />
        <GradientDivs classNames="h-2" />
        <GradientDivs classNames="h-2" />
        <GradientDivs classNames="h-2" />
      </div>
      <div className="h-[90%] grid place-content-center text-5xl">Footer</div>
    </div>
  );
}
