import { useEffect, useRef, useState, RefObject, MutableRefObject } from "react";

interface UseIntersectionOptions {
  root?: Element | null;
  threshold?: number | number[];
  rootMargin?: string;
  disposable?: boolean;
}

interface UseIntersectionReturn<T extends Element> {
  isIntersecting: boolean;
  refElement: RefObject<T>;
  setElement: (el: T | null) => void;
}

/**
 * Custom hook to detect whether an element is visible in the viewport.
 *
 * @param options - Options for the Intersection Observer.
 * @returns Status of intersection and element reference.
 */
export const useIntersection = <T extends Element>({
  root = null,
  threshold = 0,
  rootMargin = "0px",
  disposable = false,
}: UseIntersectionOptions = {}): UseIntersectionReturn<T> => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [stateElement, setElement] = useState<T | null>(null);
  const refElement = useRef<T>(null);

  useEffect(() => {
    const element = stateElement || refElement.current;
    if (!element) return;

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);

      if (entry.isIntersecting && disposable) {
        observer.unobserve(entry.target);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root,
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [stateElement, root, threshold, rootMargin, disposable]);

  return { isIntersecting, refElement, setElement };
};
