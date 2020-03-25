import java.util.Random;

/**
 * This is a Sub Class of the Areas Supper Class representing the Library
 */
public class Library extends Areas implements Puzzle {
	
	private Random rand;

	/**
	 * Constructor to initialise name and random number 
	 */
	public Library(String n) 
	{
		super(n);
		rand = new Random();
	}

	/**
	 * Method that runs a puzzle using the puzzle interface 
	 */
	public void solvePuzzle(int n, PuzzleEnemy pe) 
	{
		int x = rand.nextInt(10);
		int y = rand.nextInt(10);
		System.out.println("Batman has to guess what is " + x + "+" + y + "?");
		if (n == x + y)
		{
			System.out.println("Batman guessed correct and enters the Library");
			pe = null;
		} else {
			System.out.println("Batman has to try again \n");
			solvePuzzle(n, pe);
		}
	}	
}
