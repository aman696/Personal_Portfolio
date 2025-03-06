import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/aman696" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 hover:text-orange-500 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/aman-chaturvedi-690922229" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com/aman_17766"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-6 w-6 hover:text-orange-500 transition-colors" />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Aman Chaturvedi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;