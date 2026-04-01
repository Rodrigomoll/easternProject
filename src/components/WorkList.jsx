import { useState } from "react";
import { works } from "../data/works";
import styles from "../styles/WorkList.module.css"; // CSSの読み込み

export default function WorkList() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className={styles.container}>
      {works.map((w, index) => {
        const isEven = index % 2 === 1;

        return (
          <section
            key={w.id}
            onMouseEnter={() => setHoveredId(w.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={styles.section}
            style={{ zIndex: hoveredId === w.id ? 50 : 1 }}
          >
            {/* Image Section */}
            <div 
              className={styles.imageWrapper}
              style={{ gridColumn: isEven ? "7 / span 5" : "2 / span 5" }}
            >
              <a href={w.url} target="_blank" rel="noopener noreferrer" style={{ display: "contents" }}>
                <img
                  src={w.image}
                  alt={w.title}
                  style={{
                    filter: hoveredId === w.id ? "grayscale(0)" : "grayscale(1)",
                    width: hoveredId === w.id ? "auto" : "100%",
                    height: hoveredId === w.id ? "80vh" : "100%",
                    maxWidth: hoveredId === w.id ? "90vw" : "100%",
                    objectFit: "cover",
                    position: "absolute",
                    zIndex: hoveredId === w.id ? 100 : 1,
                    transition: "all 0.8s cubic-bezier(0.19, 1, 0.22, 1)",
                    boxShadow: hoveredId === w.id ? "0 60px 120px rgba(0,0,0,0.3)" : "none",
                    cursor: "pointer"
                  }}
                />
              </a>
            </div>

            {/* Text Section */}
            <div 
              className={styles.textWrapper}
              style={{ 
                gridColumn: isEven ? "2 / span 4" : "8 / span 4", 
                textAlign: isEven ? "left" : "right" 
              }}
            >
              <div className={styles.indexNumber}>
                {w.id.toString().padStart(2, '0')}
              </div>
              
              <div className={styles.titleContainer}>
                {/* Rolling Text Layer 1 */}
                <div style={{
                  transition: "transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)",
                  transform: hoveredId === w.id ? "translateY(-100%)" : "translateY(0%)"
                }}>
                  {w.title}
                </div>
                {/* Rolling Text Layer 2 */}
                <div style={{
                  position: "absolute", top: "100%", left: 0, width: "100%",
                  transition: "transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)",
                  transform: hoveredId === w.id ? "translateY(-100%)" : "translateY(0%)"
                }}>
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