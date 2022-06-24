<script setup>
  import { ref } from 'vue'
  import ProjectCard from '@/components/ProjectCard.vue'
  let id = 0
  const projects = ref([
    {
      id: id++,
      vtitle: 'This site', 
      desc: 'This website that you\'re looking at that I use as my personal website.',
      vlink: 'https://nate-sys.github.io', 
      ghlink: 'https://github.com/nate-sys/nate-sys.github.io', 
      imglink: 'img1.png'},
  ]) 
</script>
<template>
  <div class='container'>
    
  <ProjectCard 
  v-for='project in projects'
  :key='project.id'
  :vtitle='project.vtitle'
  :desc='project.desc'
  :vlink='project.vlink'
  :ghlink='project.ghlink'
  :imglink='project.imglink'
  />
  </div>

</template>
<style scoped>
.container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 20vw));
  grid-gap: 2vw;
  place-content: center;
  color: var(--secfg);
}
</style>
