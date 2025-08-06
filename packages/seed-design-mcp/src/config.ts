import { type react } from "@seed-design/figma";
import { createDropdownHandler } from "./handlers/dropdown";

export default {
  extend: {
    componentHandlers: [
      createDropdownHandler,
    ]
  },
} satisfies react.CreatePipelineConfig;
