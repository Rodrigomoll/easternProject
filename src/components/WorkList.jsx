import { useState } from "react";
import { works } from "../data/works";
import styles from "../styles/WorkList.module.css";

export default function WorkList() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className={styles.container}>
      {works.map((w, index) => {
        const isHovered = hoveredId === w.id;
        const isEven = index % 2 === 1;

        const imageStyle = {
          filter: isHovered ? "grayscale(0)" : "grayscale(1)",
          width: isHovered ? "auto" : "100%",
          height: isHovered ? "80vh" : "100%",
          maxWidth: isHovered ? "90vw" : "100%",
          zIndex: isHovered ? 100 : 1,
          boxShadow: isHovered ? "0 60px 120px rgba(0,0,0,0.3)" : "none",
        };

        const textTransform = {
          transform: isHovered ? "translateY(-100%)" : "translateY(0%)",
        };

        return (
          <section
            key={w.id}
            onMouseEnter={() => setHoveredId(w.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={styles.section}
            style={{ zIndex: isHovered ? 50 : 1 }}
          >
            <div 
              className={styles.imageWrapper} 
              style={{ gridColumn: isEven ? "7 / span 5" : "2 / span 5" }}
            >
              <a href={w.url} target="_blank" rel="noopener noreferrer" style={{ display: "contents" }}>
                <img 
                  src={w.image} 
                  alt={w.title} 
                  className={styles.mainImage} 
                  style={imageStyle} 
                />
              </a>
            </div>

            <div 
              className={styles.textWrapper} 
              style={{ 
                gridColumn: isEven ? "2 / span 4" : "8 / span 4", 
                textAlign: isEven ? "left" : "right" 
              }}
            >
              <div className={styles.indexNumber}>
                {w.id.toString().padStart(2, "0")}
              </div>
              <div className={styles.titleContainer}>
                <div className={styles.rollingText} style={textTransform}>
                  {w.title}
                </div>
                <div 
                  className={`${styles.rollingText} ${styles.absoluteText}`} 
                  style={textTransform}
                >
                  {w.title}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}