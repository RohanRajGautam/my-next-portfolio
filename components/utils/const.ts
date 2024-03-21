// Calculate the years of experience based on the start date (May 2020) and the current date
const startDate = new Date('2020-05-01');
const currentDate = new Date();
const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
const diffInYears = diffInMilliseconds / (1000 * 3600 * 24 * 365.25);

// Round the years of experience up to the nearest integer
const yearsOfExperience = Math.ceil(diffInYears);

// Define the constant
export const YEARS_OF_EXPERIENCE: number = yearsOfExperience;
