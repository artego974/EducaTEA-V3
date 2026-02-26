"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AcessibilidadeButton from "./AcessbilidadeButton";
import AcessibilidadeCard from "./AcessibilidadeCard";

export default function AcessibilidadeWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex flex-col items-end gap-4  w-72">
      <div className="fixed bottom-25 right-6 z-40">
      <AnimatePresence>
        {open && <AcessibilidadeCard onClose={() => setOpen(false)} />}
      </AnimatePresence>
      </div>
      <div className="fixed bottom-25 right-6 z-30">
        <AcessibilidadeButton onClick={() => setOpen(!open)} />
      </div>

    </div>
  );
}
