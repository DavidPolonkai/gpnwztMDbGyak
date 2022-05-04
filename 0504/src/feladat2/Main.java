package feladat2;

import java.sql.SQLException;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		View view = new View();
		try {
			DbHandler dbHandler = new DbHandler("gpnwzt");
			view.showStringList(dbHandler.getAllUser());
			view.showString("Enter username");
			String user = view.readFromKeyboard();
			view.showString("Enter tweet");
			String tweet = view.readFromKeyboard();
			dbHandler.createTweet(user, tweet);

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			view.showString("Ó jaj, HIBA");
		}
		view.showString("Siker");
	}

}
