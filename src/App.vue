<script setup>
  import Home from '@/components/views/Home.vue'
  import Projects from '@/components/views/Projects.vue'
  import Contact from '@/components/views/Contact.vue'
  import NotFound from '@/components/views/NotFound.vue'
  import { ref, computed } from 'vue'
  const routes = {
    '/' : Home,
    '/Projects' : Projects,
    '/Contact' : Contact,
  }
  const night = ref(false)
  const colors = computed(
    ()=>{
      return !night.value ? {
        '--pribg':'#fcfcff',
        '--secbg': '#f7f7fc',
        '--accentbg': '#49e',
        '--prifg': '#0c0c1f',
        '--secfg': '#445',
        '--accentfg': '#49e'
      }:{
        '--pribg':'#12121f',
        '--secbg': '#334',
        '--accentbg': '#69c',
        '--prifg': '#e1ecff',
        '--secfg': '#d0dcfc',
        '--accentfg': '#69c'
      }
    }
  )
  const changeColors = () => {
    night.value = !night.value
  }
  const currentPath = ref('#/')
  window.addEventListener('hashchange', ()=>{
    currentPath.value = window.location.hash
  })
  const currentView = computed(()=>{
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
</script>

<template>
  <div class='master-container' :style='colors'>
  <nav class='soft-pad colors'>
    <a class='btn' href='#/'><span>./</span>nate<span>-sys</span></a>
    <div class='items'>
      <a
      v-for='(_,route) in routes'
      :key='route'
      :href="'#' + route"
      :class='{currentViewBtn: currentPath === route}'>
        <template v-if="route!='/Home'">
        {{route.replace('/', '')}}
        </template>
      </a>
      <button @click ='changeColors' class='btn-theme'>
        Theme
      </button>
    </div>
  </nav>
  <main class='colors'>
    <Transition mode='out-in'>
      <component 
      :is='currentView'
      class='view soft-pad'
      @contact-emit="()=>currentPath='#/Contact'"/>
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
    --pribg: #fcfcff;
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
  }
  nav .items{
    display: flex;
    width: 20rem ;
    justify-content: space-between;
  }
  nav a{
    font-weight: bold;
    text-decoration: none;
    padding: .5ch 0;
  }
  a span{
    color: var(--secfg);
    font-weight: normal;
  }
  .items a, nav a, nav button{
    appearance: none;
    border: none;
    background: transparent;
    font:inherit;
    color: var(--prifg);
    height: 3.5ch;
  }
  .items a:hover{
    color: var(--secfg);
    cursor: pointer;
    
  }
  nav .items .currentViewBtn{
    color: var(--accentfg);
  }
  .view{
    height: 100%;
  }
  nav .items .btn-theme{
    background: transparent;
    color: var(--accentfg);
    border: .25ch solid var(--accentfg);
    border-radius: 2ch;
    padding: 0 1ch;
    margin: 0 0 0 2ch;
  }
  p{
    color: var(--secfg);
    margin-bottom: 2rem;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.3s ease-out;
  }
  .v-enter-from,
  .v-leave-to{
    transform: translateY(10vh);
    opacity: 0;
  }
  .v-enter-to,
  .v-leave-from{
    opacity: 1;
  }
</style>
