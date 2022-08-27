let night = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
function toggleNight() {
  if (night) {
    console.log("to day");
    document.documentElement.style.setProperty('--bg', '#fefaff');
    document.documentElement.style.setProperty('--fg', '#020202');
    document.documentElement.style.setProperty('--accent', '#fb25ff');
    night = false;
  }else{
    console.log("to night");
    document.documentElement.style.setProperty('--bg', '#080a10');
    document.documentElement.style.setProperty('--fg', '#ffffff');
    document.documentElement.style.setProperty('--accent', '#fb25ff');
    night = true;
  }
} 
