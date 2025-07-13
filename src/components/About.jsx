import {
  GiftIcon,
  PaintBrushIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function About() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-primary leading-tight dark:text-accent text-center mb-12">
          Detalhes que Fazem a Diferença
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <PaintBrushIcon className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Design Exclusivo e Personalizado
            </h3>
            <p className="text-gray-600">
              Crio cada peça com a sua cara, do jeito que você sonhou para sua
              festa ou presente.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <GiftIcon className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Lembrancinhas Inesquecíveis
            </h3>
            <p className="text-gray-600">
              Surpreenda seus convidados com lembrancinhas que encantam e marcam
              a ocasião.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <HeartIcon className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Feito à Mão, com Amor
            </h3>
            <p className="text-gray-600">
              Cada produto é feito com cuidado e materiais de qualidade para
              garantir o melhor resultado.
            </p>
          </div>
        </div>
        <p className="mt-12 text-center text-lg text-gray-700 dark:text-gray-300">
          Minha missão é transformar suas ideias em realidade, com produtos que
          trazem mais cor e alegria para seus momentos especiais.
        </p>
      </div>
    </section>
  );
}

export default About;
