/**
* This is a Sub Class of the LivingCreatures Super Class that represents the Fighting Enemy
*/
public class FightingEnemy extends LivingCreatures {
	
	private int strength;

	/**
	 * Constructor to initialise name and strength 
	 */
	public FightingEnemy(String n) 
	{
		super(n);
		setStrength(100);
	}

	/**
	 * Method to get strength 
	 */
	public int getStrength()
	{
		return strength;
	}

	/**
	 * Method to set strength
	 */
	public void setStrength(int strength) 
	{
		this.strength = strength;
	}
}
