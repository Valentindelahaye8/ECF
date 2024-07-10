
/*
    function myFunction() {
       document.getElementById("myDropdown").classList.toggle("show");
      }
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }
*/
/*VALID CODE HERE
function myFunction(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var buttons = document.getElementsByClassName("dropbtn");

  // Close all dropdowns except the one clicked
  for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].id !== dropdownId) {
          dropdowns[i].classList.remove("show");
          // Remove 'active' class from all buttons except the one clicked
          buttons[i].classList.remove("active");
      }
  }

  // Toggle the clicked dropdown
  dropdown.classList.toggle("show");
  // Toggle the 'active' class for the clicked button
  document.querySelector('.dropdown' + dropdownId).classList.toggle("active");
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var buttons = document.getElementsByClassName("dropbtn");
      for (var i = 0; i < dropdowns.length; i++) {
          if (dropdowns[i].classList.contains('show')) {
              dropdowns[i].classList.remove('show');
              // Remove 'active' class from all buttons
              buttons[i].classList.remove("active");
          }
      }
  }
}


function myFunction(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var dropdowns = document.getElementsByClassName("dropdown-content");
  
  // Close all dropdowns except the one clicked
  for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].id !== dropdownId) {
          dropdowns[i].classList.remove("show");
      }
  }
  
  // Toggle the clicked dropdown
  dropdown.classList.toggle("show");
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      // Hide the first dropdown if any other dropdown is clicked
      if (dropdowns[0].classList.contains('show')) {
          dropdowns[0].classList.remove('show');
      }
      // Close other dropdowns if the user clicks outside of them
      for (var i = 1; i < dropdowns.length; i++) {
          if (dropdowns[i].classList.contains('show')) {
              dropdowns[i].classList.remove('show');
          }
      }
  }
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}
      $(function() {
        $('li.dropdown.1').hover(function() {
          $('button.dropbtn.1').css('color', 'black');
        }, function() {
          // on mouseout, reset the background colour
          $('button.dropbtn.1').css('color', 'white');
        });
      });

      $(function() {
        $('li.dropdown.2').hover(function() {
          $('button.dropbtn.2').css('color', 'black');
        }, function() {
          // on mouseout, reset the background colour
          $('button.dropbtn.2').css('color', 'white');
        });
      });

      $(function() {
        $('li.dropdown.3').hover(function() {
          $('button.dropbtn.3').css('color', 'black');
        }, function() {
          // on mouseout, reset the background colour
          $('button.dropbtn.3').css('color', 'white');
        });
      });

      $(function() {
        $('li.dropdown.4').hover(function() {
          $('button.dropbtn.4').css('color', 'black');
        }, function() {
          // on mouseout, reset the background colour
          $('button.dropbtn.4').css('color', 'white');
        });
      });
VALID CODE END HERE*/
      // Get the dropdown button
// Get the dropdown button

      // Button click event to change background color
   
    // jQuery hover events (if really needed)
    /*$(document).ready(function() {
        $('li.dropdown').hover(function() {
            $(this).find('button.dropbtn').css('color', 'black');
        }, function() {
            $(this).find('button.dropbtn').css('color', 'white');
        });
    });*/

$(document).ready(function() {
    var currentDropdown = null;

    // Function to handle hover events for dropdown buttons
    $('li.dropdown').hover(
        function() {
            // Check if the hovered dropdown is different from the current one
            if (currentDropdown && currentDropdown[0] !== $(this)[0]) {
                closeOpenDropdowns();
            }

            // Set the current dropdown to the one being hovered
            currentDropdown = $(this);

            // Make dropdown-content links visible when dropdown area is hovered
            $(this).find('.dropdown-content').css('display', 'block');
            // Change font color to black when hovered
            $(this).find('button.dropbtn').css('color', 'black');
        },
        function() {
            var $button = $(this).find('button.dropbtn');
            // Check if the button is not clicked
            if (!$button.data('clicked')) {
                // Hide dropdown-content links when mouse leaves the dropdown area
                $(this).find('.dropdown-content').css('display', 'none');
                // Reset the color of button if not clicked
                $button.css('color', 'white').css('text-shadow', 'none');
            } else {
                // Change font color to green when hovered out
                $button.css('color', 'rgb(231, 148, 24)');
            }

            // Reset the current dropdown if mouse leaves
            currentDropdown = null;
        }
    );

    // Click event for dropdown buttons
    $('li.dropdown button.dropbtn').click(function(event) {
        // Prevent the default behavior of the button
        event.preventDefault();
        // Toggle the clicked state
        var isClicked = !$(this).data('clicked');
        $(this).data('clicked', isClicked);
        // Toggle the 'active' class for the clicked button
        $(this).toggleClass('active');
        // Toggle the text-shadow effect
        if (isClicked) {
            $(this).css('color', 'white').css('text-shadow', 'rgb(231, 148, 24)');
        } else {
            $(this).css('color', 'black');
            // Reset the color of button if not clicked
            $(this).siblings('.dropdown-content').css('display', 'none');
        }
    });

    // Click event for document to handle click outside of dropdown
    $(document).click(function(event) {
        // Check if the clicked element is not inside the dropdown or button
        if (!$(event.target).closest('.dropdown').length) {
            // Hide dropdown content associated with buttons that are not clicked
            closeOpenDropdowns();
        }
    });

    // Function to close any open dropdowns
    function closeOpenDropdowns() {
        $('li.dropdown button.dropbtn').each(function() {
            // Reset the clicked state
            $(this).data('clicked', false);
            // Hide dropdown-content links
            $(this).siblings('.dropdown-content').css('display', 'none');
            // Reset the color of button
            $(this).css('color', 'white').css('text-shadow', 'none');
        });
    }

    // Change font color to green for clicked buttons when not hovered
    $('li.dropdown button.dropbtn.active').not('hover').css('color', 'rgb(231, 148, 24)');
});














