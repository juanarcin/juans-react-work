


function DateTracker() {





	// To set two dates to two variables
	var startDate = new Date("10/15/2009");
	var today = new Date();

	// To calculate the time difference of two dates
	var differenceInTime = today.getTime() - startDate.getTime();

	// To calculate the no. of days between two dates
	var numberOfDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

	var years = Math.floor(numberOfDays / 365);
	var months = Math.floor(numberOfDays % 365 / 30);
	var days = Math.floor(numberOfDays % 365 % 30);

	var yearsDisplay = years > 0 ? years + (years === 1 ? " year, " : " years, ") : "";
	var monthsDisplay = months > 0 ? months + (months === 1 ? " month, " : " months, ") : "";
	var daysDisplay = days > 0 ? days + (days === 1 ? " day" : " days") : "";
	let amountOfTime = `${yearsDisplay} ${monthsDisplay} and  ${daysDisplay}`; 
	   






  return (
  	<b className="inline">{amountOfTime}</b>
  );
}

export default DateTracker;
