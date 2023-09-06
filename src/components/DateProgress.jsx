export default function DateProgress({ startDate, endDate }) {
  const now = new Date();
  let progress = 0;

  if (now >= startDate) {
    if (now >= endDate) {
      progress = 100;
    } else {
      const totalDuration = endDate - startDate;
      const elapsedDuration = now - startDate;

      progress = Math.floor((elapsedDuration / totalDuration) * 100);
    }
  }

  const formatDate = (date) => {
    return date.toLocaleString(undefined, {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="text-xs">
      {formatDate(startDate)}
      <progress
        className="progress progress-primary w-2/5 mx-2"
        value={progress}
        max="100"
      />
      {formatDate(endDate)}
    </div>
  );
}
