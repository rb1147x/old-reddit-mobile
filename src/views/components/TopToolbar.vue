<script setup lang="ts">
import { RedditData } from '../../reddit/RedditData';
import FavoriteButton from './FavoriteButton.vue';

const props = defineProps<{
  //data:RedditData
  favorited:boolean;
}>();

const emit = defineEmits<{
  menu_click: [];
  toggle_favorite: [];
}>();

function menu_clicked() {
  emit('menu_click');
}

function toggle_favorite() {
  emit("toggle_favorite");
}


</script>

<template>
  <div class="toolbar-wrapper">
    <button class="menu" @click="menu_clicked">Menu</button>
    <FavoriteButton :favorited="props.favorited" @toggle="toggle_favorite"></FavoriteButton>
  </div>
</template>

<style scoped>
.toolbar-wrapper {
  display: flex;
  gap: 8px;
  padding: 4px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-family: sans-serif;
}

.menu {
  padding: 4px;
  border-radius: 4px;
  border: 1px solid white;

}
</style>
