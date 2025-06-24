import React from "react";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "@remixicon/react";
import { socialMediaLinks } from "@/lib/config";

function SocialLinks() {
  return (
    <div className="flex items-center gap-12">
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
        href={socialMediaLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFacebookCircleFill
          size={16}
          className="cursor-pointer hover:text-primary transition"
        />
      </a>
    </div>
  );
}

export default SocialLinks;
