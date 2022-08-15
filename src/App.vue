<script setup>
import { RouterView } from "vue-router";
import NavbarHeader from "@/components/NavbarHeader.vue";
</script>

<template>
  <div class="mx-56 px-2">
    <navbar-header></navbar-header>
    <div class="p-10">
      <router-view />
    </div>
  </div>
</template>
