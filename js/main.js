$('.my-age').html(getAge(8, 22, 1994));

function getAge(birthDay, birthMonth, birthYear) {
	var	date = new Date();
	var age = date.getFullYear() - birthYear;
	if (date.getMonth() < birthMonth && date.getDay() < birthDay) {
		age--;
	}
	return age;
}