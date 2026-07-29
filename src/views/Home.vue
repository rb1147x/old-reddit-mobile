<script setup lang="ts">
  import { RedditData } from '../reddit/RedditData';
import Thing from './components/Thing.vue';
import TopToolbar from './components/TopToolbar.vue';

  const props = defineProps<{
    data:RedditData
  }>();

</script>

<template>
  <h1>Is this working?</h1>
  <Thing v-for="post in props.data.posts" :key="post.id" :post="post"></Thing>
</template>

<style scoped>

</style>
