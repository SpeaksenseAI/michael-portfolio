import { notFound } from "next/navigation";
import { getPosts } from "@/app/utils/utils";
import { Meta, Schema, AvatarGroup, Button, Carousel, Column, Flex, Heading, Tag, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { formatDate } from "@/app/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === slug
  );

  if (!post) {
    return {};
  }

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || "/images/og/work.jpg",
    path: `/work/${slug}`,
  });
}

export default async function Project({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  const tagList =
    post.metadata.tags?.length ? post.metadata.tags : [post.metadata.category].filter(Boolean) as string[];

  return (
    <Column as="section" maxWidth="l" horizontal="center" gap="24" fillWidth className="page-shell">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`/work/${slugPath}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        image={post.metadata.image || "/images/og/work.jpg"}
        author={{
          name: person.name,
          url: `${baseURL}/work`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="16" maxWidth="m" horizontal="start">
        <Button data-border="rounded" href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
        {tagList.length > 0 && (
          <Flex gap="8" wrap horizontal="start" vertical="center">
            {tagList.map((t) => (
              <Tag key={t} size="s">
                {t}
              </Tag>
            ))}
          </Flex>
        )}
      </Column>
      {post.metadata.images?.length > 0 && (
        <Column fillWidth maxWidth="m">
          <Carousel
            aspectRatio="16 / 9"
            indicator={post.metadata.images.length > 1 ? "line" : undefined}
            items={post.metadata.images.map((src: string, i: number) => ({
              slide: src,
              alt: `${post.metadata.title} — image ${i + 1}`,
            }))}
          />
        </Column>
      )}
      <Column
        as="article"
        fillWidth
        maxWidth="m"
        padding="24"
        gap="16"
        radius="l"
        className="elevated-card"
        style={{ marginInline: "auto" }}
      >
        <Flex gap="12" marginBottom="8" vertical="center" wrap>
          {post.metadata.team && post.metadata.team.length > 0 && (
            <AvatarGroup reverse avatars={avatars} size="m" />
          )}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
