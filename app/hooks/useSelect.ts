import { useState } from "react";

export const useSelect = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};
