// IF STATEMENTS = if a condition is true, execute some code
//				   if not, do something else

const mytxt = document.getElementById("mytxt");
const sub = document.getElementById("sub");
const theResult = document.getElementById("theResult");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");
// const link7 = document.getElementById("link7");
let age;


sub.onclick = function(){
	age = mytxt.value;

	// Very old
	if(age >= 100){
		theResult.textContent = "You are TOO old to enter this site.";
		link1.textContent = "Sorry, I can't give you the link.";
		console.log("working1");
		// <a id="link"></a>
	}

	else if (age == 0){
		theResult.textContent = "You can't enter. YOU were just born.";
		link1.textContent = "No link";
		console.log("working2");
	}

	else if (age >= 18){
		theResult.textContent = "You are old enough to enter this site.";
		alert("I'll show you some links");
		link1.textContent = "Tor amazon(link = http://amazonalixuydfexvh4w5xifzk74pupijdaqtgfiv24rvmnlhkdfixqd.onion)";
		link2.textContent = "Hire Hitman(link = kill432ltnkqvaqntbalnsgojqqs2wz4lhnamrqjg66tq6fuvcztilyd.onion)";
		link3.textContent = "The Hidden Wiki(link = rgq674vzdxkj2rsk6rjxjjeuw2kzt3u56g56pafijr66vea5wios76ad.onion)";
		link4.textContent = "Black Market(link = http://blackujuzctwajhtduhrza3kjngotya7k4rg4apymlbj7plinnrsvtid.onion)";
		link5.textContent = "Dark Road(link = http://wutrspt5x47ozzkxyvmrdcclp52upd56klbtqu5aefxbgkmz5ptiviyd.onion)";
		link6.textContent = "Euro guns(link = http://hyjgsnkanan2wsrksd53na4xigtxhlz57estwqtptzhpa53rxz53pqad.onion)";
		console.log("working3");
	}

	else if (age < 18){
		theResult.textContent = "You can't enter this site.YOU are young."
		link1.textContent = "No link";
	}

	else if (age < 0){
		theResult.textContent = "Your age can't be below 0.";
		link1.textContent = "No link";
		console.log("working4");
	}
}
