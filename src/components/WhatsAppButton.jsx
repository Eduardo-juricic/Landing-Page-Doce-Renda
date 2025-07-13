// Componente de ícone do WhatsApp (SVG)
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="h-8 w-8 text-white"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .2c31.4 0 60.3 12.3 82.3 34.3 22 22 34.3 50.9 34.3 82.3 0 63.5-51.5 115-115 115-29.4 0-56.6-11.1-77.2-29.6l-5.7-5.7-57.6 15.2 15.5-56.1-6.1-5.8c-18.4-19.4-28.1-45-28.1-72.1 0-63.5 51.5-115 115-115zm71.2 148.2c-3.7-1.8-21.9-10.8-25.3-12-3.4-1.2-5.9-1.8-8.4 1.8s-9.5 12-11.7 14.4c-2.2 2.4-4.3 2.7-8 1s-15.7-5.8-30-18.5c-11.1-9.9-18.5-22.1-20.7-25.8-2.2-3.7-.2-5.7 1.6-7.4 1.7-1.5 3.7-4 5.5-6 1.8-2 2.4-3.4 3.7-5.9 1.2-2.4.6-4.5-0.3-6.3-0.9-1.8-8.4-20.1-11.5-27.5-3.1-7.4-6.2-6.4-8.6-6.5c-2.3-.1-5-0.1-7.5-0.1s-6.5 0.9-10 4.5c-3.4 3.5-13.1 12.8-13.1 31.1s13.4 36.1 15.3 38.5c1.8 2.4 26.1 39.6 63.1 55.7 8.9 3.8 15.7 6.1 21.1 7.8 10.1 3.2 19.3 2.7 26.5 1.6 7.8-1.2 21.9-9 25-17.7s3.1-16.2 2.2-17.7c-.9-1.5-3.4-2.4-7.1-4.2z" />
  </svg>
);

function WhatsAppButton() {
  // --- PERSONALIZE AQUI ---
  const phoneNumber = "5522999999999"; // <-- TROQUE PELO SEU NÚMERO com código do país e DDD
  const message =
    "Olá! Vi seu site de artesanato e gostaria de mais informações."; // <-- MENSAGEM PADRÃO
  // -------------------------

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="group fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-110"
        aria-label="Fale Conosco pelo WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {/* Balão de texto que aparece no hover */}
      <div className="absolute right-20 bottom-3 w-auto min-w-max p-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
        Fale Conosco!
        {/* Seta do balão */}
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 h-3 w-3 bg-gray-800 transform rotate-45"></div>
      </div>
    </div>
  );
}

export default WhatsAppButton;
