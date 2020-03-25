import java.util.*;
/**
 * Class to Represent an email
 */
public class EMail
{
    // instance variables
    private String emailText;
    private String name;
    private boolean attach;

    /**
     * Constructor for objects of class EMail
     */
    public EMail()
    {
        // initialise instance variables
        emailText = "Hello";
        name = "Jim";
        attach = false;
    }
    
    /**
     * 2nd Constructor for objects of class EMail to set values
     */
    public EMail(String eT, String n, boolean a)
    {
        // initialise instance variables
        emailText = eT;
        name = n;
        attach = a;
    }

    /**
     * Method to print all details of the email
     */
    public void printDetails()
    {
        System.out.println("Email message says: " + emailText);
        System.out.println("Sender's name is: " + name);
        System.out.println("Does the message contain any attachments?: " + attach);
    }
    
    /**
     * getter for the email text
     */
    public String getEmailText()
    {
        return emailText;
    }
    
    /**
     * getter for the name
     */
    public String getName()
    {
        return name;
    }
    
    /**
     * getter for the attachment
     */
    public boolean getAttach()
    {
        return attach;
    }
    
    /**
     * setter for the email text
     */
    public void setEmailText(String eT)
    {
        emailText = eT;
    }
    
    /**
     * setter for the name
     */
    public void getName(String n)
    {
        name = n;
    }
    
    /**
     * setter for the attachment
     */
    public void getAttach(boolean a)
    {
        attach = a;
    }
}
