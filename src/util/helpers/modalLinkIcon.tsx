import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

export function modalLinkIcon(name: string) {
  if (name === "youtube") {
    return <FontAwesome5 name={"youtube"} size={24} color="red" />;
  }

  if (name === "twitter") {
    return <FontAwesome5 name={"twitter"} size={24} color="lightblue" />;
  }

  if (name === "facebook") {
    return <FontAwesome5 name={"facebook"} size={24} color="blue" />;
  }

  if (name === "instagram") {
    return <FontAwesome5 name={"instagram"} size={24} color="purple" />;
  }

  if (name === "itunes") {
    return <FontAwesome5 name="itunes" size={24} color="black" />;
  }

  if (name === "spotify") {
    return <FontAwesome5 name="spotify" size={24} color="green" />;
  }

  if (name === "homepage") {
    return <FontAwesome5 name="home" size={24} color="black" />;
  }

  return <FontAwesome5 name={"buffer"} size={24} color="black" />;
}
