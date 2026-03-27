import { Flex } from "@once-ui-system/core";
import { getPosts } from "@/app/utils/utils";
import { FeaturedProjectCard } from "./FeaturedProjectCard";

type FeaturedProjectGridProps = {
  limit?: number;
};

export function FeaturedProjectGrid({ limit }: FeaturedProjectGridProps) {
  const posts = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  const displayed = typeof limit === "number" ? posts.slice(0, limit) : posts;

  return (
    <Flex
      fillWidth
      gap="24"
      wrap
      horizontal="start"
      vertical="start"
    >
      {displayed.map((post, index) => {
        const img =
          post.metadata.images?.[0] ||
          post.metadata.image ||
          "/images/og/work.jpg";
        const href = `/work/${post.slug}`;
        const tags = post.metadata.tags?.length
          ? post.metadata.tags
          : [post.metadata.category || "Project"].filter(Boolean);

        return (
          <FeaturedProjectCard
            key={post.slug}
            href={href}
            title={post.metadata.title}
            summary={post.metadata.summary}
            image={img}
            tags={tags}
            status={post.metadata.status}
            priority={index < 2}
          />
        );
      })}
    </Flex>
  );
}
