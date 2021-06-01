function headerListener() {
  const allHeader = document.querySelector('.all-header');
  const allHeaderResponsive = document.querySelector('.all-header-responsive');
  const allInnerWrapper = document.querySelector('.all-inner-wrapper');

  allInnerWrapper.onscroll = () => {
    allHeader.style.borderBottom = `1px solid rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
    allHeader.style.boxShadow = `0 0 10px rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
    allHeaderResponsive.style.borderBottom = `1px solid rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
    allHeaderResponsive.style.boxShadow = `0 0 10px rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
  };
}
