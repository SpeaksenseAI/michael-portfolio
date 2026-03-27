import { Button, Column, Heading, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160" horizontal="center" className="page-shell">
      <Column
        padding="32"
        gap="16"
        radius="l"
        horizontal="center"
        maxWidth="xs"
        className="elevated-card"
        style={{ textAlign: "center" }}
      >
        <Text marginBottom="s" variant="display-strong-xl">
          404
        </Text>
        <Heading marginBottom="m" variant="display-default-xs">
          Page not found
        </Heading>
        <Text onBackground="neutral-strong" marginBottom="16">
          The page you are looking for does not exist or has moved.
        </Text>
        <Button href="/" variant="primary" size="m">
          Back to home
        </Button>
      </Column>
    </Column>
  );
}
