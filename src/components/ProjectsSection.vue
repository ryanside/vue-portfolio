<script setup lang="ts">
import { ref, computed } from 'vue'

// Projects data using ref for reactivity
const projects = ref([
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce website built with Vue.js and Vuex for state management.',
    technologies: ['Vue.js', 'Vuex', 'Node.js', 'Express', 'MongoDB'],
    thumbnail: '🛒',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality for organizing tasks.',
    technologies: ['Vue.js', 'Vuetify', 'Firebase'],
    thumbnail: '📝',
    featured: false
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that shows current weather and forecasts for multiple locations.',
    technologies: ['Vue.js', 'Axios', 'OpenWeather API'],
    thumbnail: '☁️',
    featured: true
  }
])

// Function to add a new project
const newProject = ref({
  title: '',
  description: '',
  technologies: '',
  thumbnail: '🔄',
  featured: false
})

const addProject = () => {
  if (newProject.value.title && newProject.value.description) {
    projects.value.push({
      id: projects.value.length + 1,
      title: newProject.value.title,
      description: newProject.value.description,
      technologies: newProject.value.technologies.split(',').map(tech => tech.trim()),
      thumbnail: newProject.value.thumbnail,
      featured: newProject.value.featured
    })
    
    // Reset form
    newProject.value = {
      title: '',
      description: '',
      technologies: '',
      thumbnail: '🔄',
      featured: false
    }
  }
}

// Filter projects
const showFeaturedOnly = ref(false)

const filteredProjects = computed(() => {
  return showFeaturedOnly.value 
    ? projects.value.filter(project => project.featured)
    : projects.value
})

// Computed property for project count
const projectCount = computed(() => {
  return `Showing ${filteredProjects.value.length} of ${projects.value.length} projects`
})

// Function to remove a project
const removeProject = (id: number) => {
  projects.value = projects.value.filter(project => project.id !== id)
}
</script>

<template>
  <div class="projects-section">
    <h2>My Projects</h2>
    
    <div class="filter-controls">
      <button @click="showFeaturedOnly = !showFeaturedOnly" class="filter-button">
        {{ showFeaturedOnly ? 'Show All Projects' : 'Show Featured Only' }}
      </button>
      <p class="project-count">{{ projectCount }}</p>
    </div>
    
    <div v-if="filteredProjects.length === 0" class="no-projects">
      <p>No projects available. Add a new project to get started!</p>
    </div>
    
    <div class="projects-grid">
      <div v-for="project in filteredProjects" :key="project.id" class="project-card">
        <div class="project-header">
          <span class="project-thumbnail">{{ project.thumbnail }}</span>
          <h3>{{ project.title }}</h3>
          <span v-if="project.featured" class="featured-badge">Featured</span>
        </div>
        <p class="project-description">{{ project.description }}</p>
        <div class="technologies">
          <span v-for="(tech, index) in project.technologies" :key="index" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        <button @click="removeProject(project.id)" class="remove-button">Remove</button>
      </div>
    </div>
    
    <div class="add-project-form">
      <h3>Add New Project</h3>
      <div class="form-group">
        <label for="title">Title:</label>
        <input id="title" type="text" v-model="newProject.title" placeholder="Project title">
      </div>
      
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="newProject.description" placeholder="Project description"></textarea>
      </div>
      
      <div class="form-group">
        <label for="technologies">Technologies (comma-separated):</label>
        <input id="technologies" type="text" v-model="newProject.technologies" placeholder="Vue.js, Vuex, etc.">
      </div>
      
      <div class="form-group">
        <label for="thumbnail">Thumbnail (emoji):</label>
        <input id="thumbnail" type="text" v-model="newProject.thumbnail" placeholder="🚀">
      </div>
      
      <div class="form-group checkbox">
        <input id="featured" type="checkbox" v-model="newProject.featured">
        <label for="featured">Featured Project</label>
      </div>
      
      <button @click="addProject" class="add-button">Add Project</button>
    </div>
  </div>
</template>

<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h2, h3 {
  color: var(--primary-color);
}

.filter-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-count {
  font-size: 0.9rem;
  color: #666;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-thumbnail {
  font-size: 2rem;
  margin-right: 0.5rem;
}

.featured-badge {
  background-color: var(--accent-color);
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-left: auto;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: var(--secondary-color);
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.add-project-form {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-group.checkbox {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

label {
  font-weight: bold;
  color: var(--secondary-color);
}

input, textarea {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #35a073;
}

.filter-button {
  background-color: var(--secondary-color);
}

.remove-button {
  background-color: #e74c3c;
  font-size: 0.8rem;
  padding: 0.3rem 0.5rem;
}

.remove-button:hover {
  background-color: #c0392b;
}

.no-projects {
  background-color: #fafafa;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  border: 1px dashed #ddd;
}
</style> 