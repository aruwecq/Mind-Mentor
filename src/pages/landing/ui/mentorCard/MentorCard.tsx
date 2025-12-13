// const mentors = [
//   {
//     name: "Марина Сополова",
//     students: "1200 студентов",
//     language: "Русский",
//     experience: "Опыт 3 года",
//     company: "Работает в Google",
//     role: "Senior UX/UI дизайнер",
//     description: "Вы узнаете в этом курсы, как создавать сайты с нуля. Научитесь работать программами как Figma, After Effect.",
//     price: "от 2000 С",
//     tag: "Технологии",
//     image: "/your-image.jpg",
//     rating: "4.5"
//   },
//   {
//     name: "Алексей Иванов",
//     students: "800 студентов",
//     language: "Русский",
//     experience: "Опыт 5 лет",
//     company: "Работает в Yandex",
//     role: "UX дизайнер",
//     description: "Научитесь проектировать интерфейсы и создавать прототипы.",
//     price: "от 1800 С",
//     tag: "Дизайн",
//     image: "/your-image2.jpg",
//     rating: "4.8"
//   },
//    {
//     name: "Алексей Иванов",
//     students: "800 студентов",
//     language: "Русский",
//     experience: "Опыт 5 лет",
//     company: "Работает в Yandex",
//     role: "UX дизайнер",
//     description: "Научитесь проектировать интерфейсы и создавать прототипы.",
//     price: "от 1800 С",
//     tag: "Дизайн",
//     image: "/your-image2.jpg",
//     rating: "4.8"
//   },
  
// ];

// export default function MentorCardsList() {
//   return (
//     <div className="flex flex-wrap gap-6">
//       {mentors.map((mentor, index) => (
//         <div key={index} className="my-2 max-w-sm w-full ml-4 mr-4 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl">
//           <div className="relative w-full h-60 bg-gray-200">
//             <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />

//             <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow text-sm font-semibold flex items-center gap-1">
//               <span>{mentor.rating}</span>
//               <span>😊</span>
//             </div>

//             <button className="mt-[-100px] ml-[330px]  w-10 h-10 rounded-full bg-white  flex items-center justify-center">
//               ▶
//             </button>

//             <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
//               ❤️
//             </button>
//           </div>

//           <div className="p-5 space-y-3">
//             <h2 className="text-xl">{mentor.name}</h2>
//             <p className="text-gray-500">{mentor.students} · {mentor.language}</p>

//             <div className="flex flex-wrap gap-2">
//               <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{mentor.experience}</span>
//               <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{mentor.company}</span>
//               <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{mentor.role}</span>
//             </div>

//             <p className="text-gray-700 text-sm leading-relaxed text-left">
//               {mentor.description}
//             </p>

//             <div className="flex items-center justify-between pt-3">
//               <p className="text-lg font-semibold">{mentor.price}</p>
//               <span className="px-4 py-4 bg-gray-900 text-white rounded-full text-sm">{mentor.tag}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
