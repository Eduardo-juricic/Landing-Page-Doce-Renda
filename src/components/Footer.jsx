function FooterModern3() {
  return (
    <footer className="bg-gold-accent dark:bg-gray-800 py-8 text-center text-white dark:text-gray-300 text-sm transition-colors duration-300">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <p>&copy; {new Date().getFullYear()} Curso de Pudim Incrível.</p>
        <a
          href="/termos"
          className="hover:text-gold-accent dark:hover:text-yellow-400 transition-colors duration-300"
        >
          Termos
        </a>
        {/* Adicione outros links minimalistas se necessário */}
      </div>
    </footer>
  );
}

export default FooterModern3;
