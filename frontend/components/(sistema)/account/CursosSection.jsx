import React from 'react'
import Image from "next/image";

import { 
  Clock, 
  Star, 
} from 'lucide-react';
import Link from 'next/link';

export default function CursosSection({courses}) {
  return (
    courses.map((course, idx) => (
        <Link key={idx} href={`/account/cursos/${idx}/aula/1`}>
        <div key={idx} className="cursor-pointer relative border-2 border-[#D6E1ED] rounded-xl p-5 pt-10 flex flex-col gap-4 hover:shadow-md transition bg-white">

        <div className="flex gap-6">
            <Image src={course.image} className="w-20 h-auto" alt="Logo" />

            <h4 className="font-bold w-4/5 text-xl text-[#092B53] leading-tight">
            {course.title}
            </h4>
        </div>
        <div className="flex flex-col">
            <div className="h-1 w-full block mt-3 mb-4">
                <div className="transform -translate-x-1/2 left-1/2 absolute w-full h-1 bg-[#D6E1ED]"></div>
                <div className="transform left-0 absolute w-4/5 h-1 bg-[#0B7E13]"></div>
            </div>

            <div className="flex justify-between text-[#BBC9DA] text-sm">
            <div className="flex items-center gap-2">
                <Clock size={24} />
                <span className="font-semibold text-xl">{course.time}</span>
            </div>
            <div className="flex items-center gap-2 text-[#BBC9DA]">
                <Star size={24} className="fill-slate-300 text-slate-300" />
                <span className="font-semibold text-xl">{course.rating}</span>
            </div>
            </div>
        </div>
        </div>
        </Link>
    ))  
  )
}
