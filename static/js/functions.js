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

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    var name = document.getElementById('customerName').value;
    var email = document.getElementById('customerEmail').value;
    var phone = document.getElementById('customerPhone').value;
    var package = document.getElementById('customerPackage').value;
    var message = document.getElementById('customerNote').value;

    // Construct the prefill URL
    var url = 'https://docs.google.com/forms/d/e/1FAIpQLSdw8t2pwanl3eAr0Czk6xe05Rt5nx0540tu4hY85H38tiyB_w/formResponse' +
      '?usp=pp_url' +
      '&entry.2005620554=' + encodeURIComponent(name) +
      '&entry.424619647=' + encodeURIComponent(package) +
      '&entry.1045781291=' + encodeURIComponent(email) +
      '&entry.1166974658=' + encodeURIComponent(phone) +
      '&entry.839337160=' + encodeURIComponent(message) +
      '&submit=Submit';

    // Redirect to the prefill URL
    window.open(url, '_blank').focus();
  }
