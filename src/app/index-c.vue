<template>
    <main-component></main-component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainComponent from "@/pages/main/index-c.vue";

export default defineComponent({
    components: { MainComponent },
});
</script>
<style>
@import "./index.scss";
</style>
