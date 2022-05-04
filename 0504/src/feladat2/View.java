package feladat2;

import java.util.List;
import java.util.Scanner;

public class View {
	private static final Scanner scan=new Scanner(System.in); 
	
	public String readFromKeyboard() {
		return scan.nextLine();
	}
	
	public void showString(String str) {
		System.out.println(str);
	}
	
	public void showStringList(List<String> strList) {
		for (String s : strList) {
			System.out.println(s);
		}
	}
}
