<script setup lang="ts">
import { ref } from "vue";

// Toggle for extra information
const showExtraInfo = ref(false);

const toggleExtraInfo = () => {
  showExtraInfo.value = !showExtraInfo.value;
};
</script>

<template>
  <div className="flex flex-col gap-y-3 px-3 w-full mx-auto my-20 max-w-7xl">
    <h1 className="text-3xl tracking-tighter my-2 text-white">
      <span className="text-indigo-500">|</span>
      full stack dev
    </h1>
    <div className="flex flex-col gap-y-3 px-3">
      <pre className="whitespace-pre">
⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄
⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄
⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄
⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄
⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄
⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄
⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄
⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄
⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄.
⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄
⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄</pre
      >
      <p className="tracking-wide text-lg">
        Hi! I'm ryanside (Ryan), a full-stack dev. Welcome to my corner of the
        internet where I share my projects, thoughts, and journey. Founder of +
        currently working on
        <a
          href="https://tcg-gallery.fly.dev/"
          className="text-indigo-500 underline"
          >tcg-gallery</a
        >
        and
        <a href="/" target="_blank" className="text-indigo-500 underline"
          >repose.ai</a
        >.
      </p>
      <p className="tracking-wide text-lg">
        Experienced with React, Next, Node, Hono, Express, SQL, Supabase,
        Tailwind + much more.
      </p>

      <button
        @click="toggleExtraInfo"
        className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-sm my-2 transition-colors duration-200 w-fit"
      >
        {{ showExtraInfo ? "hide details" : "show more about me" }}
      </button>

      <div
        v-show="showExtraInfo"
        className="bg-neutral-800 px-4 pt-4 pb-10 rounded-md my-2"
      >
        <h3 className="text-xl text-white mb-2">more about me...</h3>
        <p className="tracking-wide mb-2">
          I started my coding journey in 2022. Growing up, I've always been
          fond of creating things on a computer: music production, motion design,
          video editing, content creation - And now, its creating software.
        </p>
        <p className="tracking-wide ">
          When I'm not coding or consuming coding content, you can find me
          playing video games, making music, watching anime/shows, reading
          manga/novels, watching livestreams, or just scowering the internet.
        </p>
      </div>

      <div class="border-dashed border-t-2 border-neutral-600 my-2"></div>

      <p className="tracking-wide text-lg">
        Lets make cool stuff.
        <a href="/" target="_blank" className="text-lime-500 underline"
          >Contact me</a
        >.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
