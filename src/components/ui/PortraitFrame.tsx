import Image from "next/image";
import Mark from "@/components/brand/Mark";
import { assets } from "@/config/assets";
import { brand } from "@/config/brand";

type Props = {
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Retrato do Carlos. Enquanto o arquivo não existir, ocupa o mesmo espaço
 * com uma superfície tipográfica — nunca com uma foto de banco de imagens.
 * Basta preencher `portrait` em src/config/assets.ts.
 */
export default function PortraitFrame({
  ratio = "4 / 5",
  sizes = "(max-width: 1024px) 100vw, 45vw",
  priority = false,
  className = "",
}: Props) {
  if (assets.portrait) {
    return (
      <div className={`frame ${className}`} style={{ aspectRatio: ratio }}>
        <Image
          src={assets.portrait}
          alt={assets.portraitAlt}
          fill
          sizes={sizes}
          priority={priority}
          className="frame-img"
        />
      </div>
    );
  }

  return (
    <div className={`frame ${className}`} style={{ aspectRatio: ratio }}>
      <div className="plate">
        <div className="plate-grain" aria-hidden />
        <div className="plate-head">
          <span className="plate-meta">{brand.person}</span>
          <span className="plate-meta">Retrato</span>
        </div>
        <div className="plate-body flex items-end justify-between gap-[var(--s-4)]">
          <p className="plate-title" style={{ maxWidth: "9ch" }}>
            Carlos Henrique
          </p>
          <Mark size={34} tone="color" />
        </div>
      </div>
    </div>
  );
}
