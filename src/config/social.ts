export type SocialKey = "linkedin" | "instagram" | "github" | "behance";

/** Sem link → o ícone não é renderizado. */
export const social: Record<SocialKey, string> = {
  linkedin: "",
  instagram: "",
  github: "",
  behance: "",
};

export const socialLabels: Record<SocialKey, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  github: "GitHub",
  behance: "Behance",
};

export const activeSocial = () =>
  (Object.keys(social) as SocialKey[])
    .filter((key) => social[key].trim().length > 0)
    .map((key) => ({ key, label: socialLabels[key], href: social[key] }));
