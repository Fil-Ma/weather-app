import { useState } from "react";

const options = ["celsius", "fahrenheit"];

const useUnitsToggle = () => {
  const [unit, setUnit] = useState<(typeof options)[number]>(options[0]);

  const onChange = (_: React.MouseEvent<HTMLElement>, newUnit: string) => {
    setUnit(newUnit);
  };

  return {
    unit,
    options,
    onChange,
  };
};

export default useUnitsToggle;
