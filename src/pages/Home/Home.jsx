import background from "../../assets/img/home_background.jpg";

export function Home() {
  return (
    <div className="mb-44">
      <div
        className="absolute inset-0 -z-50 w-full h-screen"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        className="text-base-100 flex flex-col justify-center h-screen"
        style={{ height: "calc(100vh - 137px)" }}
      >

      </div>
      <div className="bg-black w-[1000px] h-[1000px] flex justify-evenly items-center">
          <div className="bg-white w-[100px] h-[100px]"></div>
          <div className="bg-white w-[100px] h-[100px]"></div>
          <div className="bg-white w-[100px] h-[100px]"></div>
          <div className="bg-white w-[100px] h-[100px]">LOGIN</div>
      </div>
    </div>
  );
}
