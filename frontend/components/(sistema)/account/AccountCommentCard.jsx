import { Star } from "lucide-react";

export default function AccountCommentCard({ text, author, image, onClick }) {
  return (
    <article
      onClick={onClick}
      // Adicionado 'overflow-hidden' para que o canto azul respeite a borda arredondada
      className={`
        relative border-2 border-[#0033FF] rounded-lg flex items-center gap-4
        cursor-pointer hover:bg-blue-50 transition-all p-4 lg:py-6 h-[115px] lg:w-[450px] text-sm
        overflow-hidden
      `}
    >
      {/* Container do Triângulo Azul */}
      <div className="absolute top-0 right-0 w-14 h-14 bg-[#0033FF] [clip-path:polygon(0_0,100%_0,100%_100%)]">
        {/* Estrela posicionada no topo direito do triângulo */}
        <Star 
            fill="white" 
            stroke="white" 
            className="absolute top-2 right-2 size-5" 
        />
      </div>
      
      <img
        src={image}
        alt={`Avatar de ${author}`}
        // Corrigido erro de aspas extras que havia no seu código original
        className="w-14 h-14 rounded-full object-cover"
      />

      <div className="flex flex-col">
        <p className="text-sm">
          {text}
        </p>
        <span className="text-xs text-gray-600">
          {author}
        </span>
      </div>
    </article>
  );
}