import { Input, Title } from "@mantine/core";

export const Timer = ({
  time,
  formattedTime,
  isEditable,
  setIsEditable,
  onChange,
}) => {
  return isEditable ? (
    <Input
      type="number"
      onBlur={() => setIsEditable(false)}
      value={time}
      onChange={onChange}
      placeholder="Type value in seconds"
    />
  ) : (
    <Title
      order={2}
      onClick={() => setIsEditable(true)}
      sx={{ cursor: "pointer" }}
    >
      {formattedTime}
    </Title>
  );
};
