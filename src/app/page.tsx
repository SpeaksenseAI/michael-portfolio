import React from "react";
import Image from "next/image";

import {
  Button,
  Column,
  Flex,
  Heading,
  Schema,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import { home, about, person, baseURL, social, work } from "@/resources";
import { TerminalBlock } from "@/components/home/TerminalBlock";
import { FeaturedProjectGrid } from "@/components/home/FeaturedProjectGrid";

export default function Home() {
  const resume = social.find((s) => s.name === "Resume");

  return (
    <Column maxWidth="l" gap="48" horizontal="center" fillWidth className="section-stack page-shell">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero — Lise-style: circle avatar → name → roles → tagline → CTAs */}
      <Column maxWidth="m" gap="20" horizontal="center" style={{ textAlign: "center" }}>
        <div className="hero-avatar-ring">
          <Image
            src={person.avatar}
            alt={person.name}
            width={120}
            height={120}
            className="hero-avatar"
            priority
          />
        </div>
        <Heading wrap="balance" variant="display-strong-l">
          {person.name}
        </Heading>
        <Text variant="heading-default-l" className="hero-role-primary">
          {home.roleLinePrimary}
        </Text>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          {home.roleLineSecondary}
        </Text>
        <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak" marginTop="8">
          {home.heroTagline}
        </Text>
        <Flex paddingTop="16" gap="12" wrap horizontal="center" vertical="center">
          <Button href={work.path} variant="primary" size="m" arrowIcon>
            Explore projects
          </Button>
          {resume?.link && (
            <Button
              href={resume.link}
              variant="secondary"
              size="m"
              prefixIcon="document"
              target={resume.target}
            >
              Download CV
            </Button>
          )}
        </Flex>
      </Column>

      {/* Trusted by */}
      <div className="trusted-by-strip">
        <span className="trusted-by-label">{home.trustedByTitle}</span>
        <div className="trusted-by-logos">
          {home.trustedByNames.map((name) => (
            <span key={name} className="trusted-by-name">{name}</span>
          ))}
        </div>
      </div>

      {/* About */}
      <Column
        id="about-me"
        fillWidth
        maxWidth="m"
        gap="16"
        padding="24"
        radius="l"
        className="elevated-card"
      >
        <Heading as="h2" variant="display-strong-s" className="section-heading">
          {home.aboutMeTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-strong">
          {home.aboutSnippet}
        </Text>
        <SmartLink
          suffixIcon="arrowRight"
          style={{ margin: "0", width: "fit-content" }}
          href={about.path}
        >
          <Text variant="body-default-s">Full profile &amp; experience</Text>
        </SmartLink>
      </Column>

      {/* Stats */}
      <Flex
        fillWidth
        gap="16"
        wrap
        horizontal="center"
        vertical="stretch"
        paddingX="8"
      >
        {home.stats.map((s) => (
          <Column
            key={s.label}
            flex={1}
            padding="20"
            gap="8"
            radius="l"
            horizontal="center"
            className="elevated-card"
            style={{ textAlign: "center", minWidth: "min(100%, 10rem)", maxWidth: "14rem" }}
          >
            <Text variant="display-strong-m" className="stat-value">{s.value}</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {s.label}
            </Text>
          </Column>
        ))}
      </Flex>

      {/* Terminal */}
      <Column fillWidth horizontal="center" paddingX="8">
        <TerminalBlock lines={home.terminal} />
      </Column>

      {/* Skills */}
      <Column id="skills" fillWidth gap="20" paddingX="8">
        <Heading as="h2" variant="display-strong-s" className="section-heading">
          {home.skillsSectionTitle}
        </Heading>
        <div className="grid-2x2">
          {home.skillsDisplay.map((block) => (
            <Column
              key={block.title}
              padding="20"
              gap="12"
              radius="l"
              className="elevated-card"
            >
              <Text variant="heading-strong-l">{block.emoji}</Text>
              <Heading as="h3" variant="heading-strong-m">
                {block.title}
              </Heading>
              <Column as="ul" gap="12" marginTop="4">
                {block.bullets.map((line) => (
                  <Text
                    as="li"
                    key={line}
                    variant="body-default-s"
                    onBackground="neutral-strong"
                    className="skill-bullet"
                  >
                    {line}
                  </Text>
                ))}
              </Column>
            </Column>
          ))}
        </div>
      </Column>

      {/* How I help — SERVICES anchor */}
      <Column id="services" fillWidth gap="20" paddingX="8">
        <Heading as="h2" variant="display-strong-s" className="section-heading">
          {home.howIHelpTitle}
        </Heading>
        <div className="grid-2x2">
          {home.howIHelp.map((step) => (
            <Column
              key={step.step}
              padding="20"
              gap="12"
              radius="l"
              className="elevated-card"
            >
              <Flex gap="8" vertical="center">
                <span className="step-badge">{step.step}</span>
                <Text variant="label-default-s" className="step-title">
                  {step.emoji} {step.title}
                </Text>
              </Flex>
              <Text variant="body-default-s" onBackground="neutral-strong">
                {step.description}
              </Text>
              <Text variant="body-default-s" className="step-outcome">
                {step.outcome}
              </Text>
            </Column>
          ))}
        </div>
      </Column>

      {/* Featured projects */}
      <Column id="projects" fillWidth gap="24" paddingX="8" marginBottom="24">
        <Heading as="h2" variant="display-strong-s" className="section-heading">
          {home.featuredProjectsTitle}
        </Heading>
        <FeaturedProjectGrid limit={6} />
        <SmartLink
          suffixIcon="arrowRight"
          style={{ margin: "0", width: "fit-content" }}
          href={work.path}
        >
          <Text variant="body-default-s">View all projects</Text>
        </SmartLink>
      </Column>
    </Column>
  );
}
