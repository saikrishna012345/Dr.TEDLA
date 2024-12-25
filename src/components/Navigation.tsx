import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-navy/95 backdrop-blur-sm z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-serif font-bold">
          Dr. Jaya Shanker Tedla
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-white hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};