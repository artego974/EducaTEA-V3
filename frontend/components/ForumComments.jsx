export default function CommentCard({ text, author, image, comunidade = false, onClick }) {
  return (
    <article
      onClick={onClick}
      className={`
        border-2 border-[#0033FF] rounded-lg flex items-center gap-4
        cursor-pointer hover:bg-blue-50 transition-all
        ${comunidade
          ? "p-3 h-[95px] w-full text-sm"
          : "p-4 lg:py-6 h-[115px] lg:w-[450px] text-sm"}
      `}
    >
      <img
        src={image}
        alt={`Avatar de ${author}`}
        className={`${comunidade ? "w-12 h-12" : "w-14 h-14"} rounded-full`}
      />

      <div className="flex flex-col">
        <p className={`${comunidade ? "text-[13px] line-clamp-2" : "text-sm"}`}>
          {text}
        </p>
        <span className={`${comunidade ? "text-[11px]" : "text-xs"} text-gray-600`}>
          {author}
        </span>
      </div>
    </article>
  );
}
