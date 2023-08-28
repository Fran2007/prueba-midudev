import { useState } from "react";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"}
        </button>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
}

export default Accordion;
