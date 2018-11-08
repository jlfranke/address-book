// Get contacs from JSON file on document ready
$(document).ready(function(){
  // Use AJAX call to get contacts
  $.ajax({
    url: 'contacts.json',
    dataType: 'json',
    success: function(data){
      // Declare variables
      const contacts = data['contacts']; // Contacts from JSON
      const table = $("table#contacts tbody"); // Table element where contacts will be displayed

      // Loop through all contacts to create the table rows
      contacts.forEach(function(contact){
        // Create row
        let row = "<tr>" +
          "<td>" + contact.first_name + " " + contact.last_name + "</td>" +
          "<td>" + formatPhone(contact.phone) + "</td>" +
          "<td>" + contact.address + "</td>" +
          "</tr>"
          
          // Add the row to the table
          table.append(row);
      });
    },
    error: function(jqXHR, textStatus, errorThrown){
      // Print Error messages
      console.log("ajax failed");
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }
  });
});

// Function to reformat phone number to (xxx) xxx-xxxx
function formatPhone(phone) {
  const plainPhone = phone.replace(/\D/g,''); // Remove all non digit characters;
  
  if (plainPhone.length == 10){
    // Reformat phone number
    const formattedPhone = '(' + plainPhone[0] + plainPhone[1] + plainPhone[2] + ') ' + plainPhone[3] + plainPhone[4] + plainPhone[5] + '-' + plainPhone[6] + plainPhone[7] + plainPhone[8] + plainPhone[9];
    
    // Return the formatted phone number
    return formattedPhone;
  }
  
  // Else return the orginal phone number
  return phone;
}