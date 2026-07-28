<script setup lang="ts">
import { RedditData } from '../../reddit/RedditData';

const props = defineProps<{
  //data:RedditData
  open: boolean;
}>();

const emit = defineEmits<{
    close: [];
}>();

</script>

<template>
  <div v-if="props.open" class="side-panel-container">

    <div class="underlay" @click="emit('close')"></div>

    <aside class="side-panel">
        menu items here
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

</style>
