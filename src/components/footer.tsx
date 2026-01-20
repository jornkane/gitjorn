const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center mt-10">
      <div className="container mx-auto px-4 w-full">
        <p className="text-sm">
          Version 2.0
          <br />
          &copy; 2025 Jørn Kanestrøm, Kane Computing. Alle rettigheter reservert.
        </p>
        <p className="text-sm">
          Utviklet av Jørn Kanestrøm og David 2IT1 2026
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/jornkane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:jorn.kane@example.com"
            className="text-gray-400 hover:text-yellow-300 transition"
          >
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;