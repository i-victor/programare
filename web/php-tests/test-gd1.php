<?php

// set up array of points for polygon
$values = array(
			40,  50,  // Point 1 (x, y)
			20,  240, // Point 2 (x, y)
			60,  60,  // Point 3 (x, y)
			240, 20,  // Point 4 (x, y)
			50,  40,  // Point 5 (x, y)
			10,  10   // Point 6 (x, y)
			);

// create image
$image = imagecreatetruecolor(250, 250);

// allocate colors
$bg   = imagecolorallocate($image, 0, 0, 0);
$color = imagecolorallocate($image, 0, 255, 0);

// fill the background
imagefilledrectangle($image, 0, 0, 249, 249, $bg);

// draw a polygon
imagefilledpolygon($image, $values, 6, $color);

// flush image
header('Content-type: image/png');
imagepng($image);
imagedestroy($image);

//END
