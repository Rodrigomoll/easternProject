import { useState } from "react";
import { works } from "../data/works";

export default function WorkList() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={{ backgroundColor: "#f4f3ed", color: "#171717", minHeight: "100vh" }}>
      {works.map((w, index) => {
        const isEven = index % 2 === 1;

        return (
          <section
            key={w.id}
            onMouseEnter={() => setHoveredId(w.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              borderTop: "1px solid #171717",
              padding: "120px 20px",
              alignItems: "center",
              position: "relative",
              zIndex: hoveredId === w.id ? 50 : 1,
              transition: "z-index 0s"
            }}
          >
            <div style={{ 
              gridColumn: isEven ? "7 / span 5" : "2 / span 5", 
              position: "relative", 
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent"
            }}>
              <a 
                href={w.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: "contents" }}
              >
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

            <div style={{ 
              gridColumn: isEven ? "2 / span 4" : "8 / span 4", 
              textAlign: isEven ? "left" : "right",
              zIndex: 5 
            }}>
              <div style={{ fontSize: "14px", marginBottom: "15px", opacity: 0.5, fontWeight: "500" }}>
                {w.id.toString().padStart(2, '0')}
              </div>
              
              <div style={{ 
                position: "relative", 
                height: "1.2em", 
                overflow: "hidden", 
                fontSize: "clamp(30px, 5vw, 70px)", 
                fontWeight: "700",
                textTransform: "uppercase",
                lineHeight: "1"
              }}>
                <div style={{
                  transition: "transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)",
                  transform: hoveredId === w.id ? "translateY(-100%)" : "translateY(0%)"
                }}>
                  {w.title}
                </div>
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
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