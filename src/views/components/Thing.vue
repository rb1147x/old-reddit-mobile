<script setup lang="ts">
  import type { RedditPost } from '@/reddit/RedditPost.ts';

  const props = defineProps<{
    post:RedditPost
  }>();

</script>

<template>

  <h2>{{ props.post.title }}</h2>
  <h2>{{ props.post.author }}</h2>

</template>

<style scoped>
  .thing-wrapper {
    display: flex;
    border-bottom: 1px solid #2F3E56;
    padding: 10px;
  }
</style>
