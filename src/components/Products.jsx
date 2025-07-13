// src/components/Products.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importe os estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importe as imagens dos seus produtos
import TopoDeBoloImg from "../assets/topo-turma-da-monica.jpg";
import LembrancinhaImg from "../assets/hero.jpg";
import CadernoImg from "../assets/cadernetavacinamanu.jpg";
import CardenetaImg from "../assets/Agendaescolar.jpg";

// --- Seus produtos ---
const products = [
  {
    id: 1,
    name: "Topos de Bolo Personalizados",
    description:
      "Deixe seu bolo incrível com um topo feito sob medida para sua festa.",
    image: TopoDeBoloImg,
    link: "URL_DO_PRODUTO_NA_SHOPEE", // <-- LINK PARA A SHOPEE
  },
  {
    id: 2,
    name: "Lembrancinhas Criativas",
    description: "Mimos que seus convidados vão amar e guardar com carinho.",
    image: LembrancinhaImg,
    link: "URL_DO_PRODUTO_NA_SHOPEE", // <-- LINK PARA A SHOPEE
  },
  {
    id: 3,
    name: "Cadernos e Agendas",
    description:
      "Organize suas ideias com cadernos personalizados com seu estilo.",
    image: CadernoImg,
    link: "URL_DO_PRODUTO_NA_SHOPEE", // <-- LINK PARA A SHOPEE
  },
  {
    id: 4,
    name: "Cardenetas de Vacinação",
    description:
      "Proteja os documentos do seu bebê com uma capa linda e durável.",
    image: CardenetaImg,
    link: "URL_DO_PRODUTO_NA_SHOPEE", // <-- LINK PARA A SHOPEE
  },
];
// -----------------------------------------

function Products() {
  return (
    <section className="bg-light dark:bg-dark py-16 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-primary leading-tight dark:text-accent text-center mb-12">
          Meus Produtos em Destaque
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          // --- BREAKPOINTS ATUALIZADOS ---
          breakpoints={{
            // Telas de tablet
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // Telas de desktop
            1024: {
              slidesPerView: 3, // Mantive 3 para telas maiores para não ficarem gigantes
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              {/* O "h-full" foi removido para o card se ajustar à altura da imagem */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col group">
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    // --- ALTURA DA IMAGEM AUMENTADA ---
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary dark:text-light mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {product.description}
                  </p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-primary text-white font-bold text-center py-2 px-4 rounded-full shadow-md hover:bg-secondary transition-colors duration-300"
                  >
                    Ver na Loja
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Products;
