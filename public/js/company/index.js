function updateTargetUsersDetailsWrapper(user) {
  document.querySelector('.target-users-details-image').src = user.image;
  document.querySelector('.target-users-details-content-title').innerHTML = user.name;
  document.querySelector('.target-users-details-content-text').innerHTML = user.text;
  document.querySelector('.each-target-users-info-person').innerHTML = user.person;
  document.querySelector('.each-target-users-info-sport').innerHTML = user.sport;
  document.querySelector('.each-target-users-info-watch').innerHTML = user.watch;
  document.querySelector('.each-target-users-info-music').innerHTML = user.music;
  document.querySelector('.each-target-users-info-shopping').innerHTML = user.shopping;
  document.querySelector('.each-target-users-info-clothing').innerHTML = user.clothing;
  document.querySelector('.each-target-users-info-head').innerHTML = user.head;
  document.querySelector('.each-target-users-info-food').innerHTML = user.food;
}

function moveRightGradually(object, margin) {
  const objectMargin = object.offsetLeft - object.parentNode.offsetLeft;

  if (objectMargin >= margin)
    return;

  object.style.marginLeft = (objectMargin + 7) + 'px';

  setTimeout(() => {
    moveRightGradually(object, margin);
  }, 1);
}

function moveLeftGradually(object, margin) {
  const objectMargin = object.offsetLeft - object.parentNode.offsetLeft;

  if (objectMargin <= margin)
    return;

  object.style.marginLeft = (objectMargin - 7) + 'px';

  setTimeout(() => {
    moveLeftGradually(object, margin);
  }, 1);
}

function moveHorizontallyGradually(object, margin) {
  margin = parseInt(margin);
  const objectMargin = object.offsetLeft - object.parentNode.offsetLeft;

  if (objectMargin > margin)
    moveLeftGradually(object, margin);
  else if (objectMargin < margin)
    moveRightGradually(object, margin);
}

function slideUserQuoteSlider(slider) {
  const leftMost = slider.childNodes[0];

  if (leftMost.offsetLeft <= -600) {
    leftMost.remove();
    const newQuote = slider.childNodes[0].cloneNode(true);
    slider.appendChild(newQuote);
  }

  slider.childNodes[0].style.marginLeft = (slider.childNodes[0].offsetLeft - 1) + 'px';

  setTimeout(() => slideUserQuoteSlider(slider), 15);
}

function showEmmaUserDetails() {
  const emmaWrapper = document.querySelector('.emma-user-details-wrapper');
  const detailsButton = document.querySelector('.responses-questions-person-details-button');

  if (emmaWrapper.style.display == 'none') {
    emmaWrapper.style.display = 'block';
    emmaWrapper.style.left = (detailsButton.offsetLeft + detailsButton.offsetWidth + 10) + 'px';
    emmaWrapper.style.top = Math.max(0, (detailsButton.offsetTop - document.querySelector('.all-inner-wrapper').scrollTop - emmaWrapper.offsetHeight) + 10) + 'px';
  }
}

window.onload = () => {
  headerListener(); // Listen for header scroll
  
  createPageListener(); // Call create page listener to listen the create page
  filterPageListener(); // Call filter page listener to listen the filter page
  reportPageListener(); // Call filter page listener to listen the filter page

  const targetUsers = JSON.parse(document.getElementById('target-users').value);

  const darkBlueBackground = document.querySelector('.interactive-screen-background-dark-blue');
  const blueBackground = document.querySelector('.interactive-screen-background-blue');
  const borderLine = document.querySelector('.interactive-button-border-line');

  const insideProductCreateProjectWrapper = document.querySelector('.inside-product-create-project-wrapper');
  const insideProductCreateTargetWrapper = document.querySelector('.inside-product-create-target-wrapper');
  const insideProductSeeReportWrapper = document.querySelector('.inside-product-see-report-wrapper');

  document.addEventListener('click', event => {
    if (event.target.classList.contains('each-target-user'))
      updateTargetUsersDetailsWrapper(targetUsers[event.target.id]);
    
    if (event.target.parentNode.classList.contains('each-target-user'))
      updateTargetUsersDetailsWrapper(targetUsers[event.target.parentNode.id]);
    
    if (event.target.classList.contains('interactive-create-survey-button') || event.target.parentNode.classList.contains('interactive-create-survey-button') || event.target.parentNode.parentNode.classList.contains('interactive-create-survey-button')) {
      if (document.querySelector('.inside-product-create-project-wrapper').style.display == 'none') {
        blueBackground.classList.remove('opacity-decrease-animation-class');
        blueBackground.classList.add('opacity-increase-animation-class');
        darkBlueBackground.classList.remove('opacity-decrease-animation-class');
        darkBlueBackground.classList.add('opacity-increase-animation-class');
  
        moveHorizontallyGradually(borderLine, 30);
        insideProductCreateProjectWrapper.style.display = 'flex';
        insideProductCreateTargetWrapper.style.display = 'none';
        insideProductSeeReportWrapper.style.display = 'none';
      }
    }

    if (event.target.classList.contains('interactive-target-users-button') || event.target.parentNode.classList.contains('interactive-target-users-button') || event.target.parentNode.parentNode.classList.contains('interactive-target-users-button')) {
      if (document.querySelector('.inside-product-create-target-wrapper').style.display == 'none') {
        blueBackground.classList.remove('opacity-decrease-animation-class');
        blueBackground.classList.add('opacity-increase-animation-class');
        darkBlueBackground.classList.add('opacity-decrease-animation-class');
        darkBlueBackground.classList.remove('opacity-increase-animation-class');
  
        if (borderLine.offsetLeft - borderLine.parentNode.offsetLeft == 30) {
          moveHorizontallyGradually(borderLine, borderLine.parentNode.offsetWidth/2 - 101);
        } else {
          moveHorizontallyGradually(borderLine, borderLine.parentNode.offsetWidth/2 - 99);
        }
  
        insideProductCreateProjectWrapper.style.display = 'none';
        insideProductCreateTargetWrapper.style.display = 'flex';
        insideProductSeeReportWrapper.style.display = 'none';
      }
    }

    if (event.target.classList.contains('interactive-analyze-results-button') || event.target.parentNode.classList.contains('interactive-analyze-results-button') || event.target.parentNode.parentNode.classList.contains('interactive-analyze-results-button')) {
      if (document.querySelector('.inside-product-see-report-wrapper').style.display == 'none') {
        blueBackground.classList.add('opacity-decrease-animation-class');
        blueBackground.classList.remove('opacity-increase-animation-class');
        darkBlueBackground.classList.add('opacity-decrease-animation-class');
        darkBlueBackground.classList.remove('opacity-increase-animation-class');
  
        moveHorizontallyGradually(borderLine, borderLine.parentNode.offsetWidth - 235);
  
        insideProductCreateProjectWrapper.style.display = 'none';
        insideProductCreateTargetWrapper.style.display = 'none';
        insideProductSeeReportWrapper.style.display = 'flex';
      }
    }
  });

  const userQuoteSliders = document.querySelectorAll('.user-quotes-slider');
  userQuoteSliders.forEach(userQuoteSlider => slideUserQuoteSlider(userQuoteSlider));

  document.addEventListener('mouseover', event => {
    if (event.target.classList.contains('responses-questions-person-details-button'))
      showEmmaUserDetails();
    else if (document.querySelector('.emma-user-details-wrapper').style.display == 'block')
      document.querySelector('.emma-user-details-wrapper').style.display = 'none';
  });
}
