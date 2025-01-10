import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type Props<T extends string> = {
  options: T[];
  size?: "small" | "large";
  value: T;
  onChange: (_: React.MouseEvent<HTMLElement>, newAlignment: string) => void;
};

function Toggle<T extends string>({
  options,
  size,
  value,
  onChange,
}: Props<T>) {
  return (
    <ToggleButtonGroup value={value} exclusive onChange={onChange} size={size}>
      {options.map((option) => (
        <ToggleButton
          color="secondary"
          key={option}
          value={option}
          sx={{
            textTransform: "capitalize",
          }}
        >
          {option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default Toggle;
