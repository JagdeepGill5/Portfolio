/**
* This is a class to represent one running scenario of the game
*/
public class RunningScenarioofGame {

	/**
	 * Constructor to create all objects and methods required for running the game
	 */
	public static void RunningScenarioofGame() 
	{
		BoardGame b = new BoardGame();
		Dungeon a = new Dungeon("Dungeon");
		Village v = new Village("Village");	
		Library l = new Library("Library");
		Player p = new Player("Batman");
		FightingEnemy e = new FightingEnemy("Joker");
		PuzzleEnemy pe = new PuzzleEnemy("Riddler");
		GameEnemy ge = new GameEnemy("Bane");
		String i = "Paper";
		Sword s = new Sword("Sword");
		Shield sh = new Shield("Shield");
		Key k = new Key("Key");
		HealthBoost hb = new HealthBoost("HealthBoost");
		SpecialItem si = new SpecialItem("SpecialItem");
		int n = 5;
		b.printGameBoard();
		b.printPlayersCoordinates();
		b.setX(4);
		b.setY(2);
		b.movePlayer();
		b.getAreaFromPlayersPostion();
		b.triggerArea(a, p, e, l, n, i, v, pe, ge);
		b.setX(2);
		b.setY(1);
		b.movePlayer();
		b.getAreaFromPlayersPostion();
		b.triggerArea(a, p, e, l, n, i, v, pe, ge);
		b.inspectArea(s, sh, p, k, hb, si);
		b.setX(3);
		b.setY(3);
		b.movePlayer();
		b.getAreaFromPlayersPostion();
		b.triggerArea(a, p, e, l, n, i, v, pe, ge);
		b.setX(0);
		b.setY(4);
		b.movePlayer();
		b.getAreaFromPlayersPostion();
		b.triggerArea(a, p, e, l, n, i, v, pe, ge);
		b.inspectArea(s, sh, p, k, hb, si);
		b.setX(3);
		b.setY(3);
		b.movePlayer();
		b.getAreaFromPlayersPostion();
		b.triggerArea(a, p, e, l, n, i, v, pe, ge);
		b.inspectArea(s, sh, p, k, hb, si);
		b.setX(0);
		b.setY(0);
		b.movePlayer();
		b.getAreaFromPlayersPostion();
		b.triggerArea(a, p, e, l, n, i, v, pe, ge);
		b.inspectArea(s, sh, p, k, hb, si);
		b.setX(4);
		b.setY(2);
		b.movePlayer();
		b.getAreaFromPlayersPostion();
		b.triggerArea(a, p, e, l, n, i, v, pe, ge);
		b.inspectArea(s, sh, p, k, hb, si);
		p.printItemscollected();
		b.setX(1);
		b.setY(0);
		b.movePlayer();
		b.getAreaFromPlayersPostion();
		b.triggerArea(a, p, e, l, n, i, v, pe, ge);
		b.inspectArea(s, sh, p, k, hb, si);
	}

	/**
	 * Method to simulate the game
	 */
	public static void main(String[] args) 
	{
		RunningScenarioofGame();
	}
}



