import { RiSearchFill } from "react-icons/ri";
const Baner = () => {
  return (
    <div>
    <div className="bg-[#DFF8F1] mx-10 mt-4 rounded-2xl px-12 py-20 text-center flex-col">
    <div>   
     <p className=" mb-6 text-2xl "> <em> Успехов тебе в начинаниях 🤗</em></p>
    </div>
    <div>
    <h1 className="text-5xl font-extrabold leading-tight max-w-6xl mx-auto ">Mind mentor — место где вы можете найти ментора и курсы,а также нужные проекты</h1>
    </div>
    {/* <div className="mt-10 flex justify-center gap-4">
    <input type="text"placeholder="Поиск, например курс для дизайнера"className="w-[360px] px-6 py-4 rounded-full outline-none w-[580px] "/>
    
    </div> */}
    <div className=" flex justify-center items-center  gap-[30px] ">
  <div className="flex items-center bg-white rounded-3xl px-6 py-4 w-[420px] shadow-sm">
    <input type="text" placeholder="Поиск, например курс для дизайнера" className="flex-1 outline-none text-gray-600 placeholder-gray-400"/>
  <RiSearchFill />
  </div>
   <button className="bg-black text-white px-8 py-4 rounded-3xl font-semibold ">Подобрать</button>
</div>
  </div>
<div className="flex flex-wrap justify-center gap-4 p-6 bg-white">
  <a href="#" className="px-15 py-4 border border-gray-200 rounded-full text-lg font-bold uppercase tracking-wider text-black transition-all hover:shadow-md hover:border-blue-400">#Дизайн</a>
  <a href="#" className="px-15 py-4 border border-gray-200 rounded-full text-lg font-bold uppercase tracking-wider text-black transition-all hover:shadow-md hover:border-blue-400">#Frontend</a>
  <a href="#" className="px-15 py-4 border border-gray-200 rounded-full text-lg font-bold uppercase tracking-wider text-black transition-all hover:shadow-md hover:border-blue-400">#Backend</a>
  <a href="#" className="px-15 py-4 border border-gray-200 rounded-full text-lg font-bold uppercase tracking-wider text-black transition-all hover:shadow-md hover:border-blue-400">#Дизайн</a>
  <a href="#" className="px-15 py-4 border border-gray-200 rounded-full text-lg font-bold uppercase tracking-wider text-black transition-all hover:shadow-md hover:border-blue-400">#Дизайн</a>
</div>
    </div>
  )
}

export default Baner