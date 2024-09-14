import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useUrlHash() {
  const params = useParams();
  const [hash, setHash] = useState();

  useEffect(() => {
    setHash((h) => (!window.location.hash !== h ? window.location.hash : h));
  }, [params]);

  useEffect(() => {
    const anchor = hash && document.querySelector(hash);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0]?.isIntersecting) {
          // console.log("update URL", window.location.hash);
          // history.replaceState(
          //   null,
          //   document.title,
          //   location.pathname + location.search,
          // );
        }
      },
      { threshold: 1 },
    );

    if (anchor) {
      observer.observe(anchor);
    }

    return () => {
      if (anchor) {
        observer.unobserve(anchor);
      }
    };
  }, [hash]);

  return hash;
}
