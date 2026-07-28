<script setup lang="ts">
  import { ref } from 'vue';
import { PageType } from './DataTypes.ts';
  import { RedditData } from './reddit/RedditData.ts';
import TopToolbar from './views/components/TopToolbar.vue';
import SidePanel from './views/components/SidePanel.vue';


  const props = defineProps<{
    data:RedditData
  }>();

  const is_side_panel_open = ref(false);

  function toggle_side_panel() {
    is_side_panel_open.value = !is_side_panel_open.value;
  }

</script>

<template>

  <TopToolbar @menu_click="toggle_side_panel"></TopToolbar>

  <SidePanel :open="is_side_panel_open" @close="is_side_panel_open = false"></SidePanel>

</template>

<style scoped>
 
</style>
