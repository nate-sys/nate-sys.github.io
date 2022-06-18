<template>
  <div class='container'>
    <h1>
    Nathan Dawit
    </h1>
    <p>
    My name is Nathan Dawit, and I am a computer science student looking for opportunities in web development and UI/UX.
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
  color: #f39;
  font-weight: bold;
}
.container-cta{
  display: flex;
  gap: 1vw;
}
.btn{
  height: 3rem;
  appearance: none;
  border: none;
  border-radius: 2rem;
  padding: .3rem 1.3rem;
  cursor: pointer;
  display: grid;
  place-content: center;
  
}
.btn-cta{
  background: #fe65f5;
  color: #fff;
  font-weight: bold;
}
.btn-cta:hover{
  background: #8d4;

}
.btn-contact{
  color: #fe65f5;
  font-weight: bold;
  background: transparent;
}
</style>

