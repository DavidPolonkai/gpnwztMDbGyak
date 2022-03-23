<Query Kind="Statements" />

//a
String [] names = {"Németh Viktor","Toronya Bertalan","Veres Marcell","Bolyki Balázs","Polonkai Dávid"};
//b
names.Dump("B");
//c
names.OrderBy(x=>x[0]).Select(x=>x.Split()[1]).Dump("C");
//d
names.Count(x=>x.ToUpper().IndexOf("L")>0).Dump("D");
//e
names.Where(x=>x.Split()[0].Length>5).Select(x=>x.Split()[1]).Dump("E");