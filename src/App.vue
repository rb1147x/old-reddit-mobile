<script setup lang="ts">
  import { PageType } from './DataTypes';
  import { RedditData } from './reddit/RedditData';
  import Home from './views/Home.vue';
  import Post from './views/Post.vue';
  import Subreddit from './views/Subreddit.vue';

  const props = defineProps<{
    data:RedditData
  }>();

</script>

<template>
  <Home v-if="props.data.page_type == PageType.Home" v-bind="props"></Home>
  <Post v-else-if="props.data.page_type == PageType.Post" v-bind="props"></Post>
  <Subreddit v-else-if="props.data.page_type == PageType.Subreddit" v-bind="props"></Subreddit>
  <div v-else>Unsupported page</div>
</template>

<style scoped>
  
</style>
