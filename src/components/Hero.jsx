import PudimHeroSide from "../assets/pudim-hero.jpg";
import DarkModeButton from "./DarkModeButton"; // Importe o componente DarkModeButton

function Hero() {
  return (
    <section className="bg-cream dark:bg-gray-900 py-16 md:py-24 lg:py-32 relative transition-colors duration-300">
      {" "}
      {/* Adicione 'relative' aqui */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brown-dark mb-6 leading-tight dark:text-gold-accent">
            Transforme Sua Paixão por Pudim em Renda Extra!
          </h1>
          <p className="text-lg md:text-xl text-brown-medium mb-8 dark:text-gold-accent">
            Aprenda a fazer pudins gourmet irresistíveis e descubra como lucrar
            vendendo essas delícias.
          </p>
          <a
            href="https://go.hotmart.com/P99600473P?dp=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brown-primary text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-brown-secondary transition-colors duration-300 inline-block"
          >
            Comece a Vender Pudins!
          </a>
          <p className="mt-4 text-sm text-gray-600 dark:text-gold-accent">
            Descubra o caminho para o sucesso no mundo dos pudins artesanais.
          </p>
        </div>
        <div className="rounded-lg shadow-xl overflow-hidden">
          <img
            src={PudimHeroSide}
            alt="Pudim Delicioso para Venda"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Botão de Dark Mode posicionado absolutamente */}
      <div className="absolute top-4 right-4">
        <DarkModeButton />
      </div>
    </section>
  );
}

export default Hero;
