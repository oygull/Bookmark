let elBurgerBtn = document.getElementById('burgerBtn');
let elSiteNav = document.getElementById('siteNav');
let elClose = document.getElementById('closeBtn');

elBurgerBtn.addEventListener('click', function(){
  elSiteNav.classList.add('show')
})
elClose.addEventListener('click', function(){
  elSiteNav.classList.remove('show')
})
