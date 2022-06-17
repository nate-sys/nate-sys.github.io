<script setup>
  import Home from './Home.vue'
  import Projects from './Projects.vue'
  import Contact from './Contact.vue'
  import { ref } from 'vue'
  const count = ref(0)
  const views = {
    Home,
    Projects,
    Contact
  }
  const currentView = ref('Home')
</script>

<template>
  <nav>
    <div>nate</div>
    <div class='items'>
      <button
      v-for='(_,view) in views'
      :key='view'
      @click='currentView = view'>
        {{view}}
      </button>
    </div>
  </nav>
  <main>
    <keepalive>
      <component 
      :is='views[currentView]'
      class='view'/>
    </keepalive>
  </main>
</template>

<style>
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
  font-family: Helvetica, Sans-serif;
}
#app{
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 9fr;
}
nav{
  position: sticky;
  top:0;
  display: grid;
  grid-template-columns: 7fr 3fr;
  justify-content: space-between;
  align-content: center;
  padding: 0 2rem;
  border-bottom: 1px solid #191919;
}
nav .items{
  display: flex;
  justify-content: space-between;
}
.view{
  padding: 0 2em;
  border: dashed 1px black;
  height: 100%;
}
</style>
