import { Avatar, Text, Button, Paper } from "@mantine/core";
import { useRouter } from "next/router";

export function UserProfile({ avatar, geo, pref, diet }) {
  const router = useRouter();

  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={avatar} size={120} radius={120} mx="auto" />

      <Text ta="center" c="dimmed" fz="sm">
        🌏: {geo}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        🍴: {pref}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        💪: {diet}
      </Text>

      <Button
        onClick={(e) => {
          e.preventDefault();
          router.push("/edit", null, { shallow: true });
        }}
        variant="default"
        fullWidth
        mt="md"
      >
        Edit Profile
      </Button>
    </Paper>
  );
}
