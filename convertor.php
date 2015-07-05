<?php
/**
 * Created by PhpStorm.
 * User: Julian
 * Date: 3/07/15
 * Time: 12:55 PM
 */


$link = new mysqli('localhost','root','root','pedestrian');

$sql = "SELECT `lat`, `long` FROM `pedestrian_crash` WHERE `city_council` = 'Melbourne' AND `time_period` = '23:00:00-24:00:00'";

$result = $link->query($sql) or die($link->error.__LINE__);


$crash = null;

while($row = $result->fetch_assoc())
{
    $string = ' {
                   "geometry": {
                   "type": "Point",
                    "coordinates": [
                        '.$row['long'].',
                        '.$row['lat'].'
                         ]
                   },
                    "type": "Feature"
                },';

    $crash .= $string;
}

echo $crash;


mysqli_close($link);