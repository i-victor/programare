var d = new Date();

dayofweek = d.getDay();

switch(dayofweek) {

	case 1:
		$('div#rezultat').html('back to work');
	break;

	case 5:
		$('div#rezultat').html('end of work');
	break;

	case 6:
	case 0:
		$('div#rezultat').html('relax time');
	break;

	default:
		$('div#rezultat').html('waiting for the weekend');

}
