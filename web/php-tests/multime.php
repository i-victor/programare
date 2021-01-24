<?php

$multime = [ 1, 3, 2, 5, 4 ];

$max = 0;
for($i=0; $i<count($multime); $i++) {
    if($multime[$i] > $max) {
        $max = $multime[$i];
    }
}
echo $max;

?>