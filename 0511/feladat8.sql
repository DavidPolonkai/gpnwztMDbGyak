a)
SELECT name, type FROM owner CROSS JOIN motorbike WHERE owner.oid =
motorbike.oid;
b)
SELECT name, type FROM owner INNER JOIN motorbike USING(oid);
