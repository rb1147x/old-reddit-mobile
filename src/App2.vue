<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref } from 'vue';
import { PageType } from './DataTypes.ts';
  import { RedditData } from './reddit/RedditData.ts';
import TopToolbar from './views/components/TopToolbar.vue';
import SidePanel from './views/components/SidePanel.vue';
import { type Favorite, FavoritesService } from './services/FavoritesService.ts';
import { RedditUtils } from './reddit/RedditUtils.ts';


  const props = defineProps<{
    //data:RedditData
    //subreddit:string | null
  }>();

  const is_side_panel_open = ref(false);

  function toggle_side_panel() {
    is_side_panel_open.value = !is_side_panel_open.value;
  }

  const current_subreddit = ref(RedditUtils.get_current_subreddit());

  const favorites = ref<Favorite[]>(FavoritesService.load());

  const is_favorited = computed(() => {
    if (!current_subreddit.value) {
      return false;
    }

    return favorites.value.some(
      f => f.subreddit == current_subreddit.value
    )
  });

  function toggle_favorite() {
    console.log('toggle fav working' + ' ' + current_subreddit.value);

    if (!current_subreddit.value) return;

    FavoritesService.toggle({
      subreddit: current_subreddit.value,
      title: current_subreddit.value
    });

    favorites.value = FavoritesService.load();
  }

  let stop_url_watcher: (() => void) | undefined;

  onMounted(() => {
    stop_url_watcher = RedditUtils.watch_url_changes(() => {
      current_subreddit.value = RedditUtils.get_current_subreddit();
    });
  });

  onUnmounted(() => {
    stop_url_watcher?.();
  });

/*   RedditUtils.watch_url_changes(() => {
    current_subreddit.value = RedditUtils.get_current_subreddit();
  }); */

</script>

<template>

  <TopToolbar @menu_click="toggle_side_panel" :favorited="is_favorited" @toggle_favorite="toggle_favorite"></TopToolbar>

  <SidePanel :open="is_side_panel_open" @close="is_side_panel_open = false" :favorites="favorites"></SidePanel>

</template>

<style scoped>
 
</style>
