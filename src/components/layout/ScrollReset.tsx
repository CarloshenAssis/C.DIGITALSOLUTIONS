"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Toda navegação começa do topo — exceto quando há âncora na URL. */
export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
