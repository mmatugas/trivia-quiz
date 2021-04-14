const BooleanOption = () => (
	`<div class="choice-container">
		<p class="choice-prefix" onclick="checkAnswer('True')"> True</button>
	</div>
	<div class="choice-container">
		<p class="choice-prefix" onclick="checkAnswer('False')"> False</button>

	</div>`
)

const MultiOptions = (trivia) => {
	const options = [trivia.correct_answer, ...trivia.incorrect_answers];
	const [a,b,c,d] = options.sort(); //options
	return (
		`
		<div class="choice-container">
 			<p class="choice-prefix">A </p>
 			<p class="choice-text" onclick='checkAnswer("${a}")'>${a} </p>
 		</div>
 		<div class="choice-container">
 			<p class="choice-prefix" '>B </p>
 			<p class="choice-text" onclick='checkAnswer("${b}")'>${b} </p>
 		</div>
 		<div class="choice-container">
 			<p class="choice-prefix">C </p>
 			<p class="choice-text" onclick='checkAnswer("${c}")'>${c} </p>
 		</div>
 		<div class="choice-container">
 			<p class="choice-prefix">D </p>
 			<p class="choice-text" onclick='checkAnswer("${d}")'>${d} </p>
 		</div>

		`
	)
};

const Options = (trivia) => {
	switch(trivia.type){
		case "boolean": return BooleanOption(trivia);
		case "multiple": return MultiOptions(trivia);
	}

};

export default Options;