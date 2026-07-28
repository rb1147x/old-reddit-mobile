<script setup lang="ts">
import { RedditData } from '../../reddit/RedditData';

const props = defineProps<{
  //data:RedditData
}>();

const emit = defineEmits<{
  menu_click: [];
}>();

function menu_clicked() {
  emit('menu_click');
}

</script>

<template>
  <div class="toolbar-wrapper">
    <button class="menu" @click="menu_clicked">Menu</button>
  </div>
</template>

<style scoped>
.toolbar-wrapper {
  display: block;
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
