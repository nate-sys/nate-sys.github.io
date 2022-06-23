<script setup>
  import {ref, computed} from 'vue'
  const props = defineProps({
   vtitle: String,
   desc: String,
   vlink: String,
   ghlink: String,
   imglink: String
  })
  const bgimginline = computed( 
    ()=>{
        return `background-image: url("./assets/${props.imglink}");`;
    }
  )
</script>
<template>
  <div class='container-project'>
    <div class='bgimg' 
    :style="bgimginline">
    </div>
    <h3> {{vtitle}} </h3>
    <p> {{desc}} </p>
    <div class='container-links'>
      <a 
      :href='vlink' 
      class='btn-live'>
        Live preview
      </a>
      <a 
      :href='ghlink'
      class='btn-repo'>
        Github repo
      </a>
    </div>
  </div>
</template>
<style scoped>
.container-project{
  padding: 1rem;
  grid-template-columns: 1fr .2fr .5fr .2fr;
}
.bgimg{
  aspect-ratio: 4/3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
  border-radius: .5ch;
}
.container-links{
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
}
.container-links > a {
  padding: 0.5ch 1ch;
  border-radius: 2ch;
  text-decoration:none;
}

.btn-live{
  color: #fff;
  background: var(--accentbg); 
}
.btn-repo{
  color: var(--accentfg);
}
</style>

