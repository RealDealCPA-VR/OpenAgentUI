<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useAui } from "@openagentui/vue";
import type {} from "@openagentui/core/store";
import type { ToolCallMessagePartComponent } from "@openagentui/core/react";
import WeatherToolUI from "./WeatherToolUI.vue";

const aui = useAui();
let unregister: (() => void) | undefined;
onMounted(() => {
  unregister = aui.tools.setToolUI(
    "weather",
    WeatherToolUI as unknown as ToolCallMessagePartComponent,
  );
});
onUnmounted(() => unregister?.());
</script>

<template><slot /></template>
