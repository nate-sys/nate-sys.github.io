<script setup>
  import Home from './Home.vue'
  import Projects from './Projects.vue'
  import Contact from './Contact.vue'
  import { ref, computed } from 'vue'
  const views = {
    Home,
    Projects,
    Contact
  }
  const night = ref(false)
  const colors = computed(
    ()=>{
      return !night.value ? {
        '--pribg':'#fff',
        '--secbg': '#fcfcfc',
        '--accentbg': '#49e',
        '--prifg': '#000',
        '--secfg': '#888',
        '--accentfg': '#49e'
      }:{
        '--pribg':'#121212',
        '--secbg': '#333',
        '--accentbg': '#49e',
        '--prifg': '#fff',
        '--secfg': '#eef',
        '--accentfg': '#49e'
      }
    }
  )
  const changeColors = () => {
    night.value = !night.value
  }
  const currentView = ref('Home')
</script>

<template>
  <div class='master-container' :style='colors'>
  <nav class='soft-pad colors'>
    <button class='btn' @click="()=> currentView ='Home'">nate-sys</button>
    <div class='items'>
      <button
      v-for='(_,view) in views'
      :key='view'
      @click='currentView = view'
      :class='{currentViewBtn: currentView === view}'>
        {{view}}
      </button>
      <button @click ='changeColors' class='btn-theme'>
        Theme
      </button>
    </div>
  </nav>
  <main class='colors'>
    <Transition>
      <component 
      :is='views[currentView]'
      class='view soft-pad'
      @contact-emit="()=>currentView='Contact'"/>
    </Transition>
  </main>
  </div>
</template>

<style>
*{
  box-sizing: border-box;
}
body, #app{
  margin: 0;
  padding: 0;
  font-family: Helvetica, Sans-serif;
}
.master-container{
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 9fr;
  --pribg: #fff;
  --secbg: #fcfcfc;
  --accentbg: #49e;
  --prifg: #000;
  --secfg: #888;
  --accentfg: #49e;
  background: var(--secbg);
  color: var(--prifg);
}
.soft-pad{
  padding: 0 clamp(2rem,  15vw, 20rem);
}
nav{
  background: var(--secbg);
  position: sticky;
  top:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2em 5em 0 #00000062;
}
nav .items{
  display: flex;
  width: clamp(15rem, 30vw, 720px );
  justify-content: space-between;
}
.items button, nav button{
  appearance: none;
  border: none;
  background: transparent;
  font:inherit;
  color: var(--secfg);
}
.items button:hover{
  color: var(--primfg);
  cursor: pointer;
  
}
nav .items .currentViewBtn{
  color: var(--accentfg);
}
.view{
  height: 100%;
}
nav .items .btn-theme{
  background: var(--accentbg);
  color: #fff;
  border-radius: 2ch;
  padding: 0 1ch;
  margin: 0 0 0 2ch;
}
</style>
