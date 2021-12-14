const getRandom = (arr) => {
  const random = arr[Math.floor(Math.random() * arr.length)];
  return random;
};

export { getRandom };
