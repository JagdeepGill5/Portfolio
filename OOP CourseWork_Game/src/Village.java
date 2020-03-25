import java.util.ArrayList;
import java.util.Random;

/**
 * This is a Sub Class of the Areas Supper Class representing the Village that implements the game interface
 */
public class Village extends Areas implements Game{
	
	private Random rand;
	
	/**
	 * Constructor to initialise name and random number
	 */
	public Village(String n)
	{
		super(n);
		rand = new Random();
	}

	/**
	 * Method that runs a game of rock, paper and scissors using the Game interface 
	 */
	public void rockPaperScissors(String i) 
	{
		ArrayList<String> GameEnemyChoice = new ArrayList<>(); 
		GameEnemyChoice.add("Rock");
		GameEnemyChoice.add("Paper");
		GameEnemyChoice.add("Scissors");
	    int randNum = rand.nextInt(3);
	    String choice = GameEnemyChoice.get(randNum);
	    System.out.println("Bane's choice is: " + GameEnemyChoice.get(randNum));
	    System.out.println("Batman's choice is: " + i);
	    if (i == choice)
	    {
	    	System.out.println("Batman guessed correct, now has to guess the dice roll \n");
	    } else {
	    	System.out.println("Try again \n");
	    	rockPaperScissors(i);
	   }
	}

	/**
	 * Method that runs a game of a dice rolling using the Game interface 
	 */
	public void diceRolling(int i, GameEnemy ge) 
	{
		System.out.println("Guess dice roll");
		int x = rand.nextInt(6) + 1;
		System.out.println("Bane rolled a: " + x);
	    System.out.println("Batman guessed it was: " + i);
		if (i == x)	
		{
			System.out.print("Batman guessed right and enters Village \n");
			ge = null;
		} else {
			System.out.println("Try again \n");
			diceRolling(i, ge);
		}
	}
}