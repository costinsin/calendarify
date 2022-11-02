import {
  Container,
  Header,
  Image,
  Button,
  createStyles,
  SegmentedControl,
} from "@mantine/core";
import Link from "next/link";
import { useLocalStorage } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function HeaderComponent() {
  const { classes } = useStyles();
  const [lang, setLang] = useLocalStorage({
    key: "language",
    defaultValue: "ro",
  });

  return (
    <Header className={classes.header} height={80} p="0 50px 0 50px">
      <Link href="/">
        <Image src="/logo.png" fit="scale-down" height={60} />{" "}
      </Link>
      <Container mx="0">
        <Link href="/generate">
          <Button color="green" component="a" mx="sm">
            Generate timetable
          </Button>
        </Link>
        {/* <SegmentedControl
          onChange={setLang}
          value={lang}
          data={[
            { label: "RO", value: "ro" },
            { label: "EN", value: "en" },
          ]}
        /> */}
      </Container>
    </Header>
  );
}
