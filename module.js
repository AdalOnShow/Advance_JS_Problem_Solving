function calculateCircleArea(radius) {
  if (radius <= 0) {
    return "Radius must be greater than zero.";
  }
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

export { calculateCircleArea };
