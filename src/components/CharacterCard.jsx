import React, { useState } from 'react';
import styles from './CharacterCard.module.css';

const StarIcon = () => (
  <svg width="12" height="12" fill="#f5c518" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const CommentIcon = () => (
  <svg width="12" height="12" fill="#888" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);

const CharacterCard = ({ character, onAction }) => {
  const [imgError, setImgError] = useState(false);

  // Show only first 2 tags + extra count
  const displayTags = character.tags.slice(0, 2);
  const remainingTags = character.tags.length - 2 + (character.extraTags || 0);

  return (
    <div className={styles.card} onClick={onAction}>
      {/* Character Image */}
      <div className={styles.imageWrapper}>
        <img
          src={imgError ? `https://picsum.photos/seed/${character.id}/300/400` : character.image}
          alt={character.name}
          className={styles.image}
          onError={() => setImgError(true)}
        />
        {/* Gradient overlay */}
        <div className={styles.gradient} />

        {/* NSFW badge */}
        {character.nsfw && <span className={styles.nsfwBadge}>NSFW</span>}

        {/* Bottom info overlay */}
        <div className={styles.infoOverlay}>
          <h3 className={styles.name}>{character.name}</h3>
          <p className={styles.username}>{character.username}</p>
          {character.bio && <p className={styles.bio}>{character.bio}</p>}

          {/* Tags */}
          <div className={styles.tags}>
            {displayTags.map((tag) => (
              <span key={tag} className={`${styles.tag} ${tag === 'NSFW' ? styles.nsfwTag : ''}`}>
                {tag}
              </span>
            ))}
            {remainingTags > 0 && (
              <span className={styles.tag}>+{remainingTags}</span>
            )}
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <span className={styles.stat}>
              <CommentIcon /> {character.comments}
            </span>
            <span className={styles.stat}>
              <StarIcon /> {character.rating.toFixed(1)} ({character.ratingCount})
            </span>
          </div>
        </div>
      </div>

      {/* Chat Button - shown on hover via CSS */}
      <button className={styles.chatBtn} onClick={(e) => { e.stopPropagation(); onAction(); }}>
        💬 Chat
      </button>
    </div>
  );
};

export default CharacterCard;
