import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProjectsStore = defineStore(
  "projects",
  () => {

    // Projects data using ref for reactivity
    const projects = ref([
      {
        id: 1,
        title: "tcg-gallery",
        description:
          "all in one tcg collection manager, card gallery, card database, and card price tracker",
        technologies: ["Next.js", "Hono", "Cloudflare Workers", "PostgreSQL", "PokemonTCG API"],
        featured: true,
      },
      {
        id: 2,
        title: "repose.ai",
        description:
          "doom scroll down a rabbit hole of information with the help of ai",
        technologies: ["Next.js", "PostgreSQL", "Google Gemini 2.0", "Vercel AI SDK"],
        featured: true,
      },
      {
        id: 3,
        title: "financial app clone",
        description:
          "a financial banking app clone with a focus on security and user experience",
        technologies: ["Next.js", "Supabase", "PostgreSQL"],
        featured: false,
      },
    ]);

    // Function to add a new project
    const newProject = ref({
      title: "",
      description: "",
      technologies: "",
      featured: false,
    });

    const addProject = () => {
      if (newProject.value.title && newProject.value.description) {
        projects.value.push({
          id: projects.value.length + 1,
          title: newProject.value.title,
          description: newProject.value.description,
          technologies: newProject.value.technologies
            .split(",")
            .map((tech) => tech.trim()),
          featured: newProject.value.featured,
        });

        // Reset form
        newProject.value = {
          title: "",
          description: "",
          technologies: "",
          featured: false,
        };
      }
    };

    // Filter projects
    const showFeaturedOnly = ref(false);

    const filteredProjects = computed(() => {
      return showFeaturedOnly.value
        ? projects.value.filter((project) => project.featured)
        : projects.value;
    });

    // Computed property for project count
    const projectCount = computed(() => {
      return `Showing ${filteredProjects.value.length} of ${projects.value.length} projects`;
    });

    // Function to remove a project
    const removeProject = (id: number) => {
      projects.value = projects.value.filter((project) => project.id !== id);
    };

    return {
      projects,
      newProject,
      addProject,
      showFeaturedOnly,
      filteredProjects,
      projectCount,
      removeProject,
    };
  },
  {
    persist: true,
  }
);
