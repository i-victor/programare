var d = new Date();

dayofweek = d.getDay();

switch(dayofweek) {

	case 1:
		document.write('back to work');
	break;

	case 2:
	case 3:
	case 4:
		document.write('wait for the weekend');
	break;

	case 5:
		document.write('end of work');
	break;

	case 6:
	case 0:
		document.write('relax time');
	break;

	default:
		document.write('waiting for the weekend');

}
