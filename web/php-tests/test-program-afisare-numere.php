<?php

echo "<table border=2><tr><td>";//Afisam tabelul in pagina
for ($tabel = 0; $tabel <= 100; $tabel++) {//initializam numarul si ii punem conditia sa fie < decat 100

	if ($tabel % 2 == 0) {//daca la impartirea cu 2 numarul da restul 0 atunci sa afiseze numarul
		echo "$tabel<br>";
	}//end if
}//end for

//============END===========