<script setup lang="ts">
import { onMounted, ref } from "vue";
import Navbar from "./components/Navbar.vue";

const activeSection = ref("home");

const handleActiveSection = (section: string) => {
  activeSection.value = section;
};

const showToast = ref(false);

onMounted(() => {
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 5000);
});
</script>

<template>
  <div className="flex flex-col min-h-screen max-w-7xl mx-auto my-8">
    <header id="navbar" className="relative">
      <Navbar
        :active-section="activeSection"
        @update:active-section="handleActiveSection"
      />
    </header>

    <main>
      <router-view />
    </main>
    <div
      v-if="showToast"
      className="fixed bottom-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded-md shadow-lg"
    >
      Welcome to my site! Thanks for visiting 👋
    </div>
  </div>
</template>

<style></style>
