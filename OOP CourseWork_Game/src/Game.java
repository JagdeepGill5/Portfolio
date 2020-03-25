/**
* This is a interface that represents playing games
*/
public interface Game {

	/**
	 * Method to simulate rock, paper and scissors
	 */
	public void rockPaperScissors(String i);
	
	/**
	 * Method to simulate rolling a dice
	 */
	public void diceRolling(int i, GameEnemy ge);
}
