import { Column, Flex, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: "/images/og/gallery.jpg",
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Column maxWidth="l" gap="24" fillWidth horizontal="center" className="page-shell">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image="/images/og/gallery.jpg"
        author={{
          name: person.name,
          url: `${baseURL}/gallery`,
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
          Gallery
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-strong">
          {gallery.description}
        </Text>
      </Column>
      <Flex fillWidth>
        <MasonryGrid />
      </Flex>
    </Column>
  );
}
