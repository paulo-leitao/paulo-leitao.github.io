const checkbox = document.getElementById('toggle');
const links = document.getElementById('links');
const menu = document.getElementById('checkbox-menu');


const onFocus = () => {
  // event.stopPropagation();
  const close = () => {
    if (checkbox.checked === true) {
      checkbox.checked = false;
      window.removeEventListener('click', close);
    }
  };
  links.addEventListener('click', (event)=>{event.stopPropagation();})
  window.addEventListener('click', close);
}


menu.addEventListener('pointerover', onFocus);