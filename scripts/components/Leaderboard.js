const Leaderboard = (topScores) => (
	`
        <h2 id="finalScore" style="color: white;">High Scores:</h2>
        <ul id="highScoresList" >
        	${ ListItems(topScores) }
        </ul>
	`
);
export default Leaderboard;

const ListItems = (topScores) => {
	let li = ``
	const scores = topScores.sort( (a,b) => b.score - a.score );
	for (let row of scores){
		li += `<li class="high-score" style="color: white;">${row.name} - ${row.score}</li>`
	}
	return li;
}
