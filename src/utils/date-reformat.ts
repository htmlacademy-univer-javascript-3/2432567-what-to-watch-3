import dayjs from 'dayjs';

const humanizeFormate = (date: string) => dayjs(date).format('MMMM DD, YYYY');

const durationFormate = (runTime: number) => {
  const hour = Math.floor(runTime / 60);
  const minute = runTime - hour * 60;
  return `${hour}h ${minute}m`;
};

export { humanizeFormate, durationFormate };
