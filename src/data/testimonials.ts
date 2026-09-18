export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

/**
 * Intencionalmente vazio.
 *
 * Depoimento inventado é a forma mais rápida de destruir a credibilidade de
 * um site institucional. Enquanto não houver depoimento real e autorizado,
 * este array permanece vazio e a seção não é renderizada.
 */
export const testimonials: Testimonial[] = [];
