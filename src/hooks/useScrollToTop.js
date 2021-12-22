export const useScrollToTop = () => {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrome etc.
};
