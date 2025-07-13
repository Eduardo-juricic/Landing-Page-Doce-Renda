import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";
import MeusProdutosHero from "../assets/meus-produtos-hero.jpg"; // <-- TROQUE A IMAGEM AQUI
import DarkModeButton from "./DarkModeButton";

function Hero() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height:
      typeof window !== "undefined" ? window.document.body.scrollHeight : 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.document.body.scrollHeight,
        });
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className="bg-light dark:bg-gray-900 py-16 md:py-24 lg:py-32 relative transition-colors duration-300 overflow-hidden">
      <ReactConfetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={100}
        wind={0.05}
        gravity={0.1}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10 relative">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-accent mb-6 leading-tight">
            Artesanato Feito com Amor, Especialmente para Você
          </h1>
          <p className="text-lg md:text-xl text-dark mb-8 dark:text-light">
            Produtos exclusivos e personalizados para presentear, decorar e
            tornar cada momento mais especial.
          </p>
          <a
            href="URL_DA_SUA_LOJA_SHOPEE" // <-- COLOQUE O LINK DA SUA LOJA SHOPEE AQUI
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105"
          >
            Visite Minha Loja na Shopee
          </a>
          <p className="mt-4 text-sm text-gray-600 dark:text-accent">
            Qualidade e carinho em cada detalhe.
          </p>
        </div>
        <div className="rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <img
            src={MeusProdutosHero}
            alt="Produtos de artesanato personalizados"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <DarkModeButton />
      </div>
    </section>
  );
}

export default Hero;
