function headerListener() {
  const allHeader = document.querySelector('.all-header');
  const allHeaderResponsive = document.querySelector('.all-header-responsive');
  const allInnerWrapper = document.querySelector('.all-inner-wrapper');
  const hamburgerBarButton = document.getElementById('menu-hamburger-bar');
  const responsiveOpeningMenu = document.getElementById('responsive-opening-menu');
  
  allInnerWrapper.onscroll = () => {
    allHeader.style.borderBottom = `1px solid rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
    allHeader.style.boxShadow = `0 0 10px rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
    allHeaderResponsive.style.borderBottom = `1px solid rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 10)})`;
    allHeaderResponsive.style.boxShadow = `0 0 10px rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 10)})`;
  };
  hamburgerBarButton.addEventListener('click', () => {
    if (responsiveOpeningMenu.style.left != '0px') {
      responsiveOpeningMenu.style.left = '0px';
    } else {
      responsiveOpeningMenu.style.left = '-100%';
    }
  })
}