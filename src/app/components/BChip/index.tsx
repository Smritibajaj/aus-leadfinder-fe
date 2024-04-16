import { Chip } from "@mui/material";

const BChip = (props: any) => {
    const { label, color, backgroundColor, variant } = props;
  return (
    <Chip
      label={label}
      color={color}
      variant={variant}
      sx={{ backgroundColor: backgroundColor, borderRadius: "8px" }}
    />
  );
};

export default BChip;
