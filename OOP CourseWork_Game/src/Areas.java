/**
 * This is a Super Class for all of the Areas in the game
 */
public class Areas {
	
	private String name;
	
	/**
	 * Constructor to initialise name 
	 */
	public Areas(String n)
	{
		name = n;
	}

	/**
	 * Method to return the name
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
