import { useEffect, useState } from "react";

function WindowResizeTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let deviceType = "Desktop";
  if (size.width < 768) deviceType = "Mobile";
  else if (size.width <= 1024) deviceType = "Tablet";

  return (
    <div>
      <h3>Window Resize Tracker</h3>
      <p>
        {size.width} x {size.height}
      </p>
      <strong>{deviceType}</strong>
    </div>
  );
}

export default WindowResizeTracker;
