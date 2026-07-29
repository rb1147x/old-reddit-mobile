<script setup lang="ts">

const props = defineProps<{
  //data:RedditData
  favorited: boolean;
}>();

const emit = defineEmits<{
  toggle: [];
}>();

</script>

<template>
    <button class="favorite-button" @click="emit('toggle')">
    <svg
      v-if="props.favorited"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fill="currentColor"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>

    <svg
      v-else
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        d="M12 2l3.09 6.26L22 9.24l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.11 2 9.24l6.91-.98L12 2z"
      />
    </svg>
  </button>
</template>

<style scoped>
    .favorite-button {
        color: gold;
    }
</style>
