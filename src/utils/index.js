export const convertSecondsToHHMMSS = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const hourRemainder = timeInSeconds % 3600;
  const minutes = Math.floor(hourRemainder / 60);
  const seconds = timeInSeconds - hours * 3600 - minutes * 60;

  const paddedHours = `${hours}`.padStart(2, 0);
  const paddedMins = `${minutes}`.padStart(2, 0);
  const paddedSecs = `${seconds}`.padStart(2, 0);

  return `${paddedHours}:${paddedMins}:${paddedSecs}`;
};
