"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";

import Teaser from "./Teaser";

storyblokInit({
  accessToken: "j7Y8xKBF6ZzuqhMP6XIBMQtt",
  use: [apiPlugin],
  apiOptions: {
    region: "en",
  },
  components: {
    teaser: Teaser,
  },
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children;
}
