export const formatDateTime = (date) => {
  return new Date(date).toLocaleString("en-US", {
    month: "short",
    date: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

export const getTimeRange = (value) => {
  const now = new Date();
  let startTime = "";
  let endTime = "";

  switch (value) {
    case "current-hour":
      startTime = new Date(now.setMinutes(0, 0, 0));
      endTime = new Date(now.setMinutes(59, 59, 999));
      break;
    case "last-hour":
      startTime = new Date(now.setHours(now.getHours() - 1, 0, 0, 0));
      endTime = new Date(now.setMinutes(59, 59, 999));
      break;
    case "last-2-hour":
      startTime = new Date(now.setHours(now.getHours() - 2, 0, 0, 0));
      endTime = new Date(now.setMinutes(59, 59, 999));
      break;
    // Add cases for other time ranges
    case "today":
      startTime = new Date(now.setHours(0, 0, 0, 0));
      endTime = new Date(now.setHours(23, 59, 59, 999));
      break;
    case "yesterday":
      startTime = new Date(
        new Date(now.setDate(now.getDate() - 1)).setHours(0, 0, 0, 0)
      );
      endTime = new Date(
        new Date(now.setDate(now.getDate() - 1)).setHours(23, 59, 59, 999)
      );
      break;
    default:
      startTime = "";
      endTime = "";
  }

  return {
    startTime: startTime ? formatDateTime(startTime) : "",
    endTime: endTime ? formatDateTime(endTime) : "",
  };
};
