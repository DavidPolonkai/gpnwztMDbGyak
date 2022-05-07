//b
db.createCollection("auto")
use auto
//c 

db.auto.insert({'tipus' : 'Opel', 'szin' : 'piros' , 'ár' : 500011, 'gyév':2001});
db.auto.insert({'tipus' : 'Suzuki', 'szin' : 'sárga' , 'ár' : 600000, 'gyév':2005, "állapot" : "jó"});
db.auto.find();
//d

db.auto.insertMany([{'tipus' : 'Suzuki', 'szin' : 'sárga' , 'ár' : 600000, 'gyév':2005} ,
 {'tipus' : 'Toyota', 'szin' : 'fehér' , 'ár' : 1600000, 'gyév':2010},
 {'tipus' : 'Wolkswagen', 'szin' : 'zöld' , 'ár' : 904000, 'gyév':2007},
 'tipus' : 'Audi', 'szin' : 'kék' , 'ár' : 3220000, 'gyév':2014},
 'tipus' : 'Opel', 'szin' : 'piros' , 'ár' : 500011, 'gyév':2001}] );
 
//f
db.auto.find({'ár' : {'$gt': 1000000}},{'tipus' : 1 , _id : 0}).count();

//g
db.auto.updateMany ({},{"$set":{"állapot": "jó"}})

//h
db.auto.updateMany ({"gyév" : {"$lt" : 2004}},{"$set":{"állapot": "sérült"}})

//i
db.auto.deleteMany({"állapot" : "sérült"});
db.auto.insertMany([{'tipus' : 'Suzuki', 'szin' : 'sárga' , 'ár' : 600000, 'gyév':2005} ,
 {'tipus' : 'Toyota', 'szin' : 'fehér' , 'ár' : 1600000, 'gyév':2010},
 {'tipus' : 'Wolkswagen', 'szin' : 'zöld' , 'ár' : 904000, 'gyév':2007},
 {'tipus' : 'Audi', 'szin' : 'kék' , 'ár' : 3220000, 'gyév':2014},
 {'tipus' : 'Opel', 'szin' : 'piros' , 'ár' : 500011, 'gyév':2001}] )
db.auto.insertMany([{'tipus' : 'Opel', 'szin' : 'sárga' , 'ár' : 600000, 'gyév':2005} ,
 {'tipus' : 'Opel', 'szin' : 'fehér' , 'ár' : 1600000, 'gyév':2010},
 {'tipus' : 'Wolkswagen', 'szin' : 'zöld' , 'ár' : 904000, 'gyév':2007},
 {'tipus' : 'Toyota', 'szin' : 'kék' , 'ár' : 3220000, 'gyév':2014},
 {'tipus' : 'Toyota', 'szin' : 'piros' , 'ár' : 500011, 'gyév':2001}])
db.auto.find()
