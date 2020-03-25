/**
 * This is a Super Class for all of the Characters in the game
 */  
public class LivingCreatures {

	private String name;
	
	/**
	 * Constructor to initialise the name
	 */
	public LivingCreatures( String n) {
		name = n;
	}
	
	/**
	 * Method to get the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * Method to set the name
	 */
	public void setName(String name) {
		this.name = name;
	}

}
