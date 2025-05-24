import { useEffect } from "react";
import { useIntersection } from "@/hooks/useIntersection";
import useIntersectionStore from "@/store/intersectionStore";

export const useSyncedIntersection = ({threshold = 0.4, rootMargin=""}:{threshold:number, rootMargin?:string}) => {
  const { refElement, isIntersecting } = useIntersection<HTMLDivElement>({ threshold, rootMargin });
  const { setRefElement, setIsIntersecting } = useIntersectionStore();

  useEffect(() => {
    setRefElement(refElement.current);
    setIsIntersecting(isIntersecting);
  }, [refElement, isIntersecting, setRefElement, setIsIntersecting]);

  return { refElement, isIntersecting }; // opsional kalau kamu masih mau pakai di komponen
};
