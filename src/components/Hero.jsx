import { discount, robot } from "../../assets";

export default function Hero() {
  return (
    <section className="mx-auto flex flex-row justify-center w-[70%] ">
      <div>
        <div>
          <p>
            <img src={discount} alt="" />
            <span>
              <span>20%</span>
              <span>
                Discount for <span>1 Month</span> Account
              </span>
            </span>
          </p>
        </div>
        <div>
          <p>
            The Next <span>Generation</span>
          </p>
          <div>Get Started</div>
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
