import { Column, Flex, SmartLink, Text } from "@once-ui-system/core";

import { person, site, social } from "@/resources";
import packageJson from "../../package.json";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="24"
      horizontal="center"
      mobileDirection="column"
      border="neutral-alpha-weak"
      style={{ borderWidth: "1px 0 0 0" }}
    >
      <Column
        className={styles.block}
        maxWidth="m"
        gap="24"
        horizontal="center"
        style={{ textAlign: "center" }}
      >
        <Text variant="heading-strong-l">{person.name}</Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {site.footer.tagline}
        </Text>

        <Column gap="12">
          <Text variant="heading-strong-s">{site.footer.connectTitle}</Text>
          <Flex gap="16" wrap horizontal="center" vertical="center">
            {social.map(
              (item) =>
                item.link && (
                  <SmartLink
                    key={item.name}
                    href={item.link}
                    target={item.target}
                    style={{ margin: 0 }}
                  >
                    <Text variant="body-default-s">{item.name}</Text>
                  </SmartLink>
                ),
            )}
          </Flex>
        </Column>

        <Text variant="label-default-s" onBackground="neutral-weak">
          {packageJson.version} © {currentYear} / {person.name}
        </Text>
      </Column>
      <Flex height="80" show="s" />
    </Flex>
  );
};
