/*

This function is the logic required for Googles autocomplete when using the Google Map API.
The intention is to put this to a location input field and it will suggest relevant places to save the user time.

*/



function autocomplete(input, latInput, lngInput) {
    if(!input) return; // Skip this function from running if there is not input on the page.
    const dropdown = new google.maps.places.Autocomplete(input);
  
    dropdown.addListener('place_changed', () => {
      const place = dropdown.getPlace();
      latInput.value = place.geometry.location.lat();
      lngInput.value = place.geometry.location.lng();
    });
    // If someone hits enter on the address field, don't be annoying and submit the entire form.
    input.on('keydown', (e) => {
      if (e.keyCode === 13) e.preventDefault();
    });
  }
  
  export default autocomplete;
