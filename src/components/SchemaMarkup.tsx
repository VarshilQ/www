import { person, socialMediaLinks } from "@/lib/config";

function SchemaMarkup() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Varshil J. Patel",
    url: "https://varshilp.com",
    image: "https://varshilp.com/varshil.jpg",
    sameAs: [
      socialMediaLinks.facebook,
      socialMediaLinks.github,
      socialMediaLinks.linkedin,
      socialMediaLinks.medium,
      socialMediaLinks.reddit,
      socialMediaLinks.twitter,
    ],
    jobTitle: "Software Development Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Orglife Industries Pvt. Ltd.",
    },
    description:
      "Varshil J. Patel is a software development engineer specializing in full-stack development, app design, and modern web technologies including React, Node.js, Rust, and Tauri.",
    email: `mailto:${person.email}`,
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
    url: "https://varshilp.com",
    description:
      "Portfolio website of Varshil J. Patel — a full-stack developer building modern, scalable software using React, Node.js, Rust, and cross-platform technologies.",
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: "Varshil J. Patel",
      url: "https://varshilp.com",
    },
    mainEntity: [
      { "@type": "WebPage", name: "Information", url: "https://varshilp.com" },
      { "@type": "WebPage", name: "Work", url: "https://varshilp.com/work" },
      { "@type": "WebPage", name: "Reach", url: "https://varshilp.com/reach" },
    ],
  };

  // const pageData = {
  //   "@context": "https://schema.org",
  //   "@type": "WebPage",
  //   name: "Information",
  //   url: "https://varshilp.com",
  //   description: "Homepage of Varshil J. Patel’s portfolio.",
  //   isPartOf: {
  //     "@type": "WebSite",
  //     url: "https://varshilp.com",
  //   },
  //   author: {
  //     "@type": "Person",
  //     name: "Varshil J. Patel",
  //   },
  // };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Information",
        item: "https://varshilp.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://varshilp.com/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Reach",
        item: "https://varshilp.com/reach",
      },
    ],
  };

  const contactData = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    // telephone: "+91-XXXXXXXXXX",
    contactType: "Customer Support",
    email: `mailto:${person.email}`,
    availableLanguage: ["English", "Gujarati", "Hindi"],
  };

  return (
    <>
      {[personData, siteData, breadcrumbData, contactData].map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

export default SchemaMarkup;
