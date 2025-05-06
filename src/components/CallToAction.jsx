function CallToAction() {
  return (
    <section className="py-20 bg-gold-accent bg-gradient-to-r from-orange-100 to-yellow-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-brown-primary mb-6 dark:text-gold-accent transition-colors duration-300">
          Oferta Especial por Tempo Limitado!
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 opacity-90 mb-8 dark:text-gray-300 transition-colors duration-300">
          Não perca essa oportunidade única de aprender a fazer pudins incríveis
          e conseguir uma renda extra!
        </p>
        <div className="text-2xl font-bold text-red-600 mb-6 dark:text-red-400 transition-colors duration-300">
          De{" "}
          <span className="line-through text-gray-500 dark:text-gray-600 transition-colors duration-300">
            R$ 69,90
          </span>{" "}
          por apenas{" "}
          <span className="text-brown-primary dark:text-yellow-400 transition-colors duration-300">
            R$ 29,90
          </span>
          !
        </div>
        <a
          href="https://pay.hotmart.com/P99600473P"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brown-primary text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-brown-secondary transition-colors duration-300 inline-block"
        >
          Aproveite a Oferta Agora!
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
