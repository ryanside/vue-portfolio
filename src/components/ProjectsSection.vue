<script setup lang="ts">
import { Trash2 as TrashIcon } from "lucide-vue-next";
import { useProjectsStore } from "../stores/projects";

const projectsStore = useProjectsStore();
</script>

<template>
  <div className="flex flex-col gap-y-3 px-3 w-full mx-auto my-20 max-w-7xl">
    <h1 className="text-3xl tracking-tighter my-2 text-white">
      <span className="text-rose-500">|</span>
      my projects
    </h1>
    <div className="flex flex-col px-4 gap-y-4">
      <div className="flex justify-between items-center mt-3">
        <button
          @click="
            projectsStore.showFeaturedOnly = !projectsStore.showFeaturedOnly
          "
          className="bg-rose-500 hover:bg-rose-600 text-white p-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-md transition-colors duration-200"
        >
          {{
            projectsStore.showFeaturedOnly
              ? "Show All Projects"
              : "Show Featured Only"
          }}
        </button>
        <p className="text-sm text-neutral-400">
          {{ projectsStore.projectCount }}
        </p>
      </div>

      <div
        v-if="projectsStore.filteredProjects.length === 0"
        className="bg-neutral-900 px-4 py-8 rounded-md text-center border border-dashed border-neutral-600"
      >
        <p className="text-white">
          No projects available. Add a new project to get started!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="project in projectsStore.filteredProjects"
          :key="project.id"
          className="bg-neutral-900 rounded-md p-4 flex flex-col gap-y-3"
        >
          <div className="flex items-center gap-x-2">
            <h3 className="text-xl text-white text-nowrap">{{ project.title }}</h3>
            <div className="flex items-center gap-x-2 ml-auto">
              <span
                v-if="project.featured"
                className="ml-auto bg-rose-500 text-white text-xs px-2 py-1 rounded-sm"
              >
                Featured
              </span>
              <button
                @click="projectsStore.removeProject(project.id)"
                className=" bg-black hover:bg-red-700 text-white px-1.5 py-1 rounded-sm text-sm transition-colors duration-200"
              >
                <TrashIcon height="16" width="16" />
              </button>
            </div>
          </div>
          <p className="">{{ project.description }}</p>
          <div className="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in project.technologies"
              :key="index"
              className="bg-neutral-800 text-xs px-2 py-1 rounded-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <div className="border-dashed border-t-2 border-neutral-600 my-4"></div>

      <div className="bg-neutral-900 p-4 rounded-md">
        <h3 className="text-xl text-white mb-4">
          <span className="text-rose-500">|</span>
          add new project
        </h3>

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <label for="title" className="text-white">Title:</label>
            <input
              id="title"
              type="text"
              v-model="projectsStore.newProject.title"
              className="bg-neutral-700 text-white rounded-sm px-3 py-2 focus:outline-none focus:border-rose-500 transition-colors duration-200"
              placeholder="Project title"
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label for="description" className="text-white">Description:</label>
            <textarea
              id="description"
              v-model="projectsStore.newProject.description"
              className="bg-neutral-700 text-white rounded-sm px-3 py-2 focus:outline-none focus:border-rose-500 transition-colors duration-200"
              placeholder="Project description"
              rows="3"
            ></textarea>
          </div>

          <div className="flex flex-col gap-y-1">
            <label for="technologies" className="text-white"
              >Technologies (comma-separated):</label
            >
            <input
              id="technologies"
              type="text"
              v-model="projectsStore.newProject.technologies"
              className="bg-neutral-700 text-white rounded-sm px-3 py-2 focus:outline-none focus:border-rose-500 transition-colors duration-200"
              placeholder="Vue.js, Fastify, etc."
            />
          </div>

          <div className="flex items-center gap-x-2">
            <input
              id="featured"
              type="checkbox"
              v-model="projectsStore.newProject.featured"
              className="bg-neutral-700 border rounded-sm focus:ring-rose-500"
            />
            <label for="featured" className="text-white"
              >Featured Project</label
            >
          </div>

          <button
            @click="projectsStore.addProject"
            className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-sm transition-colors duration-200 mt-2 self-start"
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
