<script setup>
  import * as THREE from 'three';
  import { ref, onMounted } from "vue"

  const three_wrap = ref(null)
  onMounted(() => {
    console.log(three_wrap.value)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, three_wrap.value.offsetWidth / three_wrap.value.offsetHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();



    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    
    renderer.setSize(three_wrap.value.offsetWidth, three_wrap.value.offsetHeight);

    three_wrap.value.appendChild(renderer.domElement);
    animate();
  })


</script>

<template>
  <div ref="three_wrap" class="scene_wrap">

  </div>
</template>
<style lang="css">
  .scene_wrap {
    width: 500px;
    height: 300px;
  }
</style>
