import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";
import dynamic from "next/dynamic";

import { 
  Heading,
  HeadingLink,
  Media,
  SmartLink,
  Text,
  InlineCode,
} from "@once-ui-system/core";
import { CodeBlock } from "@once-ui-system/core";
import { TextProps } from "@once-ui-system/core";
import { MediaProps } from "@once-ui-system/core";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({ alt, src, ...props }: MediaProps & { src: string }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }

  return (
    <Media
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const CustomHeading = ({ children, ...props }: Omit<React.ComponentProps<typeof HeadingLink>, 'as' | 'id'>) => {
    const slug = slugify(children as string);
    return (
      <HeadingLink
        marginTop="24"
        marginBottom="12"
        as={as}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `${as}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "175%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function createInlineCode({ children }: { children: ReactNode }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props: any) {
  // For pre tags that contain code blocks
  if (props.children && props.children.props && props.children.props.className) {
    const { className, children } = props.children.props;
    
    // Extract language from className (format: language-xxx)
    const language = className.replace('language-', '');
    const label = language.charAt(0).toUpperCase() + language.slice(1);
    
    return (
      <CodeBlock
        marginTop="8"
        marginBottom="16"
        codes={[
          {
            code: children,
            language,
            label
          }
        ]}
        copyButton={true}
      />
    );
  }
  
  // Fallback for other pre tags or empty code blocks
  return <pre {...props} />;
}

function createTable({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div style={{ overflowX: "auto", marginTop: "var(--static-space-8)", marginBottom: "var(--static-space-16)" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "var(--font-size-body-default-s)",
          lineHeight: "1.6",
        }}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

function createThead({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      style={{
        borderBottom: "2px solid var(--brand-alpha-medium)",
        textAlign: "left",
      }}
      {...props}
    >
      {children}
    </thead>
  );
}

function createTh({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      style={{
        padding: "var(--static-space-8) var(--static-space-12)",
        fontWeight: 600,
        color: "var(--neutral-on-background-strong)",
        whiteSpace: "nowrap",
      }}
      {...props}
    >
      {children}
    </th>
  );
}

function createTd({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      style={{
        padding: "var(--static-space-8) var(--static-space-12)",
        borderBottom: "1px solid var(--neutral-alpha-weak)",
        color: "var(--neutral-on-background-medium)",
      }}
      {...props}
    >
      {children}
    </td>
  );
}

function createList({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      style={{
        paddingLeft: "var(--static-space-20)",
        marginTop: "var(--static-space-4)",
        marginBottom: "var(--static-space-12)",
        listStyleType: "disc",
        color: "var(--neutral-on-background-medium)",
        lineHeight: "1.75",
        fontSize: "var(--font-size-body-default-m)",
      }}
      {...props}
    >
      {children}
    </ul>
  );
}

function createOrderedList({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      style={{
        paddingLeft: "var(--static-space-20)",
        marginTop: "var(--static-space-4)",
        marginBottom: "var(--static-space-12)",
        listStyleType: "decimal",
        color: "var(--neutral-on-background-medium)",
        lineHeight: "1.75",
        fontSize: "var(--font-size-body-default-m)",
      }}
      {...props}
    >
      {children}
    </ol>
  );
}

function createListItem({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      style={{
        marginBottom: "var(--static-space-4)",
      }}
      {...props}
    >
      {children}
    </li>
  );
}

function createStrong({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <strong
      style={{ color: "var(--neutral-on-background-strong)", fontWeight: 600 }}
      {...props}
    >
      {children}
    </strong>
  );
}

function createHr(props: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid var(--neutral-alpha-weak)",
        marginTop: "var(--static-space-24)",
        marginBottom: "var(--static-space-24)",
      }}
      {...props}
    />
  );
}

const components = {
  p: createParagraph as any,
  h1: createHeading("h1") as any,
  h2: createHeading("h2") as any,
  h3: createHeading("h3") as any,
  h4: createHeading("h4") as any,
  h5: createHeading("h5") as any,
  h6: createHeading("h6") as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  table: createTable as any,
  thead: createThead as any,
  th: createTh as any,
  td: createTd as any,
  ul: createList as any,
  ol: createOrderedList as any,
  li: createListItem as any,
  strong: createStrong as any,
  hr: createHr as any,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion: dynamic(() => import("@once-ui-system/core").then(mod => mod.Accordion)),
  AccordionGroup: dynamic(() => import("@once-ui-system/core").then(mod => mod.AccordionGroup)),
  Table: dynamic(() => import("@once-ui-system/core").then(mod => mod.Table)),
  Feedback: dynamic(() => import("@once-ui-system/core").then(mod => mod.Feedback)),
  Button: dynamic(() => import("@once-ui-system/core").then(mod => mod.Button)),
  Card: dynamic(() => import("@once-ui-system/core").then(mod => mod.Card)),
  Grid: dynamic(() => import("@once-ui-system/core").then(mod => mod.Grid)),
  Row: dynamic(() => import("@once-ui-system/core").then(mod => mod.Row)),
  Column: dynamic(() => import("@once-ui-system/core").then(mod => mod.Column)),
  Icon: dynamic(() => import("@once-ui-system/core").then(mod => mod.Icon)),
  Media: dynamic(() => import("@once-ui-system/core").then(mod => mod.Media)),
  SmartLink: dynamic(() => import("@once-ui-system/core").then(mod => mod.SmartLink)),
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  );
}