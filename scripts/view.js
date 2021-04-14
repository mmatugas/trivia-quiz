import Question from './components/Question.js';
import HUD from './components/HUD.js';
import Skip from './components/Skip.js';
import Leaderboard from './components/Leaderboard.js'
import LeaderMenu from './components/LeaderMenu.js';
const renderDOM = (html) => document.getElementById('game').innerHTML = html;

export const PlayScene = (props) => {
	const {timer,score,trivia} = props;
	renderDOM(
		`${HUD(timer,score)}
		${Question(trivia)}
		${Skip()}`
	)
	
}
export const GameoverScene = (props) => {
	const {timer, score, topScores} = props;
	renderDOM(
		`${HUD(timer,score)}
		 
		<div class="container">
			<div id="start-menu" class="flex-center flex-column">
				<h1> Game Over! </h1>
				${ isTop5(score, topScores) ? LeaderMenu() : ''}
				<a class="btn" href="" onclick='start()'>Start Menu</a>
			</div>
		</div>

		`

	)
}

export const StartMenu = (props) => {
	const{timer, score, topScores} = props;
	renderDOM(
		`
		<div id="home" class="flex-center flex-column">
			<h1> Trivia Quiz </h1>
			${ Leaderboard(topScores)}
			<a class="btn" onclick="createGame()">Play</a>
		</div>
		`
	)
}

const isTop5 = (score, top5) => top5.some(item => item.score < score );