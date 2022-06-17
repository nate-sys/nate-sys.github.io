<template>
  <div class='container'>
    <h1>
    Hey, there :) 
    </h1>
    <p>
    My name is Nathan Dawit and I am a computer science student. I am looking for opportunities in <span> Web developement </span> and <span> UI/UX design </span>.
    </p>
    <div class='container-cta'>
      <button class='btn btn-cta'>
      Download CV
      </button>
      <button class='btn btn-contact'>
      Get in touch
      </button>
    </div>
  </div>
</template>
<style scoped>
.container{
  display: grid;
  align-content: center;
}
.container span {
  color: #0424e6;
  font-weight: bold;
}
.container-cta{
  display: flex;
  gap: 1vw;
}
.btn{
  height: 2.5rem;
  appearance: none;
  border: none;
  border-radius: 1.5ch;
  padding: 1ch 4ch;
  cursor: pointer;
}
.btn-cta{
  background: #fe65f5;
  color: #fff;
  font-weight: bold;
}
.btn-contact{
  color: #fe65f5;
  font-weight: bold;
  background: transparent;
}
</style>

