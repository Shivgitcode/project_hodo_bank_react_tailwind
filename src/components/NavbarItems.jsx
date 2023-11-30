export default function NavbarItems({ el }) {
  return (
    <li className=" text-white text-[16px] leading-[24px] font-poppins cursor-pointer">
      {el.title}
    </li>
  );
}
