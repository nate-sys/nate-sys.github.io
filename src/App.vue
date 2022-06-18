<script setup>
  import Home from './Home.vue'
  import Projects from './Projects.vue'
  import Contact from './Contact.vue'
  import { ref } from 'vue'
  const views = {
    Home,
    Projects,
    Contact
  }
  const currentView = ref('Home')
</script>

<template>
  <nav class='soft-pad'>
    <div>Logo</div>
    <div class='items'>
      <button
      v-for='(_,view) in views'
      :key='view'
      @click='currentView = view'
      :class='{currentViewBtn: currentView === view}'>
        {{view}}
      </button>
    </div>
  </nav>
  <main>
    <keepalive>
      <component 
      :is='views[currentView]'
      class='view soft-pad'/>
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
  background: #fcfcfc;
}
#app{
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 9fr;
}
.soft-pad{
  padding: 0 clamp(2rem,  15vw, 20rem);
}
nav{
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
.items button{
  appearance: none;
  border: none;
  background: transparent;
  font:inherit;
}
.items button:hover{
  color: #01009f;
  cursor: pointer;
  
}
nav .items .currentViewBtn{
  color: #f4e;
}
.view{
  height: 100%;
}
</style>
