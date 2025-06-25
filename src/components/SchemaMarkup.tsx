function SchemaMarkup() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Varshil J. Patel",
    url: "https://varshil.info",
    image: "https://varshil.info/varshil.jpg",
    sameAs: [
      "https://www.linkedin.com/in/varshiljpatel",
      "https://github.com/varshiljpatel",
      "https://x.com/varshiljpatel",
      "https://facebook.com/Varshil.J.Patel",
    ],
    jobTitle: "Software Development Engineer",
    worksFor: { "@type": "Organization", name: "Self-employed" },
    description:
      "Varshil J. Patel is a software development engineer specializing in full-stack development, app design, and modern web technologies including React, Node.js, Rust, and Tauri.",
    email: "mailto:reach@varshil.info",
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Node.js",
      "Rust",
      "Tauri",
      "SQLite",
      "TypeScript",
      "Cross-Platform Apps",
      "System Design",
    ],
  };

  const siteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Varshil J. Patel Portfolio",
    url: "https://varshil.info",
    description:
      "Portfolio website of Varshil J. Patel — a full-stack developer building modern, scalable software using React, Node.js, Rust, and cross-platform technologies.",
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: "Varshil J. Patel",
      url: "https://varshil.info",
    },
    mainEntity: [
      { "@type": "WebPage", name: "Inforamtion", url: "https://varshil.info" },
      { "@type": "WebPage", name: "Work", url: "https://varshil.info/work" },
      { "@type": "WebPage", name: "Reach", url: "https://varshil.info/reach" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteData) }}
      />
    </>
  );
}

export default SchemaMarkup;
