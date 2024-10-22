export default function GradientDivs({ classNames }: { classNames: string }) {
  const colors = [
    "bg-blue-700/70",
    "bg-cyan-700/70",
    "bg-green-700/70",
    "bg-yellow-600/70",
    "bg-orange-600/70",
    "bg-red-700/70",
    "bg-pink-500/70",
    "bg-pink-700/70",
  ];

  return (
    <div className={`flex w-full ${classNames}`}>
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className={`w-[17%] h-full ${color}   -ml-1.5 rounded-xl`}
          ></div>
        );
      })}
    </div>
  );
}
