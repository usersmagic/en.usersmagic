let isDownloadButtonOpen = false;

// Instead of window.onload, call this on main file
function reportPageListener() {
  const resultsDownloadButton = document.querySelector('.results-download-button');
  const downloadOptionsWrapper = document.querySelector('.download-options-wrapper');

  document.addEventListener('click', event =>{
    if (event.target.classList.contains('results-download-button-span')) {
      if (isDownloadButtonOpen) {
        isDownloadButtonOpen = false;

        downloadOptionsWrapper.classList.remove('open-bottom-animation-class');
        downloadOptionsWrapper.classList.add('close-top-animation-class');

        setTimeout(() => {
          resultsDownloadButton.style.borderBottomWidth = '1px';
          resultsDownloadButton.style.borderBottomLeftRadius = '5px';
          resultsDownloadButton.style.borderBottomRightRadius = '5px';

          downloadOptionsWrapper.style.border = '0px';
        }, 400);
      } else {
        isDownloadButtonOpen = true;
        resultsDownloadButton.style.borderBottomWidth = '0px';
        resultsDownloadButton.style.borderBottomLeftRadius = '0px';
        resultsDownloadButton.style.borderBottomRightRadius = '0px';

        downloadOptionsWrapper.style.border = '1px solid rgba(184, 235, 238, 1)';
        downloadOptionsWrapper.style.borderTop = '0px';

        downloadOptionsWrapper.classList.remove('close-top-animation-class');
        downloadOptionsWrapper.classList.add('open-bottom-animation-class');
      }
    } else if (!event.target.classList.contains('each-download-option') && isDownloadButtonOpen) {
      isDownloadButtonOpen = false;

      downloadOptionsWrapper.classList.remove('open-bottom-animation-class');
      downloadOptionsWrapper.classList.add('close-top-animation-class');

      setTimeout(() => {
        resultsDownloadButton.style.borderBottomWidth = '2px';
        resultsDownloadButton.style.borderBottomLeftRadius = '10px';
        resultsDownloadButton.style.borderBottomRightRadius = '10px';

        downloadOptionsWrapper.style.border = '0px';
      }, 400);
    }
  });
}
