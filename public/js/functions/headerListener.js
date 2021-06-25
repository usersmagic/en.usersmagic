function headerListener() {
  const allHeader = document.querySelector('.all-header');
  const allHeaderResponsive = document.querySelector('.all-header-responsive');
  const allInnerWrapper = document.querySelector('.all-inner-wrapper');
  const hamburgerBarButton = document.getElementById('menu-hamburger-bar');
  const responsiveOpeningMenu = document.getElementById('responsive-opening-menu');
  const barLines = document.querySelectorAll(".each-hamburger-bar-line");
  var ua = navigator.userAgent.toLowerCase(); 
  
  allInnerWrapper.onscroll = () => {
    allHeader.style.borderBottom = `1px solid rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
    allHeader.style.boxShadow = `0 0 10px rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
    allHeaderResponsive.style.borderBottom = `1px solid rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 10)})`;
    allHeaderResponsive.style.boxShadow = `0 0 10px rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 10)})`;
  };
  hamburgerBarButton.addEventListener('click', () => {
    if (responsiveOpeningMenu.style.left != '0px') {
      responsiveOpeningMenu.style.left = '0px';
      for (let i = 0; i < barLines.length; i++) {
        const barLine = barLines[i];
        if (i === 0) {
          barLine.style.transform = 'rotate(45deg)';
          barLine.style.position = 'absolute';
          if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') === -1) {
              hamburgerBarButton.style.paddingTop = '5px'
            }
          }
        } else if (i === 1) {
          barLine.style.transform = 'rotate(-45deg)'
          barLine.style.position = 'absolute';
        } else if (i === 2) {
          barLine.style.display = 'none'
        }
      }
    } else {
      responsiveOpeningMenu.style.left = '-100%';
      for (let i = 0; i < barLines.length; i++) {
        const barLine = barLines[i];
        if (i === 0) {
          barLine.style.transform = 'rotate(0deg)'
          barLine.style.position = 'initial';
          hamburgerBarButton.style.paddingTop = '0'
        } else if (i === 1) {
          barLine.style.transform = 'rotate(0deg)'
          barLine.style.position = 'initial';
        } else if (i === 2) {
          barLine.style.display = 'initial';
        }
      }
    }
  })
}