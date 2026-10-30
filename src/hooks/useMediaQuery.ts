import { useSyncExternalStore } from "react";

// Returns true while the media query matches, and updates when it changes.
// Used to skip heavy decorative animation on phones and for reduced-motion visitors.
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (notify) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", notify);
      return () => mq.removeEventListener("change", notify);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}