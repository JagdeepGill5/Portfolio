/**
 * This is a Super Class for all of the items in the game
 */
public class Items {

	private String name;
	
	/**
	 * Constructor to initialise the name
	 */
	public Items(String n) 
	{
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
