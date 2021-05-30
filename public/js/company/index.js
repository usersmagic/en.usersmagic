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

window.onload = () => {
  createPageListener(); // Call create page listener to listen the create page

  const allHeader = document.querySelector('.all-header');
  const allInnerWrapper = document.querySelector('.all-inner-wrapper');

  allInnerWrapper.onscroll = () => {
    allHeader.style.borderBottom = `1px solid rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
    allHeader.style.boxShadow = `0 0 10px rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
  };

  const targetUsers = JSON.parse(document.getElementById('target-users').value);

  const darkBlueBackground = document.querySelector('.interactive-screen-background-dark-blue');
  const blueBackground = document.querySelector('.interactive-screen-background-blue');
  const borderLine = document.querySelector('.interactive-button-border-line');

  document.addEventListener('click', event => {
    if (event.target.classList.contains('each-target-user'))
      updateTargetUsersDetailsWrapper(targetUsers[event.target.id]);
    
    if (event.target.parentNode.classList.contains('each-target-user'))
      updateTargetUsersDetailsWrapper(targetUsers[event.target.parentNode.id]);
    
    if (event.target.classList.contains('interactive-create-survey-button') || event.target.parentNode.classList.contains('interactive-create-survey-button') || event.target.parentNode.parentNode.classList.contains('interactive-create-survey-button')) {
      if (darkBlueBackground.classList.contains('opacity-decrease-animation-class')) {
        blueBackground.classList.remove('opacity-decrease-animation-class');
        blueBackground.classList.add('opacity-increase-animation-class');
        darkBlueBackground.classList.remove('opacity-decrease-animation-class');
        darkBlueBackground.classList.add('opacity-increase-animation-class');
  
        moveHorizontallyGradually(borderLine, 30);
      } 
    }

    if (event.target.classList.contains('interactive-target-users-button') || event.target.parentNode.classList.contains('interactive-target-users-button') || event.target.parentNode.parentNode.classList.contains('interactive-target-users-button')) {
      blueBackground.classList.remove('opacity-decrease-animation-class');
      blueBackground.classList.add('opacity-increase-animation-class');
      darkBlueBackground.classList.add('opacity-decrease-animation-class');
      darkBlueBackground.classList.remove('opacity-increase-animation-class');

      moveHorizontallyGradually(borderLine, borderLine.parentNode.offsetWidth/2 - 100);
    }

    if (event.target.classList.contains('interactive-analyze-results-button') || event.target.parentNode.classList.contains('interactive-analyze-results-button') || event.target.parentNode.parentNode.classList.contains('interactive-analyze-results-button')) {
      blueBackground.classList.add('opacity-decrease-animation-class');
      blueBackground.classList.remove('opacity-increase-animation-class');
      darkBlueBackground.classList.add('opacity-decrease-animation-class');
      darkBlueBackground.classList.remove('opacity-increase-animation-class');

      moveHorizontallyGradually(borderLine, borderLine.parentNode.offsetWidth - 235);
    }
  });
}
