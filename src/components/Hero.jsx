import { discount, robot } from "../../assets";

export default function Hero() {
  return (
    <section className="mx-auto flex flex-row justify-center w-[70%] ">
      <div className="flex flex-col items-start justify-center">
        <div className=" overflow-hidden bg-discount-gradient rounded-[10px] px-[16px] py-[6px] relative flex justify-around gap-[10px]">
          <img src={discount} alt="" />
          <span className="text-[18px] leading-[30.8px] font-poppins">
            <span className="text-white">20%</span>
            <span className="text-white/70">
              Discount for <span className="text-white">1 Month</span> Account
            </span>
          </span>
        </div>
        <div className="flex flex-row w-full justify-between items-center ">
          <p className="text-[72px] leading-[100.8px] text-white font-poppins font-semibold">
            The Next <span className="text-gradient">Generation</span>
          </p>
          <div className="text-gradient text-[18px] font-medium  w-[140px] h-[140px] ">
            <p className="w-full h-full flex flex-col justify-center items-center font-poppins rounded-full border border-secondary">
              <span>Get</span>
              <br />
              <span>started</span>
            </p>
          </div>
        </div>
        <p>Payment Method</p>
        <p>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div>
        <img src={robot} alt="" className="w-full h-full" />
      </div>
    </section>
  );
}
