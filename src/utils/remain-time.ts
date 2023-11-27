const getRemainTime = (timeLeft: number) => {
  const hours = Math.floor(timeLeft / 60 / 60);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = Math.floor(timeLeft % 60);
  if (hours) {
    return `-${hours}:${minutes}:${seconds}`;
  }
  return `-${minutes}:${seconds}`;
};

export default getRemainTime;
