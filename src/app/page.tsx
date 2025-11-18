"use client";

import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbas from "@/widgets/NavegacaoAbas";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
          <BarraSuperior />
          <BarraPesquisa />
      </header>  

      <hr className="my-3" />

      <main className="container mx-auto">
        <NavegacaoAbas />
        <Acomodacoes />
      </main>

      <div className="border-green-600 border-2 mt-5">Área conteúdos</div>  
  
      <footer className="border-purple-600 border-2">
        Rodapé
      </footer>
    </>
  );
}
