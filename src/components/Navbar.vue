<template>
  <nav
    className="flex flex-col gap-y-3 items-center px-3 sm:px-5 w-full mx-auto max-w-7xl"
  >
    <div
      className="grid w-full grid-cols-[auto_1fr] grid-rows-1 md:grid-rows-2 md:gap-3 lg:grid-rows-1"
    >
      <div
        className="col-start-1 col-end-3 flex items-center gap-x-3 lg:col-end-2 lg:row-start-1"
      >
        <a href="/" className="col-start-1 col-end-2">
          <span className="font-semibold text-white">> ryanside</span>
        </a>
        <div className=" md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex flex-wrap gap-x-6 md:flex-nowrap">
            <li>
              <button href="/" className="font-medium cursor-pointer" @click="handleClick('home')">home</button>
            </li>
            <li className="text-decoration" role="presentation">|</li>
            <li>
              <button href="/" className="font-medium cursor-pointer" @click="handleClick('projects')">projects</button>
            </li>
            <li className="text-decoration" role="presentation">|</li>
            <li>
              <button href="/" className="font-medium cursor-pointer" @click="handleClick('contact')">contact</button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="group col-start-2 col-end-3 flex items-center justify-end gap-1.5 lg:row-start-1 lg:gap-3"
      >
        <div className="flex items-center gap-x-3">
          <button
            @click="incrementVisitors"
            className="font-medium hover:text-lime-500 transition-colors duration-200"
          >
            click me!
          </button>
          <span className="">|</span>
          <a href="" class="font-semibold text-lime-500">visitors: {{ visitorCount }}</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
// Counter for interactivity
const visitorCount = ref(0);
const incrementVisitors = () => {
  visitorCount.value++;
};

const emit = defineEmits(["update:active-section"]);

const handleClick = (section: string) => {
  emit("update:active-section", section);
};
</script>
