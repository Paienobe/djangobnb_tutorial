"use client";

import countries from "world-countries";

const formattedCountries = countries.map((country) => {
  return { value: country.cca2, label: country.name.common };
});

const useCountries = () => {
  const getAll = () => formattedCountries;
  const getByValue = (value: string) => {
    return formattedCountries.find((item) => {
      return item.value === value;
    });
  };
  return { getAll, getByValue };
};

export default useCountries;
