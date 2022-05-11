CREATE TABLE owner (oid INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE motorbike (mid INT PRIMARY KEY, plate_number VARCHAR(7),
type VARCHAR(25), oid INT, FOREIGN KEY(oid) REFERENCES owner(oid);
