import { defineStore } from "pinia";
import { ref } from "vue";
export const useWebStore = defineStore(
  "web",
  () => {
    const visitorCount = ref(0);

    const incrementVisitors = () => {
      visitorCount.value++;
    };

    return { visitorCount, incrementVisitors };
  }, 
  {
    persist: true
  }
);
