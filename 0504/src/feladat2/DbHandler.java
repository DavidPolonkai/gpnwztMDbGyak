package feladat2;

import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DbHandler {
	private Connection conn;
	
	public DbHandler(String password) throws SQLException {
			this.conn = DriverManager.getConnection("jdbc:neo4j:bolt://localhost:7687", "neo4j", password);
	}
	
	public List<String> getAllUser() throws SQLException {
		Statement stmt = this.conn.createStatement();
		ResultSet rs = stmt.executeQuery("MATCH (n:User) with n.username as name RETURN name");
		List<String> nameList = new ArrayList<String>();
		while (rs.next()) {
			nameList.add(rs.getString("name"));
		}
		return nameList;
	}
	
	public void createTweet(String user,String tweet) throws SQLException {
		String[] tweetWord = tweet.split(" ");
		String shortTweet = "";
		DateTimeFormatter dtf = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
		for (int i=0;i<5 && i<tweetWord.length;i++) {
			shortTweet+=tweetWord[i];
		}
		PreparedStatement prstmt = this.conn.prepareStatement("create (t:Tweet {short:?,created:?,text:?})");
		prstmt.setString(1, shortTweet);
		prstmt.setString(2, LocalDateTime.now().format(dtf));
		prstmt.setString(3, tweet);
		prstmt.executeUpdate();
		PreparedStatement connection = this.conn.prepareStatement("match (t:Tweet), (u:User {username:?}) where t.text=? create (u)-[:authored]->(t);");
		connection.setString(1, user);
		connection.setString(2, tweet);
		prstmt.execute();
	}
	
}
