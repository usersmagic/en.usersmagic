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

window.onload = () => {
  // createPageListener(); // Call create page listener to listen the create page

  const allHeader = document.querySelector('.all-header');
  const allInnerWrapper = document.querySelector('.all-inner-wrapper');

  allInnerWrapper.onscroll = () => {
    allHeader.style.borderBottom = `1px solid rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
    allHeader.style.boxShadow = `0 0 10px rgba(236, 236, 236, ${Math.min(1, allInnerWrapper.scrollTop / 120)})`;
  };

  const targetUsers = JSON.parse(document.getElementById('target-users').value);

  document.addEventListener('click', event => {
    if (event.target.classList.contains('each-target-user'))
      updateTargetUsersDetailsWrapper(targetUsers[event.target.id]);
    
    if (event.target.parentNode.classList.contains('each-target-user'))
      updateTargetUsersDetailsWrapper(targetUsers[event.target.parentNode.id]);
  })
}
