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
      <a href='#/Contact' class='btn btn-contact'>
        Get in touch
      </a>
    </div>
  </div>
</template>
<style scoped>
  .container{
    display: grid;
    align-content: center;
  }
  h1{
    color: var(--primfg);
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
    text-decoration: none; 
  }
  .btn-cta{
    background: var(--accentbg);
    color: #fff;
    font-weight: bold;
  }
  .btn-cta:hover{
    box-shadow: 0 0 .3em 0 #00000022;
  }
  .btn-contact{
    color: var(--accentfg);
    font-weight: bold;
    background: transparent;
  }
</style>

