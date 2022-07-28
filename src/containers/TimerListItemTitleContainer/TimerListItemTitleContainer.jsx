import { Badge, Group, Input, Title } from "@mantine/core";
import { useAtom } from "jotai";
import { memo, useMemo, useState } from "react";

export const TimerListItemTitleContainer = memo(({ titleAtom, statusAtom }) => {
  const [title, setTitle] = useAtom(titleAtom);
  const [status] = useAtom(statusAtom);
  const [isEditable, setIsEditable] = useState(true);
  const gradient = useMemo(() => {
    if (status === "Paused") {
      return { from: "#ed6ea0", to: "#ec8c69", deg: 35 };
    } else if (status === "In Progress") {
      return { from: "indigo", to: "cyan" };
    } else if (status === "Done") {
      return { from: "teal", to: "lime", deg: 105 };
    } else {
      return { from: "teal", to: "blue", deg: 60 };
    }
  }, [status]);
  return (
    <Group onClick={() => setIsEditable(!isEditable)}>
      <Badge variant="gradient" gradient={gradient}>
        {status}
      </Badge>
      {isEditable ? (
        <Input
          type="text"
          autoFocus={true}
          variant="default"
          value={title}
          onChange={(e) => {
            const text = e?.target?.value;
            setTitle(text);
          }}
          onBlur={() => setIsEditable(false)}
        />
      ) : (
        <Title order={4} sx={{ cursor: "pointer" }}>
          {title}
        </Title>
      )}
    </Group>
  );
});

TimerListItemTitleContainer.displayName = "TimerListItemTitleContainer";
