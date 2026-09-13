import { TechLogo } from './TechLogos';

export const TechCard = ({ tech, isSelected, onAddStack }) => {
  const { name, category, badge, badgeType, description, difficulty, rating, icon } = tech;

  return (
    <div className={`tech-card ${isSelected ? 'selected' : ''}`}>
      <div className="tech-card-header">
        <div className="tech-icon-wrapper">
          <TechLogo type={icon} size={32} />
        </div>
        {badge && (
          <span className={`badge-pill badge-${badgeType || 'blue'}`}>
            {badge}
          </span>
        )}
      </div>

      <div className="tech-card-body">
        <h3 className="tech-card-title">{name}</h3>
        <p className="tech-card-desc">{description}</p>
      </div>

      <div className="tech-card-footer">
        <div className="tech-card-tags">
          <span className="tag-pill">{category}</span>
          <span className="tag-pill">{difficulty}</span>
        </div>
        <div className="tech-card-rating">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span className="rating-value">{rating}</span>
        </div>
      </div>

      <button 
        className={`btn-add-stack ${isSelected ? 'in-stack' : ''}`}
        onClick={() => onAddStack(tech)}
        disabled={isSelected}
      >
        {isSelected ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            ✓ Added to Stack
          </>
        ) : (
          'Add to Stack'
        )}
      </button>
    </div>
  );
};