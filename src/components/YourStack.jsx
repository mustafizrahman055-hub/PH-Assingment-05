import { TechLogo } from './TechLogos';

export const YourStack = ({ selectedStack, onRemoveTech, onClearAll }) => {
  const count = selectedStack.length;

  return (
    <aside className="your-stack-sidebar">
      <div className="your-stack-card">
        <div className="your-stack-header">
          <h2 className="your-stack-title">Your Stack</h2>
          <p className="your-stack-subtitle">
            {count === 0 
              ? 'No technologies selected yet.' 
              : `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected`}
          </p>
        </div>

        {count === 0 ? (
          <div className="your-stack-empty-box">
            <p className="empty-text">Your stack is empty.</p>
          </div>
        ) : (
          <div className="your-stack-content">
            <div className="selected-items-list">
              {selectedStack.map((tech) => (
                <div key={tech.id} className="selected-item-card">
                  <div className="selected-item-info">
                    <div className="selected-item-logo">
                      <TechLogo type={tech.icon} size={28} />
                    </div>
                    <div className="selected-item-details">
                      <h4 className="selected-item-name">{tech.name}</h4>
                      <span className="selected-item-category">{tech.category}</span>
                    </div>
                  </div>
                  <button 
                    className="btn-remove-item"
                    onClick={() => onRemoveTech(tech.id)}
                    aria-label={`Remove ${tech.name} from stack`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <button className="btn-remove-all" onClick={onClearAll}>
              Remove All
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
