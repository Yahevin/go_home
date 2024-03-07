const hour = 3600 * 1000; // в миллисекундах

export const getResurrection = (delay: number, level: number) => {
  const speed = 0.15; // средняя скорость нейтрализации в час
  return speed * (delay / hour) * level; // масса чистого спирта
};
