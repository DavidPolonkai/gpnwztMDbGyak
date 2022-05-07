//a
db.createCollection(„tulajdonos”);

//b
db.system.js.save(
 {
 _id : "save_tulaj",
 value: function(id,nev, kor)
 {
 db.tulajdonos.insert({"_id": id, "név": nev, "kor": kor})
 }
 });
db.loadServerScripts();

save_tulaj("T5","Pál", 20);

db.tulajdonos.find()

//c
db.system.js.save(
 {
 _id : "save_auto",
 value: function(tipus, szin, ar, gyart_ev, allapot , tulaj )
 {
 db.auto.insertOne({"tipus": tipus, "szin": szin, "ár": ar, "gyév": gyart_ev, "állapot": allapot, "tulaj":
tulaj})
 }
 }
);
 db.loadServerScripts();
save_auto("A113","auto2","fehér",3241,2010, "jó", "T5");

//d
db.system.js.save(
 {
 _id : "getTulajByName",
 value: function(nev)
 {
 var n = db.tulajdonos.find({"név": nev})
 while(n.hasNext()){
 print(n.next());
 }
 }
 });
 
//e
var oi = db.tulajdonos.findOne({"név":"Pál"})
db.auto.find({"tulaj":oi._id})

//f
db.auto.find().forEach(
 function(obj){
 if(obj.állapot == "sérült"){
 db.auto.update({_id: obj._id}, {$inc : {'ár': -300000}});
 }
 }
);
db.auto.find();

//g
 db.auto.find({"$where" : function(){
 if(this.ár < 1000000 && this.gyév < 2010 )
 return true;
 else
 return false;
 }}).count()
 
//h
db.auto.insertMany([{"tipus": "BMW" , "szin" : "zöld", "ár" : 12000000, "gyév" : 2008, "állapot" :
"sérült"},
 {"tipus": "Audi" , "szin" : "fekete", "ár" : 4001100, "gyév" : 2007, "állapot" : "jó"},
 {"tipus": "Opel" , "szin" : "zöld", "ár" : 12000000, "gyév" : 2008, "állapot" : "sérült"},
 {"tipus": "Toyota" , "szin" : "Fehér", "ár" : 4221100, "gyév" : 2000, "állapot" : "sérült"},
 {"tipus": "BMW" , "szin" : "zöld", "ár" : 6001100, "gyév" : 2008, "állapot" : "jó"}]);

db.auto.aggregate([
 {$group : {"_id":"$tipus","avgp":{"$avg" : "$ár"} }},
 {$sort : {"avgp": -1}}
 ]);
 
//i
db.auto.aggregate([
 {$match : {"állapot" : "sérült"}},
 {$group : {"_id": "$tipus" , "sérültek száma" : {"$sum" : 1 }}},
 {$sort : {"száma" : -1}}
]);
