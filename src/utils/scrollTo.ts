export const scrollTo = (node: HTMLElement | null) => {
  setTimeout(() => {
    node?.scrollIntoView({ behavior: 'smooth' });
  }, 0);
};
