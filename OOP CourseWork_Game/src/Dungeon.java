/**
 * This is a Sub Class of the Areas Supper Class representing the Dungeon which implements the Fight interface
 */
public class Dungeon extends Areas implements Fight<Object> {
	
	/**
	 * Constructor to initialise name from Super Class 
	 */
	public Dungeon(String n) {
		super(n);
	}

	/**
	 * Method that simulates a fight between enemy and character using fight interface
	 */
	public void fight(Player p, FightingEnemy e) 
	{
		if (p.getItemsCollected().size() != 0)
		{
			for (Items item : p.getItemsCollected())
			{
				if(item instanceof Sword || item instanceof Shield)
				{
					e = null; 
				}}} else { 
				if (p.getStrength() >= e.getStrength())
				{			
					e = null;
				} else {
					if (p.getStrength() < e.getStrength())
					{				
						e = null;
					}
				}
		}
	}
}
	