import Stats from "./Stats";
import Bussiness from "./Bussiness";

export default function Information() {
  return (
    <div className="mx-auto flex flex-col justify-center w-[70%] gap-[80px]">
      <Stats></Stats>
      <Bussiness></Bussiness>
    </div>
  );
}
