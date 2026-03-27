import { Column, Flex, Heading, SmartLink, Text } from "@once-ui-system/core";
import { getPosts } from "@/app/utils/utils";

interface ProjectListProps {
  /** 1-based inclusive slice, same convention as former Projects `range` */
  range?: [number, number?];
  showViewAll?: boolean;
  viewAllHref?: string;
}

function yearFromPublishedAt(publishedAt: string): string {
  const d = new Date(publishedAt);
  return Number.isNaN(d.getTime()) ? "" : String(d.getFullYear());
}

export function ProjectList({
  range,
  showViewAll = false,
  viewAllHref = "/work",
}: ProjectListProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  const displayed = range
    ? allProjects.slice(range[0] - 1, range[1] ?? allProjects.length)
    : allProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40">
      {displayed.map((post) => {
        const href = `/work/${post.slug}`;
        const y = yearFromPublishedAt(post.metadata.publishedAt);
        const cat = post.metadata.category?.trim() || "Project";
        const meta = `${cat}${y ? `, ${y}` : ""}`;

        return (
          <Column key={post.slug} fillWidth gap="8">
            <Text variant="label-default-s" onBackground="neutral-weak">
              {meta}
            </Text>
            <Heading as="h3" variant="heading-strong-l">
              <SmartLink href={href} style={{ textDecoration: "none" }}>
                {post.metadata.title}
              </SmartLink>
            </Heading>
            {post.metadata.summary?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {post.metadata.summary}
              </Text>
            )}
            <Flex gap="16" wrap>
              <SmartLink
                suffixIcon="arrowRight"
                style={{ margin: "0", width: "fit-content" }}
                href={href}
              >
                <Text variant="body-default-s">Read case study</Text>
              </SmartLink>
              {post.metadata.link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={post.metadata.link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        );
      })}
      {showViewAll && (
        <SmartLink
          suffixIcon="arrowRight"
          style={{ margin: "0", width: "fit-content" }}
          href={viewAllHref}
        >
          <Text variant="body-default-s">View all projects</Text>
        </SmartLink>
      )}
    </Column>
  );
}
