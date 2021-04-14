import Options from './Options.js'

const Question = (trivia) => (
	`
	
	<h2 style="color: white;"">${trivia.question}</h2>
	${Options(trivia)}`

)

export default Question;