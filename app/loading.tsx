export default function loading() {
  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-40 gap-10">
      <div className="grid gap-2 place-items-start text-center animate-pulse duration-300 mb-10">
        <div className="w-full h-14 bg-mainBg2 rounded"></div>
        <div className="w-96 h-7 bg-mainBg2 rounded"></div>
        <div className="w-60 h-16 bg-mainBg2 rounded"></div>
        <div className="w-full flex gap-2 items-center">
          <div className="w-60 h-16 bg-mainBg2 rounded"></div>
          <div className="w-full h-16 bg-mainBg2 rounded"></div>
        </div>
      </div>

      <div className="grid gap-5 place-items-start text-center animate-pulse duration-300">
        <div className="w-full flex gap-2 items-center">
          <div className="w-full h-16 bg-mainBg2 rounded"></div>
          <div className="w-60 h-16 bg-mainBg2 rounded"></div>
          <div className="w-60 h-16 bg-mainBg2 rounded"></div>
        </div>
        <div className="w-full h-14 bg-mainBg2 rounded"></div>
        <div className="w-96 h-7 bg-mainBg2 rounded"></div>
      </div>
    </div>
  );
}
