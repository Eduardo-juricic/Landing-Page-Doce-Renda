import {
  BookOpenIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function AboutModern1() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-brown-dark leading-tight dark:text-gold-accent text-center mb-12">
          Desvende os Segredos do Pudim Perfeito
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <BookOpenIcon className="h-12 w-12 text-brown-secondary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Conteúdo Abrangente
            </h3>
            <p className="text-gray-600">
              Desde os clássicos até as criações inovadoras, tudo em um só
              lugar.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <LightBulbIcon className="h-12 w-12 text-brown-secondary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Dicas e Truques Exclusivos
            </h3>
            <p className="text-gray-600">
              Aprenda os segredos para fazer um pudim cremoso e sem furinhos.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <UserGroupIcon className="h-12 w-12 text-brown-secondary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Para Todos os Níveis
            </h3>
            <p className="text-gray-600">
              Iniciantes e experientes são bem-vindos!
            </p>
          </div>
        </div>
        <p className="mt-12 text-center text-lg text-gray-700 dark:text-gray-300">
          Nosso curso é a sua porta de entrada para o mundo delicioso dos pudins
          caseiros. Aprenda no seu ritmo e surpreenda a todos com suas
          habilidades!
        </p>
      </div>
    </section>
  );
}

export default AboutModern1;
