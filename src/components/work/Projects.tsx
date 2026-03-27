import { ProjectList } from "@/components/work/ProjectList";

interface ProjectsProps {
  range?: [number, number?];
}

/**
 * Back-compat wrapper: list-style project index (Jonathan Chang–style), not carousel cards.
 */
export function Projects({ range }: ProjectsProps) {
  return <ProjectList range={range} />;
}
