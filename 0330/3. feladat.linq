<Query Kind="Program">
  <Connection>
    <ID>54bf9502-9daf-4093-88e8-7177c12aaaaa</ID>
    <NamingService>2</NamingService>
    <Persist>true</Persist>
    <Driver Assembly="(internal)" PublicKeyToken="no-strong-name">LINQPad.Drivers.EFCore.DynamicDriver</Driver>
    <AttachFileName>&lt;ApplicationData&gt;\LINQPad\ChinookDemoDb.sqlite</AttachFileName>
    <DisplayName>Demo database (SQLite)</DisplayName>
    <DriverData>
      <PreserveNumeric1>true</PreserveNumeric1>
      <EFProvider>Microsoft.EntityFrameworkCore.Sqlite</EFProvider>
      <MapSQLiteDateTimes>true</MapSQLiteDateTimes>
      <MapSQLiteBooleans>true</MapSQLiteBooleans>
    </DriverData>
  </Connection>
</Query>

void Main()
{
	var guests = new [] 
	{
		new Guest(111, "A", 20, new Address("Miskolc","Magyarország")),
		new Guest(222, "B", 21, new Address("Újlak","NemMagyarország")),
		new Guest(112, "C", 22, new Address("Mekklak","Magyarország")),
		new Guest(333, "D", 23, new Address("Dóraland","Magyarország")),
	};
	
	guests.GroupBy(x => x.Address.Country).Where(x => x.Count()>2).Select(x => new {x.Key,count=x.Count()}).Dump();
	guests.Where(x => x.RoomID.ToString().Substring(0,2) == guests.First().RoomID.ToString().Substring(0,2)).Select(x => x.Name).Dump("Task D");
}



class Address 
{
	public string City {get; set;}
	public string Country {get; set;}
	public Address(string city, string country)
	{
		Console.WriteLine(city + " " +country);
		City = city;
		Country = country;
	}

}

class Guest 
{
	public int RoomID {get; set;}
	public string Name {get; set;}
	public int Age {get; set;}
	public Address Address {get; set;}
	public Guest(int roomID, string name, int age, Address address)
	{
		RoomID = roomID;
		Name = name;
		Age = age;
		Address = address;
	}
}


