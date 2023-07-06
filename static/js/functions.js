function handlePackageChange() {
    var selectElement = document.getElementById("customerPackage");
    selectElement.classList.add("flash");

    // Remove the flash class after the animation completes
    setTimeout(function() {
        selectElement.classList.remove("flash");
    }, 300);
}

function changePackage(packageName) {
    var packageSelect = document.getElementById("customerPackage");

    window.location.href = "/#enquiryForm";
  
    // Update the selected package value
    packageSelect.value = packageName;
    
    setTimeout(function() {
        handlePackageChange();
    }, 300);
  }

  function changeVideo(videoId) {
    var iframe = document.querySelector('.video-frame iframe');
    iframe.src = "https://www.youtube.com/embed/" + videoId;

    var videoLinks = document.querySelectorAll('.video-selector a');
    videoLinks.forEach(function(link) {
      if (link.id === "video-" + videoId) {
        link.classList.add('selected');
      } else {
        link.classList.remove('selected');
      }
    });
  }
