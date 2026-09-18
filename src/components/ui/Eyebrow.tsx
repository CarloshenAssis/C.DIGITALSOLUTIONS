type Props = {
  children: React.ReactNode;
  /** Exibe o terminal azul. Use com parcimônia: um por viewport. */
  terminal?: boolean;
  className?: string;
};

export default function Eyebrow({ children, terminal = false, className = "" }: Props) {
  return (
    <p
      className={`t-label inline-flex items-center gap-[10px] ${className}`}
      style={{ color: "var(--fg-muted)" }}
    >
      {terminal ? <span aria-hidden className="terminal" /> : null}
      {children}
    </p>
  );
}
