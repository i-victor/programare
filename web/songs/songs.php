<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

//-- model part

class Song {

	public $title = '';
	public $album = '';
	public $artist = '';
	public $year = 0;
	public $type = '';
	public $preview = 'img/song-icon.png';
	public $url = '';

	public function display() {
		return '<div title="'.htmlspecialchars($this->type).'" style="width:150px; height:150px; overflow:hidden; float:left; border: 1px solid grey; margin:5px;">'.
				htmlspecialchars($this->title).
				'<a href="'.htmlspecialchars($this->url).'" target="_blank"><img src="'.htmlspecialchars($this->preview).'" width="150"></a>
		</div>';
	}

} //END CLASS


//-- logic part

$all_songs = [];

// song 1

$song = new Song();
$song->title = 'Alexander the great';
$song->album = 'Somewhere in time';
$song->artist = 'Iron Maiden';
$song->year = 1986;
$song->type = 'video';
$song->preview = 'https://img.youtube.com/vi/1oTEQf1d9Iw/0.jpg';
$song->url = 'https://www.youtube.com/watch?v=1oTEQf1d9Iw';
$all_songs[] = $song;

// song 2
$song = new Song();
$song->title = 'The Trooper';
$song->album = 'Piece of mind';
$song->artist = 'Iron Maiden';
$song->year = 1983;
$song->type = 'video';
$song->preview = 'https://img.youtube.com/vi/2G5rfPISIwo/0.jpg';
$song->url = 'https://www.youtube.com/watch?v=2G5rfPISIwo';
$all_songs[] = $song;

//song 3

$song = new Song();
$song->title = 'Infinite Dreams';
$song->album = 'Seventh Son';
$song->artist = 'Iron Maiden';
$song->year = 1987;
$song->type = 'video';
$song->preview = 'https://img.youtube.com/vi/pti-PHfDhko/0.jpg';
$song->url = 'https://www.youtube.com/watch?v=pti-PHfDhko';
$all_songs[] = $song;

//song 4

$song = new Song();
$song->title = 'One';
$song->album = 'And Justice For All';
$song->artist = 'Metallica';
$song->year = 1988;
$song->type = 'audio';
$song->preview = 'https://i1.sndcdn.com/artworks-000043833340-zdwp4k-t200x200.jpg';
$song->url = 'https://soundcloud.com/mike-barbiero/metallica-one';
$all_songs[] = $song;

// song 5

$song = new Song();
$song->title = 'Fade to Black';
$song->album = 'Ride the lighting';
$song->artist = 'Metallica';
$song->year = 1988;
$song->type = 'audio';
$song->url = 'https://soundcloud.com/mike-barbiero/metallica-one';
$all_songs[] = $song;

//song 6

$song = new Song();
$song->title = 'Holy';
$song->album = 'Holy';
$song->artist = 'Justin Bieber';
$song->year = '2020';
$song->type = 'video';
$song->url = 'https://www.youtube.com/watch?v=pvPsJFRGleA';
$all_songs[] = $song;

//song 7

$song = new Song();
$song->title = 'Are you with me';
$song->album = 'Are you with me';
$song->artist = 'Lost Frequencis';
$song->year = '2008';
$song->type = 'video';
$song->url = 'https://www.youtube.com/watch?v=dQ2ufIOm7u0';
$all_songs[] = $song;

//song 8

$song = new Song();
$song->title = 'Forbidden voices';
$song->album = 'Forbidden voices';
$song->artist = 'Martin Garrix';
$song->year = '2013';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=Zv1QV6lrc_Y';
$all_songs[] = $song;

//song 9

$song = new Song();
$song->title = 'Summer';
$song->album = 'Summer';
$song->artist = 'Calvin Harris';
$song->year = '2016';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=ebXbLfLACGM';
$all_songs[] = $song;

//song 10

$song = new Song();
$song->title = 'Wolves';
$song->album = 'Wolves';
$song->artist = 'Marshmello';
$song->year = '2012';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=cH4E_t3m3xM';
$all_songs[] = $song;

//song 11

$song = new Song();
$song->title = 'Jerusalema';
$song->album = 'Jerusalema';
$song->artist = 'Master KG';
$song->year = '2020';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=fCZVL_8D048';
$all_songs[] = $song;

//song 12

$song = new Song();
$song->title = 'Titanium';
$song->album = 'Titanium';
$song->artist = 'David Guetta';
$song->year = '2010';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=JRfuAukYTKg';
$all_songs[] = $song;

//song13

$song = new Song();
$song->title = 'Animals';
$song->album = 'Animals';
$song->artist = 'Martin Garrix';
$song->year = '2012';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=DuFUtL8zUAk';
$all_songs[] = $song;

//song 14

$song = new Song();
$song->title = 'Azukita';
$song->album = 'Azukita';
$song->artist = 'Steve Aoki';
$song->year = '2010';
$song->type = 'udio';
$song->url = 'https://www.youtube.com/watch?v=mGN3kfEk_P4';
$all_songs[] = $song;

//song 15

$song = new Song();
$song->title = 'Boom';
$song->album = 'Boom';
$song->artist = 'Tiesto';
$song->year = '2016';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=tSJSVmfaMCs';
$all_songs[] = $song;

//song 16

$song = new Song();
$song->title = 'Blame';
$song->album = 'Blame';
$song->artist = 'Calvin Harris';
$song->year = '2009';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=70BASPcfWVQ';
$all_songs[] = $song;

//song 17

$song = new Song();
$song->title = 'Losing It';
$song->album = 'Losing It';
$song->artist = 'Fisher';
$song->year = '2018';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=_tfi3dDSQG4';
$all_songs[] = $song;

//song 18

$song = new Song();
$song->title = 'It aint me';
$song->album = 'It aint me';
$song->artist = 'Kygo';
$song->year = '2013';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=D5drYkLiLI8';
$all_songs[] = $song;

//song 19

$song = new Song();
$song->title = 'elevator music';
$song->album = 'elevator music';
$song->year = '2013';
$song->type = 'audio';
$song->url = 'https://www.youtube.com/watch?v=NvjcwY_CraA';
$all_songs[] = $song;

//-- view part<?php

echo "<!DOCTYPE HTML><html><head></head><body>";
foreach($all_songs as $key => $song) {
	echo $song->display();
}
echo "</body></html>";

// #END

?>