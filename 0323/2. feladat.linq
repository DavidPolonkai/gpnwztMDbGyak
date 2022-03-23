<Query Kind="Statements" />

//a
int size = 11;
int [] array = new int[size];

for (int i = 0; i<size ;i++){
	array[i] = i;
}
//b
array.Where(x=>x%2==0).Select(x=>x*x).Dump("B");
//c
array.Average().Dump("C");
//d
array
.Where(x=>x>array.Average())
.Select(x=> new {x, Diff = x-array.Average()})
.Dump("D");
//e
array
.Select(x=>new {x, Diff = Math.Abs(x-array.Average())})
.GroupBy(x=>Math.Abs(x.Diff))
.Dump("E");
//e2
array.GroupBy(x=>Math.Abs(x-array.Average())).Dump("test");
