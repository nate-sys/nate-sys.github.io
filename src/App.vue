<script setup>
  import Home from './Home.vue'
  import { ref } from 'vue'
  const count = ref(0)
  const views = {
    Home
  }
  const currentView = ref(views.Home)
</script>

<template>
  <nav>
    <div>nate</div>
    <div class='items'>
      <button>projects</button>
      <button>contact</button>
    </div>
  </nav>
  <main>
    <keepalive>
      <component 
      :is='currentView'
      class='view'/>
    </keepalive>
  </main>
</template>

<style>
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
}
nav{
  position: sticky;
  top:0;
  display: grid;
  grid-template-columns: 7fr 3fr;
  justify-content: space-between;
  align-content: center;
  padding: 0 2rem;
  height: 8vh;
  border-bottom: 1px solid #191919;
}
nav .items{
  display: flex;
  justify-content: space-between;
}
.view{
  width: 100%;
  padding: 0 2em;
}
</style>
