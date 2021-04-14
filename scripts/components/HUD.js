const HUD = (timer, score) => (
	`
 	<div id="hud">
 		<div id="hud-item">
 			<p class="hud-prefix" style="color: white">
 				Timer:
 			</p>
 			<h1 class="hud-main-text" id="timer">
 					${timer}
 			</h1>
 		</div> 
 		<div id="hud-item">
 			<p class="hud-prefix" style="color:white">
 				Score
 			</p>
 			<h1 class="hud-main-text" id="score">
 					${score}
 			</h1>
 		</div>
 	</div> `
)

export default HUD;

