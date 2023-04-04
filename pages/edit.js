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
        placeholder="John Doe"
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <NumberInput
        placeholder="amount in grams"
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
        <Title order={3}>Enter your details 🕵️</Title>

        <Select
          label="Geographic Location 🌏"
          searchable
          placeholder="Pick one"
          data={[
            { value: "afghanistan", label: "🇦🇫 Afghanistan" },
            { value: "albania", label: "🇦🇱 Albania" },
            { value: "algeria", label: "🇩🇿 Algeria" },
            { value: "andorra", label: "🇦🇩 Andorra" },
            { value: "angola", label: "🇦🇴 Angola" },
            { value: "antigua-and-barbuda", label: "🇦🇬 Antigua & Barbuda" },
            { value: "argentina", label: "🇦🇷 Argentina" },
            { value: "armenia", label: "🇦🇲 Armenia" },
            { value: "australia", label: "🇦🇺 Australia" },
            { value: "austria", label: "🇦🇹 Austria" },
            { value: "azerbaijan", label: "🇦🇿 Azerbaijan" },
            { value: "bahamas", label: "🇧🇸 Bahamas" },
            { value: "bahrain", label: "🇧🇭 Bahrain" },
            { value: "bangladesh", label: "🇧🇩 Bangladesh" },
            { value: "barbados", label: "🇧🇧 Barbados" },
            { value: "belarus", label: "🇧🇾 Belarus" },
            { value: "belgium", label: "🇧🇪 Belgium" },
            { value: "belize", label: "🇧🇿 Belize" },
            { value: "benin", label: "🇧🇯 Benin" },
            { value: "bhutan", label: "🇧🇹 Bhutan" },
            { value: "bolivia", label: "🇧🇴 Bolivia" },
            {
              value: "bosnia-and-herzegovina",
              label: "🇧🇦 Bosnia & Herzegovina",
            },
            { value: "botswana", label: "🇧🇼 Botswana" },
            { value: "brazil", label: "🇧🇷 Brazil" },
            { value: "brunei", label: "🇧🇳 Brunei" },
            { value: "bulgaria", label: "🇧🇬 Bulgaria" },
            { value: "burkina-faso", label: "🇧🇫 Burkina Faso" },
            { value: "burundi", label: "🇧🇮 Burundi" },
            { value: "cabo-verde", label: "🇨🇻 Cape Verde" },
            { value: "cambodia", label: "🇰🇭 Cambodia" },
            { value: "cameroon", label: "🇨🇲 Cameroon" },
            { value: "canada", label: "🇨🇦 Canada" },
            {
              value: "central-african-republic",
              label: "🇨🇫 Central African Republic",
            },
            { value: "chad", label: "🇹🇩 Chad" },
            { value: "chile", label: "🇨🇱 Chile" },
            { value: "china", label: "🇨🇳 China" },
            { value: "colombia", label: "🇨🇴 Colombia" },
            { value: "comoros", label: "🇰🇲 Comoros" },
            { value: "costa-rica", label: "🇨🇷 Costa Rica" },
            { value: "croatia", label: "🇭🇷 Croatia" },
            { value: "cuba", label: "🇨🇺 Cuba" },
            { value: "cyprus", label: "🇨🇾 Cyprus" },
            { value: "czech-republic", label: "🇨🇿 Czech Republic" },
            { value: "democratic-republic-of-the-congo", label: "🇨🇩 DR Congo" },
            { value: "denmark", label: "🇩🇰 Denmark" },
            { value: "djibouti", label: "🇩🇯 Djibouti" },
            { value: "dominica", label: "🇩🇲 Dominica" },
            { value: "dominican-republic", label: "🇩🇴 Dominican Republic" },
            { value: "ecuador", label: "🇪🇨 Ecuador" },
            { value: "egypt", label: "🇪🇬 Egypt" },
            { value: "el-salvador", label: "🇸🇻 El Salvador" },
            { value: "equatorial-guinea", label: "🇬🇶 Equatorial Guinea" },
            { value: "eritrea", label: "🇪🇷 Eritrea" },
            { value: "estonia", label: "🇪🇪 Estonia" },
            { value: "eswatini", label: "🇸🇿 Eswatini" },
            { value: "ethiopia", label: "🇪🇹 Ethiopia" },
            { value: "fiji", label: "🇫🇯 Fiji" },
            { value: "finland", label: "🇫🇮 Finland" },
            { value: "france", label: "🇫🇷 France" },
            { value: "gabon", label: "🇬🇦 Gabon" },
            { value: "gambia", label: "🇬🇲 Gambia" },
            { value: "georgia", label: "🇬🇪 Georgia" },
            { value: "germany", label: "🇩🇪 Germany" },
            { value: "ghana", label: "🇬🇭 Ghana" },
            { value: "greece", label: "🇬🇷 Greece" },
            { value: "grenada", label: "🇬🇩 Grenada" },
            { value: "guatemala", label: "🇬🇹 Guatemala" },
            { value: "guinea", label: "🇬🇳 Guinea" },
            { value: "guinea-bissau", label: "🇬🇼 Guinea-Bissau" },
            { value: "haiti", label: "🇭🇹 Haiti" },
            { value: "honduras", label: "🇭🇳 Honduras" },
            { value: "hungary", label: "🇭🇺 Hungary" },
            { value: "iceland", label: "🇮🇸 Iceland" },
            { value: "india", label: "🇮🇳 India" },
            { value: "indonesia", label: "🇮🇩 Indonesia" },
            { value: "iran", label: "🇮🇷 Iran" },
            { value: "iraq", label: "🇮🇶 Iraq" },
            { value: "ireland", label: "🇮🇪 Ireland" },
            { value: "israel", label: "🇮🇱 Israel" },
            { value: "italy", label: "🇮🇹 Italy" },
            { value: "ivory-coast", label: "🇨🇮 Ivory Coast" },
            { value: "jamaica", label: "🇯🇲 Jamaica" },
            { value: "japan", label: "🇯🇵 Japan" },
            { value: "jordan", label: "🇯🇴 Jordan" },
            { value: "kazakhstan", label: "🇰🇿 Kazakhstan" },
            { value: "kenya", label: "🇰🇪 Kenya" },
            { value: "kiribati", label: "🇰🇮 Kiribati" },
            { value: "kosovo", label: "🇽🇰 Kosovo" },
            { value: "kuwait", label: "🇰🇼 Kuwait" },
            { value: "kyrgyzstan", label: "🇰🇬 Kyrgyzstan" },
            { value: "laos", label: "🇱🇦 Laos" },
            { value: "latvia", label: "🇱🇻 Latvia" },
            { value: "lebanon", label: "🇱🇧 Lebanon" },
            { value: "lesotho", label: "🇱🇸 Lesotho" },
            { value: "liberia", label: "🇱🇷 Liberia" },
            { value: "libya", label: "🇱🇾 Libya" },
            { value: "liechtenstein", label: "🇱🇮 Liechtenstein" },
            { value: "lithuania", label: "🇱🇹 Lithuania" },
            { value: "luxembourg", label: "🇱🇺 Luxembourg" },
            { value: "madagascar", label: "🇲🇬 Madagascar" },
            { value: "malawi", label: "🇲🇼 Malawi" },
            { value: "malaysia", label: "🇲🇾 Malaysia" },
            { value: "maldives", label: "🇲🇻 Maldives" },
            { value: "mali", label: "🇲🇱 Mali" },
            { value: "malta", label: "🇲🇹 Malta" },
            { value: "mauritania", label: "🇲🇷 Mauritania" },
            { value: "mauritius", label: "🇲🇺 Mauritius" },
            { value: "mexico", label: "🇲🇽 Mexico" },
            { value: "micronesia", label: "🇫🇲 Micronesia" },
            { value: "moldova", label: "🇲🇩 Moldova" },
            { value: "monaco", label: "🇲🇨 Monaco" },
            { value: "mongolia", label: "🇲🇳 Mongolia" },
            { value: "montenegro", label: "🇲🇪 Montenegro" },
            { value: "morocco", label: "🇲🇦 Morocco" },
            { value: "mozambique", label: "🇲🇿 Mozambique" },
            { value: "myanmar", label: "🇲🇲 Myanmar" },
            { value: "namibia", label: "🇳🇦 Namibia" },
            { value: "nauru", label: "🇳🇷 Nauru" },
            { value: "nepal", label: "🇳🇵 Nepal" },
            { value: "netherlands", label: "🇳🇱 Netherlands" },
            { value: "new-zealand", label: "🇳🇿 New Zealand" },
            { value: "nicaragua", label: "🇳🇮 Nicaragua" },
            { value: "niger", label: "🇳🇪 Niger" },
            { value: "nigeria", label: "🇳🇬 Nigeria" },
            { value: "north-korea", label: "🇰🇵 North Korea" },
            { value: "north-macedonia", label: "🇲🇰 North Macedonia" },
            { value: "norway", label: "🇳🇴 Norway" },
            { value: "oman", label: "🇴🇲 Oman" },
            { value: "pakistan", label: "🇵🇰 Pakistan" },
            { value: "palau", label: "🇵🇼 Palau" },
            { value: "panama", label: "🇵🇦 Panama" },
            { value: "papua-new-guinea", label: "🇵🇬 Papua New Guinea" },
            { value: "paraguay", label: "🇵🇾 Paraguay" },
            { value: "peru", label: "🇵🇪 Peru" },
            { value: "philippines", label: "🇵🇭 Philippines" },
            { value: "poland", label: "🇵🇱 Poland" },
            { value: "portugal", label: "🇵🇹 Portugal" },
            { value: "qatar", label: "🇶🇦 Qatar" },
            { value: "romania", label: "🇷🇴 Romania" },
            { value: "russia", label: "🇷🇺 Russia" },
            { value: "rwanda", label: "🇷🇼 Rwanda" },
            {
              value: "saint-kitts-and-nevis",
              label: "🇰🇳 Saint Kitts and Nevis",
            },
            { value: "saint-lucia", label: "🇱🇨 Saint Lucia" },
            {
              value: "saint-vincent-and-the-grenadines",
              label: "🇻🇨 Saint Vincent and the Grenadines",
            },
            { value: "samoa", label: "🇼🇸 Samoa" },
            { value: "san-marino", label: "🇸🇲 San Marino" },
            {
              value: "sao-tome-and-principe",
              label: "🇸🇹 Sao Tome and Principe",
            },
            { value: "saudi-arabia", label: "🇸🇦 Saudi Arabia" },
            { value: "senegal", label: "🇸🇳 Senegal" },
            { value: "serbia", label: "🇷🇸 Serbia" },
            { value: "seychelles", label: "🇸🇨 Seychelles" },
            { value: "sierra-leone", label: "🇸🇱 Sierra Leone" },
            { value: "singapore", label: "🇸🇬 Singapore" },
            { value: "slovakia", label: "🇸🇰 Slovakia" },
            { value: "slovenia", label: "🇸🇮 Slovenia" },
            { value: "solomon-islands", label: "🇸🇧 Solomon Islands" },
            { value: "somalia", label: "🇸🇴 Somalia" },
            { value: "south-africa", label: "🇿🇦 South Africa" },
            { value: "south-korea", label: "🇰🇷 South Korea" },
            { value: "south-sudan", label: "🇸🇸 South Sudan" },
            { value: "spain", label: "🇪🇸 Spain" },
            { value: "sri-lanka", label: "🇱🇰 Sri Lanka" },
            { value: "sudan", label: "🇸🇩 Sudan" },
            { value: "suriname", label: "🇸🇷 Suriname" },
            { value: "sweden", label: "🇸🇪 Sweden" },
            { value: "switzerland", label: "🇨🇭 Switzerland" },
            { value: "syria", label: "🇸🇾 Syria" },
            { value: "taiwan", label: "🇹🇼 Taiwan" },
            { value: "tajikistan", label: "🇹🇯 Tajikistan" },
            { value: "tanzania", label: "🇹🇿 Tanzania" },
            { value: "thailand", label: "🇹🇭 Thailand" },
            { value: "timor-leste", label: "🇹🇱 Timor-Leste" },
            { value: "togo", label: "🇹🇬 Togo" },
            { value: "tonga", label: "🇹🇴 Tonga" },
            { value: "turkey", label: "🇹🇷 Turkey" },
            { value: "turkmenistan", label: "🇹🇲 Turkmenistan" },
            { value: "tuvalu", label: "🇹🇻 Tuvalu" },
            { value: "uganda", label: "🇺🇬 Uganda" },
            { value: "ukraine", label: "🇺🇦 Ukraine" },
            { value: "united-arab-emirates", label: "🇦🇪 United Arab Emirates" },
            { value: "united-kingdom", label: "🇬🇧 United Kingdom" },
            {
              value: "united-states-of-america",
              label: "🇺🇸 United States of America",
            },
            { value: "uruguay", label: "🇺🇾 Uruguay" },
            { value: "uzbekistan", label: "🇺🇿 Uzbekistan" },
            { value: "vanuatu", label: "🇻🇺 Vanuatu" },
            { value: "vatican-city", label: "🇻🇦 Vatican City" },
            { value: "venezuela", label: "🇻🇪 Venezuela" },
            { value: "vietnam", label: "🇻🇳 Vietnam" },
            { value: "yemen", label: "🇾🇪 Yemen" },
            { value: "zambia", label: "🇿🇲 Zambia" },
            { value: "zimbabwe", label: "🇿🇼 Zimbabwe" },
          ]}
        />

        <Select
          label="Preffered Cuisine 🍴"
          placeholder="Pick one"
          searchable
          data={[
            { value: "american", label: "American 🍔🍟" },
            { value: "chinese", label: "Chinese 🥡🥢" },
            { value: "french", label: "French 🥐🧀" },
            { value: "indian", label: "Indian 🍛🍢" },
            { value: "italian", label: "Italian 🍝🍕" },
            { value: "japanese", label: "Japanese 🍣🍱" },
            { value: "korean", label: "Korean 🍜🍚" },
            { value: "mexican", label: "Mexican 🌮🌯" },
            { value: "spanish", label: "Spanish 🍷🍤" },
            { value: "thai", label: "Thai 🍲🌶️" },
            { value: "greek", label: "Greek 🇬🇷🍋" },
            { value: "lebanese", label: "Lebanese 🇱🇧🍅" },
            { value: "vietnamese", label: "Vietnamese 🇻🇳🍜" },
            { value: "moroccan", label: "Moroccan 🇲🇦🍋" },
            { value: "turkish", label: "Turkish 🇹🇷🍢" },
            { value: "thai", label: "Thai 🍲🌶️" },
            { value: "caribbean", label: "Caribbean 🏝️🍹" },
            { value: "peruvian", label: "Peruvian 🇵🇪🥔" },
            { value: "mediterranean", label: "Mediterranean 🌊🍅" },
            { value: "south-african", label: "South African 🇿🇦🍖" },
          ]}
        />

        {/* <Select
          label="Favorite Cuisine 😋"
          placeholder="Pick one"
          searchable
          data={[
            { value: "american", label: "American 🍔🍟" },
            { value: "chinese", label: "Chinese 🥡🥢" },
            { value: "french", label: "French 🥐🧀" },
            { value: "indian", label: "Indian 🍛🍢" },
            { value: "italian", label: "Italian 🍝🍕" },
            { value: "japanese", label: "Japanese 🍣🍱" },
            { value: "korean", label: "Korean 🍜🍚" },
            { value: "mexican", label: "Mexican 🌮🌯" },
            { value: "spanish", label: "Spanish 🍷🍤" },
            { value: "thai", label: "Thai 🍲🌶️" },
            { value: "greek", label: "Greek 🇬🇷🍋" },
            { value: "lebanese", label: "Lebanese 🇱🇧🍅" },
            { value: "vietnamese", label: "Vietnamese 🇻🇳🍜" },
            { value: "moroccan", label: "Moroccan 🇲🇦🍋" },
            { value: "turkish", label: "Turkish 🇹🇷🍢" },
            { value: "thai", label: "Thai 🍲🌶️" },
            { value: "caribbean", label: "Caribbean 🏝️🍹" },
            { value: "peruvian", label: "Peruvian 🇵🇪🥔" },
            { value: "mediterranean", label: "Mediterranean 🌊🍅" },
            { value: "south-african", label: "South African 🇿🇦🍖" },
          ]}
        /> */}

        <Select
          label="Any Special Diet type 🤔 || Add it to personal"
          placeholder="Pick one"
          searchable
          data={[
            { value: "vegetarian", label: "Vegetarian 🍊" },
            { value: "vegan", label: "Vegan 🥦" },
            { value: "gluten-free", label: "Gluten free 🥪❌" },
            { value: "dairy-free", label: "Dairy Free 🥛❌" },
            { value: "pescatarian", label: "Pescatarian 🐟" },
            { value: "flexitarian", label: "Flexitarian 🥦🐟" },
            { value: "ketogenic", label: "Ketogenic 🥑🍖" },
            { value: "paleo", label: "Paleo 🍗🥦" },
            { value: "low-carb", label: "Low Carb 🥑❌" },
            { value: "low-fat", label: "Low Fat 🥗" },
            { value: "Mediterranean", label: "Mediterranean 🍅🐟" },
            { value: "raw", label: "Raw 🥬🥦" },
            { value: "whole30", label: "Whole30 🍎🍗" },
            { value: "fruitarian", label: "Fruitarian 🍉🍇" },
          ]}
        />

        <Group position="center" mt="md">
          <Button>Save Changes</Button>
        </Group>
      </Box>
    </div>
  );
}
