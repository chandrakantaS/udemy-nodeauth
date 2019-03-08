function myFunction() {
	//var sentence = prompt("Please enter your a sentence");
	var sentence = "This Month is February";
	if (sentence === null) {
		return
	}
	var ar = sentence.split(" ");
	var evenletters = [];
	var oddletters = [];
	var newSentence = '';
	for(var i =0;i<=ar.length;i++){
		if(i%2===0){
			console.log(i)
			continue;
		}
		var oddword = ar[i];

		for(var a = 0 ; a < oddword.length;a++){
			if(a%2!==0){
				evenletters.push(oddword[a]);
			}
			else{
				oddletters.push(oddword[a]);
			}
		}


	}
	evenletters = evenletters.reverse();
	console.log("evenletters: ", evenletters)
	console.log("oddletters: ", oddletters)
	console.log(ar)
	for(var i in ar) {
		var ee = ''
		if(i%2===0) {newSentence += ar[i]+" "}
		else {

			while(ee.length <= ar[i].length-1){
				var f = oddletters.shift();
				var s = evenletters.shift();

				ee += f+s
			}
			console.log('ee: ', ee)
			newSentence += ee+" "
		}
		console.log(ar[i])
	}
	console.log(newSentence)


}
