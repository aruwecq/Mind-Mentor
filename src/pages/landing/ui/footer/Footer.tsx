import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

export  function Footer() {
  return (
    <div className="flex h-auto w-full max-w-[1180px] justify-between text-xl m-auto ">
  <div className="">
    <p className="font-bold text-2xl "> Ссылки</p>
    <p className="font-medium text-xl">Правила</p>
    <p className="font-medium text-xl">Лицензия</p>
    <p className="font-medium text-xl">Обратная  связь</p>
  </div> 
  <div> 
  <div className="flex  gap-[10px] ">
    <div className="w-[42px] h-[49px] bg-amber-400 text-3xl font-bold rounded-md ">M</div>
          <div className="w-[42px] h-[49px] bg-black text-3xl text-white font-bold rounded-md ">M</div>
          <h1 className="text-2xl font-bold leading-tight">Mind <br /> mentor</h1>             
  </div>
  <div className="flex  gap-[20px] text-2xl mt-7">
    < MdFacebook className="text-2xl" />
          <RiInstagramFill />
          <FaTiktok />
          <FaTelegram />
  </div> 
  </div>
  <div className="">
    <p className="font-bold text-2xl">Вопросы</p>
    <p className="font-medium text-xl">О нас</p>
    <p className="font-medium text-xl">Частые вопросы</p>
    <p className="font-medium text-xl">Политика конфиденциальности</p>
  </div>
    </div>
  )
}
