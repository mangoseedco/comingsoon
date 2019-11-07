document.body.onload = function() {
  const elms = ['loading1', 'loading2', 'loading3', 'loading4', 'loading5', 'loading6'].map(function(id) {
    return document.getElementById(id);
  });

  const wait = async (delay) => new Promise(resolve => setTimeout(resolve, delay));

  function animate(el, delay, interval) {
    const animationLoop = async () => {
      await wait(delay);
      el.classList.add('image-icon--growing');
      await wait(500);
      el.classList.remove('image-icon--growing');
      el.classList.add('image-icon--shrinking');
      await wait(500);
      el.classList.remove('image-icon--shrinking');
    }
    animationLoop();
    return setInterval(animationLoop, interval);
  }

  elms.forEach(function(el, idx) {
    animate(el, 100*idx, 1250);
  });
}