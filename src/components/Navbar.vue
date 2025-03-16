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
        <router-link to="/" className="hidden md:block col-start-1 col-end-2">
          <span className="font-semibold text-white">> ryanside</span>
        </router-link>
        <div className="flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-x-6">
            <li>
              <router-link
                to="/"
                className="font-medium cursor-pointer hover:text-white"
                @click="handleClick('home')"
                >home</router-link
              >
            </li>
            <li className="" role="presentation">|</li>
            <li>
              <router-link
                to="/projects"
                className="font-medium cursor-pointer hover:text-white"
                @click="handleClick('projects')"
                >projects</router-link
              >
            </li>
            <li className="" role="presentation">|</li>
            <li>
              <router-link
                to="/contact"
                className="font-medium cursor-pointer hover:text-white"
                @click="handleClick('contact')"
                >contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        className="hidden group col-start-2 col-end-3 lg:flex items-center justify-end gap-1.5 lg:row-start-1 lg:gap-3"
      >
        <div className="flex items-center gap-x-3">
          <button
            @click="webStore.incrementVisitors"
            className="font-medium hover:text-lime-500 transition-colors duration-200"
          >
            click me!
          </button>
          <span className="">|</span>
          <a href="" className="font-semibold text-lime-500"
            >visitors: {{ webStore.visitorCount }}</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import { useWebStore } from "../stores/web";

const webStore = useWebStore();

const emit = defineEmits(["update:active-section"]);

const handleClick = (section: string) => {
  emit("update:active-section", section);
};
</script>
