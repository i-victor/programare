#include <fstream>
#include <iostream>

std::ifstream fin("centrale.in"); // content: 5\n81318 71117 2258 933 21110
//std::ofstream fout("centrale.out"); // expected content: 3

int n,x,i,a,k;

int main() {

	fin >> n; // citim prima linie (va fi 5 care este nr de numere)
	k = 0;
	for(i=1;i<=n;i++) { // pt fiecare numer de la 1 la 5 se uita dc este numar central, adica dupa ce eliminam prima si ultima cifra ramane un numar cu cifre egale
		fin >> x;
		//-- custom
		x = x / 10;
		a = x % 10;
		while((x>9) && ((x % 10) == a)) {
			x = x / 10;
		}
		if(x <= 9) {
			k++;
		}
		//-- #end custom
	}

//	fout<<k<<'\n';
//	fout.close();
	std::cout << k << '\n';

	return 0;

}
