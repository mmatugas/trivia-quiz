import * as http from './http.js'
import * as view from './view.js'
const GET_TRIVIA = `https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`;
const BIN_ID = '6074e9015b165e19f61e4c06'
const GET_LEADERBOARD = `https://api.jsonbin.io/b/${BIN_ID}/latest`;
const PUT_LEADERBOARD = `https://api.jsonbin.io/b/${BIN_ID}`;

const state ={
	score: 0,
	timer: 20,
	intervalId: null,
	trivia: null,
	topScores:[]
};
/*this will get the Trivia API */
window.playGame = async () => {
	const json = await http.sendGETRequest(GET_TRIVIA);
	[state.trivia] = json.results;
	view.PlayScene(state);
	console.log(json)
}
//at start it would show the StartMenu from view 
window.start =async () =>{
	state.topScores = await http.sendGETRequest(GET_LEADERBOARD);
	/*console.log(state.topScores);*/
	/*state.score = 0;*/
	/*state.timer = 20;*/
	view.StartMenu(state); 
}
//this would first appear, when load it would go to window start.
window.addEventListener('load',start);

const countdown = () => {
	if(state.timer){
		state.timer--;
		view.PlayScene(state);
	}else{
		clearInterval( state.intervalId);
		view.GameoverScene(state);
	}
}
/*when play button is clicked at the start menu this will call the playGame function*/
window.createGame = () => {
	/*state.timer = 20;*/
	state.intervalId = setInterval(countdown, 1000);
	playGame();
}

window.checkAnswer = (attempt) => {
	const answer = state.trivia.correct_answer;
	if(attempt == answer){
		state.score += state.timer;
		state.timer += 10;
		playGame()
	}
	else {
		clearInterval( state.intervalId);
		view.GameoverScene(state);
	}
}

const getTop5 = async (newScore) => {
	let top5 = await http.sendGETRequest(GET_LEADERBOARD);
	top5.push( newScore );
	top5.sort( (a,b) => b.score - a.score);
	top5.pop();
	return top5
}
window.updateLeaderboard = async () => {
	const name = document.getElementById('name').value;
	const currentScore = {name:name, score:state.score};
	const top5 = await getTop5(currentScore);
	await http.sendPUTRequest(PUT_LEADERBOARD, top5);
	start()
} 



