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
  const sorted = entries.sort((a, b) => new Date(a.date) - new Date(b.date));

  const sortedAfterToday = [];
  sorted.forEach((el, i) => {
    const date = new Date(el.date);
    const now = new Date();
    if (date - now >= 0) sortedAfterToday.push(el);
  });

  return sortedAfterToday;
};

export const sortedByDateKeepAll = (entries) => {
  return entries.sort((a, b) => new Date(b.date) - new Date(a.date));
};
