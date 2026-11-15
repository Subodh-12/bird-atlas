import { useEffect, useState } from "react";

export function useCurrentHash() {
  const [currentHash, setCurrentHash] = useState(
    () => window.location.hash || "#catalogue",
  );

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash || "#catalogue");
    };

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return currentHash;
}
