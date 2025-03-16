<script setup lang="ts">
import { ref, watch } from "vue";
import { Github } from "lucide-vue-next";
// Form data using refs for two-way binding with v-model
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// Form submission
const isSubmitted = ref(false);
const isSubmitting = ref(false);

const submitForm = () => {
  isSubmitting.value = true;

  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;

    // Reset form after submission
    formData.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }, 1500);
};

// Use watch to detect changes in form fields
watch(
  () => formData.value.name,
  (newValue) => {
    console.log(`Name changed to: ${newValue}`);
  }
);

watch(
  () => formData.value.email,
  (newValue) => {
    console.log(`Email changed to: ${newValue}`);
  }
);

watch(
  () => formData.value.message,
  (newValue) => {
    console.log(`Message changed to: ${newValue.substring(0, 10)}...`);
  }
);
</script>

<template>
  <div className="flex flex-col gap-y-3 px-3 w-full mx-auto my-20 max-w-7xl">
    <h1 className="text-3xl tracking-tighter my-2 text-white">
      <span className="text-lime-500">|</span>
      contact me
    </h1>

    <div
      v-if="isSubmitted"
      className="bg-neutral-800 px-4 py-4 rounded-md my-2 text-center"
    >
      <h3 className="text-xl text-white mb-2">Thank you for your message!</h3>
      <p className="tracking-wide mb-4">
        I'll get back to you as soon as possible.
      </p>
      <button
        @click="isSubmitted = false"
        className="bg-lime-500 hover:bg-lime-400 text-black px-4 py-2 rounded-sm transition-colors duration-200"
      >
        send another message
      </button>
    </div>

    <form
      v-else
      @submit.prevent="submitForm"
      className="flex flex-col gap-y-4 px-4 py-4 rounded-md"
    >
      <div className="flex flex-col gap-y-1">
        <label for="name" className="text-white">Name*</label>
        <input
          id="name"
          type="text"
          v-model="formData.name"
          :className="'bg-neutral-700 text-white rounded-sm px-3 py-2 focus:outline-none focus:border-lime-500 transition-colors duration-200'"
          placeholder="Your name"
          required
        />
      </div>

      <div className="flex flex-col gap-y-1">
        <label for="email" className="text-white">Email*</label>
        <input
          id="email"
          type="email"
          v-model="formData.email"
          :className="'bg-neutral-700 text-white rounded-sm px-3 py-2 focus:outline-none focus:border-lime-500 transition-colors duration-200'"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="flex flex-col gap-y-1">
        <label for="subject" className="text-white">Subject</label>
        <input
          id="subject"
          type="text"
          v-model="formData.subject"
          :className="'bg-neutral-700 text-white rounded-sm px-3 py-2 focus:outline-none focus:border-lime-500 transition-colors duration-200'"
          placeholder="Message subject"
          required
        />
      </div>

      <div className="flex flex-col gap-y-1">
        <label for="message" className="text-white">Message*</label>
        <textarea
          id="message"
          v-model="formData.message"
          :className="'bg-neutral-700 text-white rounded-sm px-3 py-2 focus:outline-none focus:border-lime-500 transition-colors duration-200'"
          placeholder="Your message here..."
          rows="5"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        className="bg-lime-500 hover:bg-lime-400 text-black px-4 py-2 rounded-sm transition-colors duration-200 disabled:bg-neutral-600 disabled:cursor-not-allowed disabled:text-white"
      >
        <span v-if="isSubmitting">Sending...</span>
        <span v-else>Send Message</span>
      </button>
    </form>

    <div className="border-dashed border-t-2 border-neutral-600 my-2"></div>
    <div>
      <h3>
        <span className="text-lime-500">|</span>
        my links
      </h3>
      <a
        href="https://github.com/ryanside"
        target="_blank"
        className="flex items-center gap-x-2 my-2 ml-3 underline underline-offset-6"
      >
        <Github height="16" width="16" /> github
      </a>
    </div>
  </div>
</template>

<style scoped></style>
