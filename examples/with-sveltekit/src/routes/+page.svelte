<script lang="ts">
  import { AuiConfig, provideAui } from "@openagentui/svelte";
  import { Suggestions } from "@openagentui/core/store";
  import { AISDKThreads } from "@openagentui/ai-sdk";
  import App from "$lib/App.svelte";

  provideAui(
    AuiConfig({
      threads: AISDKThreads(),
      suggestions: Suggestions([
        {
          title: "Plan a weekend trip",
          label: "three stops, one day each",
          prompt: "Plan a weekend trip with three stops, one day each.",
        },
        {
          title: "Explain streaming",
          label: "how token streaming works",
          prompt: "Explain how token streaming works in chat UIs.",
        },
        {
          title: "Write a haiku",
          label: "about the terminal",
          prompt: "Write a haiku about the terminal.",
        },
      ]),
    }),
  );
</script>

<App />
