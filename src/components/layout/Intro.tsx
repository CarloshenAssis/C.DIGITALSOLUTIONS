import Mark from "@/components/brand/Mark";
import { brand } from "@/config/brand";

/**
 * ABERTURA
 * ---------------------------------------------------------------------------
 * Renderizada no servidor e controlada inteiramente por CSS. Quem decide se
 * ela aparece é o script inline de `introScript`, que roda antes da primeira
 * pintura — por isso não existe nem flash da tela de abertura em visitas
 * repetidas, nem estado de React envolvido.
 *
 * Aparece uma vez por sessão, nunca com `prefers-reduced-motion`, e libera a
 * rolagem em 1s. Sem JavaScript, simplesmente não aparece.
 */
export default function Intro() {
  return (
    <div className="intro" aria-hidden>
      <Mark size={56} tone="color" draw />
      <p className="intro-name t-label">{brand.fullName}</p>
      <span className="intro-rule" />
    </div>
  );
}

/**
 * data-intro:  ausente → sem JS, nunca exibe
 *              "1"     → exibindo
 *              "2"     → saindo
 *              "0"     → encerrada
 */
export const introScript = `(function(){
  var d=document.documentElement;
  var end=function(){d.setAttribute("data-intro","0")};
  try{
    if(sessionStorage.getItem("c-intro")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches){return end()}
    sessionStorage.setItem("c-intro","1")
  }catch(e){return end()}
  d.setAttribute("data-intro","1");
  var run=function(){
    document.body.style.overflow="hidden";
    setTimeout(function(){document.body.style.overflow="";d.setAttribute("data-intro","2")},1000);
    setTimeout(end,1480)
  };
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",run)}else{run()}
})();`;
