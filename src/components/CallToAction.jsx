import { ShoppingBagIcon } from "@heroicons/react/24/solid";

function CallToAction() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-pink-100 via-light to-yellow-100 dark:from-gray-800 dark:via-dark dark:to-gray-900">
      <div className="container mx-auto text-center bg-white/50 dark:bg-gray-800/50 p-8 sm:p-12 rounded-2xl shadow-xl backdrop-blur-sm border border-white/30">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4 dark:text-accent">
          Gostou do que Viu?
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto mb-10 dark:text-gray-300">
          Clique no botão abaixo para explorar minha coleção completa na Shopee.
          Encontre a peça perfeita para você ou para presentear quem você ama!
        </p>
        <a
          href="URL_DA_SUA_LOJA_SHOPEE" // <-- COLOQUE O LINK DA SUA LOJA SHOPEE AQUI
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-secondary transition-all duration-300 transform hover:-translate-y-1 animate-pulse-custom"
        >
          <ShoppingBagIcon className="h-6 w-6" />
          <span>Ir para a Loja Agora</span>
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
