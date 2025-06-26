function SchemaMarkup() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Varshil J. Patel",
    url: "https://varshilq.com",
    image: "https://varshilq.com/varshil.jpg",
    sameAs: [
      "https://www.linkedin.com/in/VarshilQ",
      "https://github.com/VarshilQ",
      "https://x.com/VarshilQ",
      "https://facebook.com/VarshilQ",
    ],
    jobTitle: "Software Development Engineer",
    worksFor: { "@type": "Organization", name: "Orglife Industries Pvt. Ltd." },
    description:
      "Varshil J. Patel is a software development engineer specializing in full-stack development, app design, and modern web technologies including React, Node.js, Rust, and Tauri.",
    email: "mailto:reach@varshilq.com",
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
    url: "https://varshilq.com",
    description:
      "Portfolio website of Varshil J. Patel — a full-stack developer building modern, scalable software using React, Node.js, Rust, and cross-platform technologies.",
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: "Varshil J. Patel",
      url: "https://varshilq.com",
    },
    mainEntity: [
      { "@type": "WebPage", name: "Inforamtion", url: "https://varshilq.com" },
      { "@type": "WebPage", name: "Work", url: "https://varshilq.com/work" },
      { "@type": "WebPage", name: "Reach", url: "https://varshilq.com/reach" },
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
