import React from "react";
import "./DiscordContact.css";

export default function DiscordContact() {
  return (
    <nav className="DiscordContact">
      <h1>
        <a
          className="Discord"
          rel="noreferrer"
          href={"https://discord.com/invite/midjourney"}
          target={"_blank"}
        >
          Discord
        </a>
      </h1>

      <h1>
        <a
          className="About"
          rel="noreferrer"
          href={"https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F"}
          target={"_blank"}
        >
          About
        </a>
      </h1>
    </nav>
  );
}
