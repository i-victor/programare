#include <fstream>
#include <iostream>

using namespace std;

ifstream fin("centrale.in"); // content: 5\n81318 71117 2258 933 21110
//ofstream fout("centrale.out"); // expected content: 3

int n,x,i,a,k;
int main(){
	fin >> n;
	k=0;
	for(i=1;i<=n;i++) {
		fin >> x;
		x = x / 10;
		a = x % 10;
		while((x>9) && ((x % 10) == a)) {
			x = x / 10;
		}
		if(x <= 9) {
			k++;
		}
	}
//	fout<<k<<'\n';
//	fout.close();
	std::cout << k << '\n';
	return 0;
}
