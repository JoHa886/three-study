<script setup>
  import { onMounted } from "vue";
  import { World } from '@/World/World.js';

  const initMap = () => {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');

    // 1. Create an instance of the World app
    const world = new World(container);

    // 2. Render the scene
    world.render();
  }
  onMounted(() => {
    initMap()
  })


</script>

<template>
  <div ref="three_wrap" id="scene-container" class="scene_wrap">

  </div>
</template>
<style lang="css">
  .scene_wrap {
    width: 500px;
    height: 300px;
  }
</style>
