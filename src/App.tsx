import Experience from "./components/Experience";
import HeroSection from "./components/Hero";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Contact from "./components/ContactForm";
import { Github, Linkedin, Instagram } from "lucide-react";
import Header from "./components/Header";

const NeuralConnection = ({ path, delay }: { path: string; delay: number }) => (
  <motion.path
    d={path}
    stroke="#00ffff"
    strokeWidth="1"
    strokeOpacity="0.5"
    fill="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.5 }}
    transition={{
      duration: 2.5,
      delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }}
    filter="url(#neural-glow)"
  />
);

const NeuralNode = ({ cx, cy }: { cx: number; cy: number }) => (
  <motion.circle
    cx={cx}
    cy={cy}
    r="2.5"
    fill="#f08c00"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    filter="url(#node-glow)"
  />
);

const NeuralBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 3000 });

  useEffect(() => {
    const updateDimensions = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      setDimensions({
        width: window.innerWidth,
        height: docHeight
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    const timer = setTimeout(updateDimensions, 1000);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  const generateNodes = () => {
    const nodes = [];
    const count = dimensions.width < 768 ? 60 : 120;
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height
      });
    }
    return nodes;
  };

  const generateConnections = (nodes: Array<{ x: number; y: number }>) => {
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) +
          Math.pow(nodes[i].y - nodes[j].y, 2)
        );
        if (distance < 350 && Math.random() > 0.90) {
          const midX = (nodes[i].x + nodes[j].x) / 2;
          const midY = (nodes[i].y + nodes[j].y) / 2 + (Math.random() * 100 - 50);
          connections.push({
            path: `M ${nodes[i].x} ${nodes[i].y} Q ${midX} ${midY} ${nodes[j].x} ${nodes[j].y}`,
            delay: Math.random() * 2
          });
        }
      }
    }
    return connections;
  };

  const nodes = generateNodes();
  const connections = generateConnections(nodes);

  return (
    <motion.svg
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="neural-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {connections.map((conn, i) => (
        <NeuralConnection key={`conn-${i}`} path={conn.path} delay={conn.delay} />
      ))}

      {nodes.map((node, i) => (
        <NeuralNode key={`node-${i}`} cx={node.x} cy={node.y} />
      ))}
    </motion.svg>
  );
};

const App = () => {
  return (
    <div className="relative">
      <NeuralBackground />

      {/* Social Links Sidebar - hidden on small devices */}
      <div className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-4 p-2 bg-black/40 rounded-md">
          <a
            href="https://github.com/aman696"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6 hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/aman-chaturvedi-690922229"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      </div>

      <main className="relative z-10 min-h-screen bg-hero-bg bg-opacity-50">
        <Header />
        <HeroSection />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
