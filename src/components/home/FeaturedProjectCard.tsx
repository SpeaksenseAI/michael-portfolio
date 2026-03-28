import Image from "next/image";
import { Column, Flex, Heading, SmartLink, Tag, Text } from "@once-ui-system/core";
import styles from "./FeaturedProjectCard.module.scss";

type FeaturedProjectCardProps = {
  href: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  status?: string;
  priority?: boolean;
};

export function FeaturedProjectCard({
  href,
  title,
  summary,
  image,
  tags,
  status = "Done",
  priority = false,
}: FeaturedProjectCardProps) {
  const short =
    summary.length > 160 ? `${summary.slice(0, 157).trim()}…` : summary;

  return (
    <Column
      fillWidth
      flex={1}
      radius="l"
      overflow="hidden"
      className="elevated-card"
      style={{ flexGrow: 1, minWidth: "min(100%, 17rem)", maxWidth: "24rem" }}
    >
      <SmartLink href={href} style={{ display: "block", textDecoration: "none" }}>
        <div className={styles.imageWrap}>
          {status && (
            <div className={styles.status}>
              <Tag size="s">{status}</Tag>
            </div>
          )}
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 360px"
            priority={priority}
          />
        </div>
      </SmartLink>
      <Column padding="20" gap="12" fillWidth>
        <Flex wrap gap="8">
          {tags.slice(0, 5).map((t) => (
            <Tag key={t} size="s">
              {t}
            </Tag>
          ))}
        </Flex>
        <Heading as="h3" variant="heading-strong-m">
          <SmartLink href={href} style={{ textDecoration: "none" }}>
            {title}
          </SmartLink>
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-strong">
          {short}
        </Text>
        <SmartLink
          suffixIcon="arrowRight"
          style={{ margin: "0", width: "fit-content" }}
          href={href}
        >
          <Text variant="body-default-s">Read case study</Text>
        </SmartLink>
      </Column>
    </Column>
  );
}
