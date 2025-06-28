import React from "react";
import {
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiRedditFill,
  RiMediumFill,
} from "@remixicon/react";
import { socialMediaLinks } from "@/lib/config";

function SocialLinks() {
  return (
    <div className="flex items-center gap-10">
      <a
        href={socialMediaLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterFill
          size={16}
          className="cursor-pointer hover:text-primary transition"
        />
      </a>
      <a
        href={socialMediaLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiLinkedinBoxFill
          size={16}
          className="cursor-pointer hover:text-primary transition"
        />
      </a>
      <a
        href={socialMediaLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubFill
          size={16}
          className="cursor-pointer hover:text-primary transition"
        />
      </a>
      <a
        href={socialMediaLinks.reddit}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiRedditFill
          size={16}
          className="cursor-pointer hover:text-primary transition"
        />
      </a>
      <a
        href={socialMediaLinks.medium}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiMediumFill
          size={16}
          className="cursor-pointer hover:text-primary transition"
        />
      </a>
    </div>
  );
}

export default SocialLinks;
