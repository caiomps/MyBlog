import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 text-center mt-auto">
      <p className="text-sm sm:text-base">
        Todos os direitos reservados a
        <a
          href="https://github.com/caiomps"
          className="text-yellow-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ThinkIT 2025
        </a>
      </p>
    </footer>
  );
};

export default Footer;
