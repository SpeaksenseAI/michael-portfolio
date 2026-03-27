import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, person, work } from "@/resources";
import { FeaturedProjectGrid } from "@/components/home/FeaturedProjectGrid";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: "/images/og/work.jpg",
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="l" gap="32" horizontal="center" fillWidth className="page-shell">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={work.title}
        description={work.description}
        path={work.path}
        image="/images/og/work.jpg"
        author={{
          name: person.name,
          url: `${baseURL}/work`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column
        fillWidth
        gap="12"
        padding="24"
        radius="l"
        className="elevated-card"
      >
        <Heading as="h1" variant="display-strong-m">
          Projects
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-strong">
          {work.description}
        </Text>
      </Column>
      <FeaturedProjectGrid />
    </Column>
  );
}
