export const dateFormatter = (date) => {
  // 2022-05-28T20:00

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return `${day}.${month}.${year}`;
};

export const getTime = (date) => {
  return date.slice(11, 16);
};

export const sortByDate = (entries) => {
  const sorted = [];
  entries.map((entry) => {
    if (sorted.some((el) => el.date.slice(5, 7) < entry.date.slice(5, 7)))
      return sorted.push(entry);
    if (sorted.some((el) => el.date.slice(8, 10) < entry.date.slice(8, 10)))
      return sorted.push(entry);
    else sorted.unshift(entry);

    return entry;
  });
  const sortedAfterToday = [];
  sorted.forEach((el, i) => {
    const date = new Date(el.date);
    const now = new Date();
    if (date - now >= 0) sortedAfterToday.push(el);
    console.log(date - now);
  });

  return sortedAfterToday;
};
