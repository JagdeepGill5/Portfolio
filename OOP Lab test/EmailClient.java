import java.util.*;
/**
 * Class to Represent an email client
 */
public class EmailClient
{
    // instance variables - replace the example below with your own
    private ArrayList<EMail> emails;

    /**
     * Constructor for objects of class EmailClient
     */
    public EmailClient()
    {
        // initialise instance variables
        emails = new ArrayList<>();
    }

    /**
    * Method to return the list
    */
    public ArrayList<EMail> getList()
    {
        return emails;
    }
    
    /**
     * Method to check and add email to list
     */
    public boolean addEmail(EMail e)
    {
        if (emails.contains(e)){
            return false;
        }else{
            emails.add(e);
            return true;
        }
    }
    
    /**
     * Method to remove email at set given position
     */
    public void removeEmailAtPosition(int index, EMail e)
    {
        if(index > emails.size()){
            System.out.println("Invalid index"); 
        }else{
            if (emails.contains(e)){
            emails.remove(index);
            System.out.println("EMail object removed successfully from your collection!");
        }
        }
    }
    
    /**
     * Checks if arraylist is empty or not
     */
    public boolean checkArrayListIsEmpty()
    {
        if (emails.size() == 0){
            return false;
        }
        return true;
    }
    
    /**
     * Print all email objects
     */
    public void printAllEmails()
    {
        if (emails.size() == 0){
            System.out.println("List is empty!");
        }else{
        for (int i=0; i < emails.size(); i++){
            emails.get(i).printDetails();
        }
        }
    }
    
    /**
     * print details of emails with entered parameter contained in them
     */
    public void printEmailsWithSearchString(String n)
    {
        for (EMail email: emails){
            if (email.getName().toLowerCase().contains(n.toLowerCase()) && email.getAttach() == true){
                email.printDetails();
            }
        }
    }
}
