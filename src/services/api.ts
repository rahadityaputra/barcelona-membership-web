// src/services/api.ts

export const fetchData = async (endpoint: string) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetching data from ${endpoint}`);
      resolve({ message: `Data from ${endpoint}` });
    }, 500);
  });
};