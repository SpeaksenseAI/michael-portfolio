"use client";

import { 
  Column, 
  Heading, 
  Meta, 
  Schema, 
  Card,
  Text,
  Flex,
  Icon,
  Tag,
  Grid
} from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { baseURL, person, newsletter } from "@/resources";

const resources = {
  path: "/resources",
  label: "Resources",
  title: "UX Resources & Tools",
  description: `Curated tools, resources, and insights from ${person.name}&#39;s UX design practice`,
};

export default function Resources() {
  const tools = [
    {
      category: "Design Tools",
      items: [
        {
          name: "Figma",
          description: "Primary tool for wireframing, prototyping, and design systems. Excellent for collaborative design and rapid iteration.",
          expertise: "Expert",
          icon: "design",
          tags: ["Prototyping", "Wireframing", "Collaboration"]
        },
        {
          name: "Sketch",
          description: "Vector-based design tool, great for UI design and creating detailed mockups with precision.",
          expertise: "Advanced",
          icon: "design",
          tags: ["UI Design", "Mockups", "Vector Graphics"]
        },
        {
          name: "Adobe XD",
          description: "Comprehensive tool for creating interactive prototypes and user experience flows.",
          expertise: "Advanced",
          icon: "design",
          tags: ["Interactive Prototypes", "User Flows"]
        }
      ]
    },
    {
      category: "Research & Testing",
      items: [
        {
          name: "Usability Testing",
          description: "Conducting comprehensive user testing sessions to validate designs and gather actionable feedback.",
          expertise: "Expert",
          icon: "person",
          tags: ["User Research", "Feedback", "Validation"]
        },
        {
          name: "User Journey Mapping",
          description: "Creating detailed maps of user interactions to identify pain points and opportunities.",
          expertise: "Expert",
          icon: "activity",
          tags: ["Journey Maps", "User Experience", "Analysis"]
        },
        {
          name: "Persona Creation",
          description: "Developing data-driven user personas to guide design decisions and team alignment.",
          expertise: "Advanced",
          icon: "person",
          tags: ["User Personas", "Research", "Strategy"]
        }
      ]
    },
    {
      category: "Development & Accessibility",
      items: [
        {
          name: "WCAG & ADA Compliance",
          description: "Ensuring designs meet accessibility standards for inclusive user experiences.",
          expertise: "Advanced",
          icon: "accessibility",
          tags: ["Accessibility", "Compliance", "Inclusive Design"]
        },
        {
          name: "Responsive Design",
          description: "Creating designs that work seamlessly across all devices and screen sizes.",
          expertise: "Expert",
          icon: "mobile",
          tags: ["Mobile", "Responsive", "Cross-platform"]
        },
        {
          name: "Webflow",
          description: "Building responsive websites and prototypes with advanced interactions.",
          expertise: "Intermediate",
          icon: "code",
          tags: ["Web Development", "Prototyping", "Interactions"]
        }
      ]
    },
    {
      category: "Methodology & Process",
      items: [
        {
          name: "Design Thinking",
          description: "Systematic approach to solving complex problems through user-centered design principles.",
          expertise: "Expert",
          icon: "lightbulb",
          tags: ["Problem Solving", "Innovation", "Process"]
        },
        {
          name: "Agile & Scrum",
          description: "Working effectively in agile environments with cross-functional teams.",
          expertise: "Advanced",
          icon: "sync",
          tags: ["Agile", "Collaboration", "Project Management"]
        },
        {
          name: "Stakeholder Communication",
          description: "Effectively presenting design solutions and managing client relationships.",
          expertise: "Expert",
          icon: "message",
          tags: ["Communication", "Presentation", "Client Management"]
        }
      ]
    }
  ];

  const resourcesList = [
    {
      title: "Essential UX Reading",
      items: [
        "Don&#39;t Make Me Think by Steve Krug",
        "The Design of Everyday Things by Don Norman",
        "About Face by Alan Cooper"
      ]
    },
    {
      title: "Inspiration Sources",
      items: [
        "Dribbble for design inspiration",
        "Behance for comprehensive case studies",
        "Mobbin for mobile app patterns"
      ]
    },
    {
      title: "Research Tools",
      items: [
        "Hotjar for user behavior analytics",
        "Maze for remote usability testing",
        "Optimal Workshop for card sorting"
      ]
    }
  ];

  return (
    <Column maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={resources.title}
        description={resources.description}
        path={resources.path}
        image="/images/og/resources.jpg"
        author={{
          name: person.name,
          url: `${baseURL}/resources`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Heading marginBottom="l" variant="display-strong-s">
        {resources.title}
      </Heading>
      
      <Text marginBottom="xl" variant="body-default-l" onBackground="neutral-weak">
        Tools, methodologies, and resources that power my UX design practice. 
        From wireframing to user research, here&#39;s what I use to create meaningful user experiences.
      </Text>

      {/* Tools & Skills Section */}
      <Column fillWidth gap="xl">
        {tools.map((category, index) => (
          <Column key={index} fillWidth gap="m">
            <Heading variant="heading-strong-l" marginBottom="m">
              {category.category}
            </Heading>
            <Flex wrap gap="m" fillWidth>
              {category.items.map((tool, toolIndex) => (
                <Card key={toolIndex} padding="l" style={{ flex: "1 1 300px", minWidth: "300px" }}>
                  <Flex align="center" marginBottom="m">
                    <Icon name={tool.icon} size="m" />
                    <Column marginLeft="m" flex={1}>
                      <Text variant="heading-strong-m">{tool.name}</Text>
                      <Tag size="s" variant="neutral">{tool.expertise}</Tag>
                    </Column>
                  </Flex>
                  <Text variant="body-default-m" marginBottom="m">
                    {tool.description}
                  </Text>
                  <Flex wrap gap="xs">
                    {tool.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex} size="s" variant="accent">
                        {tag}
                      </Tag>
                    ))}
                  </Flex>
                </Card>
              ))}
            </Flex>
          </Column>
        ))}
      </Column>

      {/* Resources Section */}
      <Column fillWidth gap="l" marginTop="xl">
        <Heading variant="heading-strong-l" marginBottom="m">
          Recommended Resources
        </Heading>
        <Flex wrap gap="m" fillWidth>
          {resourcesList.map((resource, index) => (
            <Card key={index} padding="l" style={{ flex: "1 1 250px", minWidth: "250px" }}>
              <Heading variant="heading-strong-m" marginBottom="m">
                {resource.title}
              </Heading>
              <Column gap="xs">
                {resource.items.map((item, itemIndex) => (
                  <Text key={itemIndex} variant="body-default-s" onBackground="neutral-weak">
                    • {item}
                  </Text>
                ))}
              </Column>
            </Card>
          ))}
        </Flex>
      </Column>

      {newsletter.display && (
        <Column marginTop="xl">
          <Mailchimp newsletter={newsletter} />
        </Column>
      )}
    </Column>
  );
} 