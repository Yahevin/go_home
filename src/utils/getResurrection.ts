const hour = 3600 * 1000; // в миллисекундах

// delay - время, прошедшее с начала; level - масса в кг;
export const getResurrection = (delay: number, level: number) => {
  const speed = 0.15; // средняя скорость нейтрализации в час
  return speed * (delay / hour) * level; // масса чистого спирта
};
