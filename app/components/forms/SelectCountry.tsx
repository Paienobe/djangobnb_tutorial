"use client";
import Select from "react-select";
import useCountries from "@/app/hooks/useCountries";

export type SelectCountryValue = {
  label: string;
  value: string;
};

interface SelectCountryProps {
  value: SelectCountryValue | undefined;
  onChange: (value: SelectCountryValue) => void;
}

const SelectCountry = ({ value, onChange }: SelectCountryProps) => {
  const { getAll } = useCountries();
  return (
    <>
      <Select
        isClearable
        placeholder="Anywhere"
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as SelectCountryValue)}
      />
    </>
  );
};

export default SelectCountry;
