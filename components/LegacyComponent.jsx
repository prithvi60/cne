"use client";

import { useEffect } from "react";
import Legacy from "./Legacy";
import { useInView } from "react-intersection-observer";

const LegacyComponent = ({ handleIntersection }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    handleIntersection("Legacy", inView);
  }, [inView, handleIntersection]);

  return (
    <div id="Legacy" ref={ref}>
      <Legacy ref={ref} />
    </div>
  );
};

export default LegacyComponent;
