import { useState } from "react";
import { useReactFlow } from "reactflow";

export function useZoom() {
  const rf = useReactFlow();
  const [scale, setScale] = useState(1);

  // zoom to a new scale around center
  const setZoom = (newScale: number) => {
    setScale(newScale);
    rf.zoomTo(newScale);
  };

  const zoomIn = () => setZoom(Math.min(scale + 0.1, 2));
  const zoomOut = () => setZoom(Math.max(scale - 0.1, 0.2));

  return { scale, setScale: setZoom, rf, zoomIn, zoomOut };
}
