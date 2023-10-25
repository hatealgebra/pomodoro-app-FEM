export const getReadableTime = (totalSeconds: EpochTimeStamp) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');

  const readableTime = `${paddedMinutes}:${paddedSeconds}`;
  console.log(readableTime);

  return readableTime;
};
