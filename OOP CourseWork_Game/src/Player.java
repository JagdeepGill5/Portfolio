import java.util.ArrayList;
/**
* This is a Sub Class of the LivingCreatures Super Class that represents the Players Character
*/
public class Player extends LivingCreatures {
	
	private ArrayList<Items> Inventory;
	private int health;
	private int strength;
	
	/**
	 * Constructor to initialise inventory, health, name and strength 
	 */
    public Player(String n)
    {
    	super(n);
    	Inventory = new ArrayList<>();
        health = 60;
        strength = 100;
    }
    
    /**
	 * Method to get the health
	 */
    public int getHealth() {
		return health;
	}
    
    /**
	 * Method to set the health
	 */
	public void setHealth(int h) {
		health = h;
	}
	
	/**
	 * Method to increase health
	 */
	public void increaseHealth()
	{
		health = health + 50;
	}
    
	/**
	 * Method to decrease health  
	 */
	public void decreaseHealth()
	{
		health = health - 50;
	}
	
	/**
	 * Method to append item to inventory list
	 */
	public void addItem(Items item)
    {
		if (item instanceof HealthBoost)
		{
			increaseHealth();
			System.out.println("Health Increased by 50");
			System.out.println("Health is now: " + health + "\n");
		} else {
			if (item instanceof SpecialItem)
			{
				System.out.println("Batman found the Special Item which has ended the game");
				System.exit(0);
			} else {
				Inventory.add(item);
			}
		}
    }
    
	/**
	 * Method to get inventory list  
	 */
	public ArrayList<Items> getItemsCollected()
	{
		return Inventory;
	}
	
	/**
	 * Method to print all items in the inventory
	 */
    public void printItemscollected()
    {
    	System.out.println("Batmans Inventory");
        for(int i = 0; i < Inventory.size(); i++)
        {
            System.out.println("Items: " + Inventory.get(i).getName() + "\n");
        }
    }

    /**
	 * Method to get the strength
	 */
	public int getStrength() {
		return strength;
	}

	/**
	 * Method to set the strength  
	 */
	public void setStrength(int strength) {
		this.strength = strength;
	}
}
