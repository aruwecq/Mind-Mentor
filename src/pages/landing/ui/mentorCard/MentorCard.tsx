import { FaPlay, FaHeart } from "react-icons/fa";

const mentors = [
  {
    name: "Марина Сополова",
    students: "1200 студентов",
    language: "Русский",
    experience: "Опыт 3 года",
    company: "Работает в Google",
    role: "Senior UX/UI дизайнер",
    description:
      "Вы узнаете в этом курсе, как создавать сайты с нуля. Научитесь работать с программами Figma, After Effects.",
    price: "2000",
    tag: "Технологии",
    image: "/your-image.jpg",
    rating: "4.5",
  },
    {
    name: "Марина Сополова",
    students: "1200 студентов",
    language: "Русский",
    experience: "Опыт 3 года",
    company: "Работает в Google",
    role: "Senior UX/UI дизайнер",
    description:
      "Вы узнаете в этом курсе, как создавать сайты с нуля. Научитесь работать с программами Figma, After Effects.",
    price: "2000",
    tag: "Технологии",
    image: "/your-image.jpg",
    rating: "4.5",
  },
    {
    name: "Марина Сополова",
    students: "1200 студентов",
    language: "Русский",
    experience: "Опыт 3 года",
    company: "Работает в Google",
    role: "Senior UX/UI дизайнер",
    description:
      "Вы узнаете в этом курсе, как создавать сайты с нуля. Научитесь работать с программами Figma, After Effects.",
    price: "2000",
    tag: "Технологии",
    image: "/your-image.jpg",
    rating: "4.5",
  },
];

function SmileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" fill="#FFD166" />
      <circle cx="9" cy="10" r="1.5" fill="#000" />
      <circle cx="15" cy="10" r="1.5" fill="#000" />
      <path
        d="M8 14c1 1.5 2.5 2 4 2s3-.5 4-2"
        stroke="#000"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MentorCardsList() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5]">
      <div className="flex gap-6">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="w-[360px] bg-white rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            <div className="relative h-[240px]">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Rating */}
              <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow flex items-center gap-2">
                <span className="text-[20px] font-medium text-black">
                  {mentor.rating}
                </span>
                <SmileIcon />
              </div>

              {/* Video */}
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-black flex items-center justify-center">
                <FaPlay className="text-[#FFD166]" size={18} />
              </button>

              {/* Like */}
              <button className="absolute right-4 bottom-4 w-[48px] h-[48px] rounded-full bg-black flex items-center justify-center">
                <FaHeart className="text-white" size={18} />
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-[20px] font-semibold text-black">
                {mentor.name}
              </h2>

              <p className="mt-1 text-[14px] text-gray-500">
                {mentor.students} · {mentor.language}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-4 h-[38px] flex items-center justify-center rounded-full text-[14px] bg-[#EFE9FF] border border-black">
                  {mentor.experience}
                </span>
                <span className="px-4 h-[38px] flex items-center justify-center rounded-full text-[14px] bg-[#E6F6EE] border border-black">
                  {mentor.company}
                </span>
                <span className="px-4 h-[38px] flex items-center justify-center rounded-full text-[14px] bg-[#EAF2FF] border border-black">
                  {mentor.role}
                </span>
              </div>

              <p className="mt-4 text-[14px] text-black leading-relaxed">
                {mentor.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-black font-semibold text-[18px]">
                  от {mentor.price} С
                </div>

                <div className="px-6 h-[56px] bg-[#2B2B2B] rounded-full flex items-center justify-center">
                  <span className="text-white text-[20px] font-medium">
                    {mentor.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
