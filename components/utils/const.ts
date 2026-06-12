// Career start: May 2020. Completed years only - "6+", never rounded up.
const startDate = new Date('2020-05-01');
const diffInYears =
  (Date.now() - startDate.getTime()) / (1000 * 3600 * 24 * 365.25);

export const YEARS_OF_EXPERIENCE: number = Math.floor(diffInYears);
