import { useState } from "react";
import { works } from "../data/works";

export default function WorkList() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div>
        {works.map((w) => (
          <div
            key={w.id}
            onMouseEnter={() => setActive(w.image)}
            onMouseLeave={() => setActive(null)}
          >
            {w.title}
          </div>
        ))}
      </div>

      <div style={{ width: "400px", height: "400px" }}>
        {active && <img src={active} alt="" style={{ width: "100%" }} />}
      </div>
    </div>
  );
}