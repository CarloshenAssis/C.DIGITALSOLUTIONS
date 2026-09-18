import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import WorkIndex from "@/components/sections/WorkIndex";
import SelectedWork from "@/components/sections/SelectedWork";
import Testimonials from "@/components/sections/Testimonials";
import SignatureMoment from "@/components/sections/SignatureMoment";
import Solutions from "@/components/sections/Solutions";
import Problems from "@/components/sections/Problems";
import Process from "@/components/sections/Process";
import Principles from "@/components/sections/Principles";
import AboutPreview from "@/components/sections/AboutPreview";
import NotesPreview from "@/components/sections/NotesPreview";
import FinalCta from "@/components/sections/FinalCta";

/**
 * A HOME É A PEÇA COMERCIAL PRINCIPAL.
 *
 * A ordem das seções é a narrativa:
 *   eu falo → eu mostro → eu paro e pergunto → eu proponho →
 *   você se reconhece → eu explico como trabalho → quem eu sou → vamos conversar.
 *
 * As demais páginas existem como prova, não como destinos independentes.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <WorkIndex />
      <SelectedWork />
      {/* Não renderiza nada enquanto não houver depoimento real. */}
      <Testimonials />
      <SignatureMoment />
      <Solutions />
      <Problems />
      <Process />
      <Principles />
      <AboutPreview />
      <NotesPreview />
      <FinalCta />
    </>
  );
}
