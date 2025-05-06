import { CheckCircleIcon } from "@heroicons/react/24/solid";
import LearningBgChecklist from "../assets/pudim-fundo.jpg";

function LearningModernComBg() {
  return (
    <section
      className="py-16 relative bg-cover bg-center transition-colors duration-300 dark:bg-gray-800"
      style={{ backgroundImage: `url('${LearningBgChecklist}')` }}
    >
      <div className="absolute inset-0 bg-white opacity-80 dark:bg-gray-900 dark:opacity-60 transition-colors duration-300"></div>{" "}
      {/* Sobreposição para legibilidade */}
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-semibold text-brown-primary text-center mb-12 dark:text-gold-accent transition-colors duration-300">
          Descubra o Que Você Vai Dominar
        </h2>
        <ul className="space-y-6">
          <li className="flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 dark:text-yellow-400 transition-colors duration-300" />
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Receitas Clássicas e Essenciais de Pudim
            </p>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 dark:text-yellow-400 transition-colors duration-300" />
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Variações Criativas com Chocolate, Coco e Frutas
            </p>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 dark:text-yellow-400 transition-colors duration-300" />
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Segredos para um Pudim Cremoso e Textura Perfeita
            </p>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 dark:text-yellow-400 transition-colors duration-300" />
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Técnicas Detalhadas para o Caramelo Ideal
            </p>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 dark:text-yellow-400 transition-colors duration-300" />
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Guia Completo de Ingredientes e Substituições Inteligentes
            </p>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 dark:text-yellow-400 transition-colors duration-300" />
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Métodos Infalíveis para Desenformar sem Danificar
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LearningModernComBg;
