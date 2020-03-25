/**
* This is a interface that represents the game area functions
*/
public interface GameAreasFunction<E> {
	
	/**
	 * Method to trigger events once in an area
	 */
	public void triggerArea(Dungeon a, Player p, FightingEnemy e, Library l, int n, String i, Village v, PuzzleEnemy pe, GameEnemy ge);
	
	/**
	 * Method to search area
	 */
	public void inspectArea(Sword s, Shield sh, Player p, Key k, HealthBoost hb, SpecialItem si);

}
