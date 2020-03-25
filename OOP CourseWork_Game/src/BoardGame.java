import java.util.Arrays;
/**
 * This is a Class representing the Board Game which implements the Game Areas Function interface
 */
public class BoardGame implements GameAreasFunction<Object> {
	
	private Areas[][] gameBoard;
	private int[] playersLocation;
	private int x;
	private int y;
	
	/**
	 * Constructor to create the game board filled with areas objects and set the players location
	 */
	public BoardGame() 
	{
		playersLocation = new int[] {0,0};
		gameBoard = new Areas[][] {
			{new Street("Street"), new Street("Street"), new Street("Street"), new Street("Street"), new Library("Library")}, 
			{new Dungeon("Dungeon"), new Street("Street"), new Street("Street"), new Street("Street"), new Street("Street")},
			{new Street("Street"), new Village("Village"), new Street("Street"), new Street("Street"), new Street("Street")},
			{new Street("Street"), new Street("Street"), new Street("Street"), new StorageRoom("Storage Room"), new Street("Street")},
			{new Street("Street"), new Street("Street"), new Armoury("Armoury"), new Street("Street"), new Street("Street")}};
	}

	/**
	 * Method to get the x value
	 */
	public int getX()
	{
		return x;
	}
	
	/**
	 * Method to get the y value
	 */
	public int getY()
	{
		return y;
	}
	
	/**
	 * Method to set the x value
	 */
	public void setX(int x)
	{
		this.x = x;
	}
	
	/**
	 * Method to get the y value
	 */
	public void setY(int y)
	{
		this.y = y;
	}
	
	/**
	 * Method to get the game board 
	 */
	public Areas[][] getGameBoard()
	{
		return gameBoard;
	}

	/**
	 * Method to set the game board
	 */
	public void setGameBoard(Areas[][] gameBoard) 
	{
		this.gameBoard = gameBoard;
	}

	/**
	 * Method to get the players location
	 */
	public int[] getPlayersLocation() 
	{
		return playersLocation;
	}

	/**
	 * Method to print out the game board
	 */
	public void printGameBoard()
	{
		System.out.println("The game board is arranged like so:");
		for (int i = 0; i < gameBoard.length; i++) 
		{
			for (int j = 0; j < gameBoard[i].length; j++) 
			{
				System.out.print(gameBoard[i][j].getName() + " ");
			}
			System.out.println("\n");
		}
	}
	
	/**
	 * Method to print the players location
	 */
	public void printPlayersCoordinates()
	{
		System.out.println("Batmans postion: " + Arrays.toString(getPlayersLocation()) + "\n");
	}
	
	/**
	 * Method to set the players location
	 */
	public void setPlayersLocation() 
	{
		int [] playersLocation = {x,y};
		this.playersLocation = playersLocation;
	}
	
	/**
	 * Method to get move the players location using the setPlayersLocation() method
	 */
	public void movePlayer()
	{
		System.out.println("What coordinates would you like to move Batman to? ");
		setPlayersLocation();
		printPlayersCoordinates();
	}

	/**
	 * Method to relate players location to position and area on the game board and return this a string
	 */
	public String getAreaFromPlayersPostion()
	{
		int x = playersLocation[0];
		int y = playersLocation[1];
		return gameBoard[x][y].getName();		
	}
	/**
	 * Method that allows player to inspect an area to find items depending on the players location
	 */
	public void inspectArea(Sword s, Shield sh, Player p, Key k, HealthBoost hb, SpecialItem si) 
	{
		System.out.println("\n");
		System.out.println("Batman Inspects area \n");
		if (getAreaFromPlayersPostion() == "Dungeon")
		{
			p.addItem(si);
		}
		if (getAreaFromPlayersPostion() == "Village")
		{
			System.out.println(p.getName() + " found a Health Boost");
			p.addItem(hb);
		}
		if (getAreaFromPlayersPostion() == "Storage Room")
		{
			p.addItem(sh);
			System.out.println(p.getName() + " found a Sheild");
			System.out.println("Shield added to inventory \n");
		}
		if (getAreaFromPlayersPostion() == "Street")
		{
			System.out.println("Nothing found \n");
		}
		if (getAreaFromPlayersPostion() == "Library")
		{
			p.addItem(k);
			System.out.println(p.getName() + " found a Key");
			System.out.println("Key added to inventory \n");
		}
		if (getAreaFromPlayersPostion() == "Armoury")
		{
			p.addItem(s);
			System.out.println(p.getName() + " found a sword");
			System.out.println("Sword added to inventory \n");
		}
	}

	/**
	 * Method to trigger entry requirements for an area depending on the players location
	 */
	public void triggerArea(Dungeon a, Player p, FightingEnemy e, Library l, int n, String i, Village v, PuzzleEnemy pe, GameEnemy ge)
	{
		if (getAreaFromPlayersPostion() == "Dungeon")
		{
			System.out.println(e.getName() + " is standing outside, " + p.getName() + " must win a fight to enter");
			a.fight(p, e);
			System.out.println(p.getName() + " wins fight and enters Dungeon");
			p.decreaseHealth();
			System.out.println("Batmans health is: " + p.getHealth());
		}
		if (getAreaFromPlayersPostion() == "Village")
		{
			System.out.println(ge.getName() + " is standing outside, " + p.getName() + " must win 2 games to enter the Village");
			System.out.println(p.getName() + " must guess the same as Bane in both games \n");
			v.rockPaperScissors(i);
			v.diceRolling(n, ge);
		}
		if (getAreaFromPlayersPostion() == "Storage Room")
		{
			if (p.getItemsCollected().size() != 0)
			{
				for (Items item : p.getItemsCollected())
				{
					if(item instanceof Key)
					{
						System.out.println(p.getName() + " used Key to enter Storage Room");
					}
				}
			} else {
				System.out.println(p.getName() + " requires key to enter Storage Room \n");
			}
		}
		if (getAreaFromPlayersPostion() == "Street")
		{
			System.out.print(p.getName() + " is in a Street");
		}
		if (getAreaFromPlayersPostion() == "Library")
		{
			System.out.println(pe.getName() + " is standing outside, " + p.getName() + " needs to solve a puzzle to enter Library");
			System.out.println("Riddler has chosen two random numbers \n");
			l.solvePuzzle(n, pe);
		}
		if (getAreaFromPlayersPostion() == "Armoury")
		{
			if (p.getHealth() >= 70)
			{
				System.out.println(p.getName() + "'s Health is high enough, enters the Armoury \n");
			} else {
				System.out.println(p.getName() + "'s Health is not high enough and cannot enter the Armoury \n");
			}
		}
	}
}