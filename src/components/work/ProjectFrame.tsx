import Image from "next/image";
import ProjectPlate from "./ProjectPlate";

type Props = {
  title: string;
  kicker: string;
  year: string;
  src?: string;
  alt?: string;
  /** Proporção CSS, ex.: "16 / 10". */
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  seed?: number;
  className?: string;
  hover?: boolean;
  name?: "top" | "bottom" | "none";
  index?: string;
};

/**
 * Moldura única para qualquer superfície de trabalho.
 * Com arquivo → next/image otimizada. Sem arquivo → capa tipográfica.
 * Trocar um pelo outro é só preencher `image` em src/data/projects.ts.
 */
export default function ProjectFrame({
  title,
  kicker,
  year,
  src,
  alt,
  ratio = "16 / 10",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 60vw",
  seed = 0,
  className = "",
  hover = true,
  name = "bottom",
  index,
}: Props) {
  return (
    <div
      className={`frame ${hover ? "frame-hover" : ""} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? `${title} — ${kicker}`}
          fill
          sizes={sizes}
          priority={priority}
          className="frame-img frame-img-top"
        />
      ) : (
        <ProjectPlate
          title={title}
          kicker={kicker}
          year={year}
          seed={seed}
          name={name}
          index={index}
        />
      )}
    </div>
  );
}
