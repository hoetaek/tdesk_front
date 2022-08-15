<script setup>
import { RouterView } from "vue-router";
import NavbarHeader from "@/components/NavbarHeader.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto px-2">
    <navbar-header></navbar-header>
    <router-view />
  </div>
</template>
