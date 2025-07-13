function Footer() {
  return (
    <footer className="bg-accent dark:bg-gray-800 py-8 text-center text-white dark:text-gray-300 text-sm transition-colors duration-300">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <p>
          &copy; {new Date().getFullYear()} [Seu Nome ou Nome da Loja]. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
