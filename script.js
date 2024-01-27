// For Experience 

showDetails('item1');
    
function showDetails(itemId) {
  // Hide all details
  var detailsElements = document.getElementsByClassName('details');
  for (var i = 0; i < detailsElements.length; i++) {
    detailsElements[i].style.display = 'none';
  }
  
  // Show the selected detail
  var selectedDetail = document.getElementById(itemId + 'Details');
  selectedDetail.style.display = 'block';
}


// For Certifications
getDetails('item4');

function getDetails(itemId) {
  // Hide all details
  var detailsElements = document.getElementsByClassName('certi-details');
  for (var i = 0; i < detailsElements.length; i++) {
    detailsElements[i].style.display = 'none';
  }
  
  // Show the selected detail
  var selectedDetail = document.getElementById(itemId + 'Details');
  selectedDetail.style.display = 'block';
}