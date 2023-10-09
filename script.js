function calculateAgeInDays(event) {
  event.preventDefault();

  var ageInput = document.getElementById('age');
  var age = Number(ageInput.value);

  if (isNaN(age)) {
    console.log('Please enter a valid number for age.');
  } else {
    var ageInDays = age * 365;
    console.log('Age in days: ' + ageInDays);
  }
}