const getDuration = (runTime: number) => {
  const hour = Math.floor(runTime / 60);
  const minute = runTime - hour * 60;
  return `${hour}h ${minute}m`;
};

export default getDuration;
