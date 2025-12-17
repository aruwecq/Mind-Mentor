import { IoHeartCircleSharp } from "react-icons/io5";
import { TbBellRingingFilled } from "react-icons/tb";
import { FaBasketShopping } from "react-icons/fa6";
 import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-white gap-y-30px ">
      <div className="w-[1300px] mx-auto h-[80px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[42px] h-[49px] bg-amber-400 text-3xl font-bold rounded-md flex items-center justify-center">M</div>
          <div className="w-[42px] h-[49px] bg-black text-3xl text-white font-bold rounded-md flex items-center justify-center">M</div>
          <h1 className="text-2xl font-bold leading-tight">Mind <br /> mentor</h1>
      </div>
<nav className="flex items-center gap-[40px]">
<Link to="/"className="h-[44px] text-2xl px-[20px] rounded-[10px] font-semibold flex items-center hover:bg-gray-100 transition">Главная</Link>
<Link to="/courses"className="h-[44px] text-2xl px-[20px] rounded-[10px] font-semibold flex items-center hover:bg-gray-100 transition">Курсы</Link>
<Link to="/mentors"className="h-[44px] text-2xl px-[20px] rounded-[10px] font-semibold flex items-center hover:bg-gray-100 transition">Менторы</Link>
<Link to="/projects"className="h-[44px] text-2xl px-[20px] rounded-[10px] font-semibold flex items-center hover:bg-gray-100 transition">Проекты</Link>
</nav>
  <div className="flex items-center gap-3 text-3xl">
    <IoHeartCircleSharp />
    <TbBellRingingFilled />
    <FaBasketShopping />
  </div>
</div>
</header>
  );
}

