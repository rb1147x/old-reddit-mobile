<script setup lang="ts">
import type { Favorite } from '@/services/FavoritesService.ts';
import { RedditData } from '../../reddit/RedditData';
import FavoriteButton from './FavoriteButton.vue';

const props = defineProps<{
  //data:RedditData
  open: boolean;
  favorites: Favorite[];
}>();

const emit = defineEmits<{
    close: [];
}>();

</script>

<template>
  <div v-if="props.open" class="side-panel-container">

    <div class="underlay" @click="emit('close')"></div>

    <aside class="side-panel">
            
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li v-for="favorite in favorites" :key="favorite.subreddit">
          <a :href="`/r/${favorite.subreddit}`">{{ favorite.title }}</a>
        </li>
      </ul>
    </aside>

  </div>
</template>

<style scoped>

.side-panel-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  top: 39px;
}

.underlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, .75);
}

.side-panel {
  position: absolute;
  top: 0;
  left: 0;

  width: 75vw;
  height: 100vh;

  background: white;
}

ul {
    gap: 12px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-family: sans-serif;
    list-style-type: none;
    padding-left: 14px;
}

</style>
