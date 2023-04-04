import { useForm } from "@mantine/form";
import {
  TextInput,
  NumberInput,
  Switch,
  Group,
  ActionIcon,
  Box,
  Text,
  Button,
  Code,
  Title,
  Select,
} from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";

export default function Demo() {
  const form = useForm({
    initialValues: {
      employees: [{ name: "", amount: 0, key: randomId() }],
    },
  });

  const fields = form.values.employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="Ingredient"
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <NumberInput
        placeholder="amount in grams"
        defaultValue={0}
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`employees.${index}.amount`)}
      />

      <ActionIcon
        color="red"
        onClick={() => form.removeListItem("employees", index)}
      >
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  return (
    <div>
      <Box maw={500} mx="auto">
        <Title order={3}>Enter your ingredients 🧂</Title>

        {fields.length > 0 ? (
          <Group>
            <Text weight={500} size="sm" sx={{ flex: 1 }}>
              Name
            </Text>
            <Text weight={500} size="sm" pr={90}>
              Amount (in grams)
            </Text>
          </Group>
        ) : (
          <Text color="dimmed" align="center">
            No ingredients here...
          </Text>
        )}

        {fields}

        <Group position="center" mt="md">
          <Button
            onClick={() =>
              form.insertListItem("employees", {
                name: "",
                active: false,
                key: randomId(),
              })
            }
            variant="outline"
          >
            Add Ingredient
          </Button>
        </Group>

        <Select
          label="Type of Meal 🍴"
          placeholder="Pick one"
          data={[
            { value: "breakfast", label: "Breakfast 🍊" },
            { value: "lunch", label: "Lunch 🍚" },
            { value: "dinner", label: "Dinner 🍕" },
            { value: "snacks", label: "Snacks 🌮" },
          ]}
        />

        <NumberInput
          label="Cook Time (in minutes) ⏲️"
          min={0}
          defaultValue={0}
        />

        <Group position="center" mt="md">
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
          >
            Suggest Recipes
          </Button>
        </Group>

        {/* <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code> */}
      </Box>
    </div>
  );
}
