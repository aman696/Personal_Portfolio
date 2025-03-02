import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

/* ----------------------------------------------------------------
   NeuralConnection, NeuralNode, and NeuralBackground
   ---------------------------------------------------------------- */
const NeuralConnection = ({ path, delay }: { path: string; delay: number }) => (
  <motion.path
    d={path}
    stroke="#00ffff"
    strokeWidth="0.5"
    strokeOpacity="0.3"
    fill="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.3 }}
    transition={{
      duration: 2.5,
      delay,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }}
  />
);

const NeuralNode = ({ cx, cy }: { cx: number; cy: number }) => (
  <motion.circle
    cx={cx}
    cy={cy}
    r="2"
    fill="#f08c00"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }}
  />
);

const NeuralBackground = () => {
  const generateNodes = () => {
    const nodes = [];
    const count = 100; // Adjust number of nodes
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      });
    }
    return nodes;
  };

  const generateConnections = (nodes: Array<{ x: number; y: number }>) => {
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.93) {
          const midX = (nodes[i].x + nodes[j].x) / 2;
          const midY =
            (nodes[i].y + nodes[j].y) / 2 + (Math.random() * 100 - 50);
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
      className="absolute inset-0 w-full h-full z-0"
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
    >
      <defs>
        <filter id="neural-glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {nodes.map((node, i) => (
        <NeuralNode key={i} cx={node.x} cy={node.y} />
      ))}

      {connections.map((conn, i) => (
        <NeuralConnection key={i} path={conn.path} delay={conn.delay} />
      ))}
    </motion.svg>
  );
};

/* ----------------------------------------------------------------
   Main HeroSection Component
   ---------------------------------------------------------------- */
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-4 relative overflow-hidden">
      {/* Neural Background */}
      <NeuralBackground />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-6"
        >
          {/* Header: Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-gradient">
            Aman Chaturvedi
          </h1>

          {/* Subheader: Brief Tagline + Type Animation */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            <TypeAnimation
              sequence={[
                'AI Developer & Automation Specialist',
                3000,
                'Crafting AI-Driven Innovations',
                3000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </h2>

          {/* Description Paragraph */}
          <Tilt perspective={500} glareEnable={true} glareMaxOpacity={0.25} scale={1.02}>
            <motion.div
              className="glass-card p-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-base md:text-lg text-hero-text">
                I’m a passionate software developer specializing in AI-driven 
                solutions and automation workflows. My projects blend cutting-edge 
                technologies—like TensorFlow, Flask, and React—to deliver scalable, 
                user-centric products. From advanced image detection systems to 
                efficient automation pipelines, I thrive on building solutions that 
                make a real impact.
              </p>
            </motion.div>
          </Tilt>

          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="mt-4 py-2 px-6 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 shadow-lg">
              View My Work
            </button>
          </motion.div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-left space-y-6"
>
  <Tilt perspective={500} glareEnable={true} glareMaxOpacity={0.25} scale={1.02}>
    <motion.div
      className="glass-card p-6 hover-lift"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <p className="text-2xl font-medium text-gradient">AI Image Detection & Analysis</p>
      <p className="text-base text-hero-text">Built a real-time object detection system with TensorFlow.</p>
    </motion.div>
  </Tilt>
  <Tilt perspective={500} glareEnable={true} glareMaxOpacity={0.25} scale={1.02}>
    <motion.div
      className="glass-card p-6 hover-lift"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <p className="text-2xl font-medium text-gradient">Software Developer Intern @ Quant Scientist</p>
      <p className="text-base text-hero-text">Developed scalable backend solutions using Flask.</p>
    </motion.div>
  </Tilt>
  <Tilt perspective={500} glareEnable={true} glareMaxOpacity={0.25} scale={1.02}>
    <motion.div
      className="glass-card p-6 hover-lift"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <p className="text-2xl font-medium text-gradient">Automation Tools & Workflows</p>
      <p className="text-base text-hero-text">Designed a Python-based pipeline to automate 40% of tasks.</p>
    </motion.div>
  </Tilt>
</motion.div>
      </div>

      {/* Floating tech stack icons */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        {['python', 'tensorflow', 'react', 'flask'].map((tech, index) => (
          <motion.img
            key={tech}
            src={`/${tech}-icon.svg`}
            alt={tech}
            className="w-10 h-10 animate-float"
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
