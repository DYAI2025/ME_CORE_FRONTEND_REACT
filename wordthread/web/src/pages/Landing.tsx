import { Link } from 'react-router-dom';

// Placeholder for the shader gradient background
const ShaderGradientBackground = () => {
  return <div className="absolute top-0 left-0 w-full h-full bg-background -z-10"></div>;
};

const Landing = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen text-center bg-background text-text">
      <ShaderGradientBackground />
      <h1 className="text-6xl font-bold">WordThread</h1>
      <p className="mt-4 text-xl">Placeholder text for the subtitle.</p>
      <Link to="/analyze">
        <button className="px-8 py-4 mt-8 font-bold rounded-lg bg-accent text-background hover:bg-yellow-400 transition-colors">
          Analyse starten
        </button>
      </Link>
    </div>
  );
};

export default Landing;
