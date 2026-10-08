<script setup lang="ts">
import { AISDKChat } from "@openagentui/ai-sdk";
import { AuiConfig, AuiProvider } from "@openagentui/vue";
import Thread from "./openagentui/thread.vue";

const config = AuiConfig({ threads: AISDKChat() });
</script>

<template>
  <AuiProvider :config="config">
    <Thread />
  </AuiProvider>
</template>
