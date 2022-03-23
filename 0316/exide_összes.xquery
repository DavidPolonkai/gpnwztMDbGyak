Manufacturerxquery version "3.1";

let $cars := doc('https://raw.githubusercontent.com/altova/XPath-XQuery-SQL-Tutorial/master/data/Cars.xml')/CarsDB/Car

let $val:=
for $c in $cars
 let $a:=xs:integer($c/YearTill)-xs:integer($c/YearFrom)
 return 
    $a
    
return <Atlagos-piacon-toltott-evek-szama>{avg($val)}</Atlagos-piacon-toltott-evek-szama>




xquery version "3.1";

declare function local:discount ($yearFrom) as xs:decimal?{
    let $currentYear:= fn:year-from-date(current-date())
    return (xs:integer($currentYear) - xs:integer($yearFrom)) * 0.02
};


let $cars := doc('https://raw.githubusercontent.com/altova/XPath-XQuery-SQL-Tutorial/master/data/Cars.xml')/CarsDB/Car

for $c in $cars
    return $c/Model || ' ' ||(local:discount($c/YearFrom/text())*100) || '%'
    
    


xquery version "3.1";

let $ett := doc('/mnt/06CC28E9CC28D4A9/Work/MSc1/db/gpnwztMDbGyak/0302/GPNWZT_XML.xml')/GPNWZT

for $r in $ett/rendeles
return update insert
    <szamla fk_ekod="{$r/@e_r}">
    <osszeg>{$r/osszeg}</osszeg>
    {(: <etterem> {$r/@e_k </etterem>:)}
    </szamla>
    into $ett
    
    
xquery version "3.1";

let $ett := doc('/mnt/06CC28E9CC28D4A9/Work/MSc1/db/gpnwztMDbGyak/0302/GPNWZT_XML.xml')/GPNWZT

for $sz in $ett/szamla[@e_sz eq "e2"]
    return update delete $sz
    
    

xquery version "3.1";

let $cars:=doc('https://raw.githubusercontent.com/altova/XPath-XQuery-SQL-Tutorial/master/data/Cars.xml')//Car

let $man := doc('https://raw.githubusercontent.com/altova/XPath-XQuery-SQL-Tutorial/master/data/Cars_Manufacturer_Countries.xml')//CarCountry

for $res in (
for $c in $cars[Fuel eq "Diesel"], $m in $man
    where $c/Manufacturer eq $m/Manufacturer
    group by $country := $m/Country
    order by count($c/Model) descending
    return $country || count($c/Model)
    )[position() = 1 to 5]
    
return $res
