export const scale360 = (value: number, outMin: number, outMax: number) => {
  const inMin = 0;
  const inMax = 360;
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
