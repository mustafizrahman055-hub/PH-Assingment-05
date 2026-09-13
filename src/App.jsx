import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechCard } from './components/TechCard';
import { YourStack } from './components/YourStack';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStack, setSelectedStack] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch technology data');
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading JSON data:', err);
        setLoading(false);
      });
  }, []);

  const handleAddStack = (tech) => {
    const isAlreadySelected = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadySelected) {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: 'bottom-right',
        autoClose: 2500,
      });
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'bottom-right',
      autoClose: 2000,
    });
  };

  const handleRemoveTech = (techId) => {
    const techToRemove = selectedStack.find((item) => item.id === techId);
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId));
    if (techToRemove) {
      toast.info(`Removed ${techToRemove.name} from your stack.`, {
        position: 'bottom-right',
        autoClose: 2000,
      });
    }
  };

  const handleClearAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.warn('Cleared all technologies from your stack.', {
      position: 'bottom-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="devstack-app">
      <Navbar />
      <Hero />

      <main className="container" id="technologies">
        <div className="section-header">
          <h2 className="section-title">
            Explore the <span className="text-pink">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Pick technologies to build your ideal development stack.
          </p>
        </div>

        <div className="main-content-layout">
          {loading ? (
            <div className="loading-container" aria-live="polite">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading technologies...</p>
            </div>
          ) : (
            <div className="tech-grid">
              {technologies.map((tech) => {
                const isSelected = selectedStack.some((item) => item.id === tech.id);
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isSelected={isSelected}
                    onAddStack={handleAddStack}
                  />
                );
              })}
            </div>
          )}

          <YourStack
            selectedStack={selectedStack}
            onRemoveTech={handleRemoveTech}
            onClearAll={handleClearAll}
          />
        </div>
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
