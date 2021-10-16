#include<fstream>

using namespace std;

ifstream fin("problema-01.in");
ofstream fout("problema-01.out");

int main(){
	int n, x;
	int m=1, k=0, nr=0;

	fin>>n>>x;
	fout<<(n+1)/2<<'\n';
	while(m<=n){
		m = m*2;
	}
	m = m/2;
	fout<<m<<'\n';
	while(x%2==0){
		x = x/2;
		k++;
	}
	fout<<k+1<<'\n';
	while(n!=0){
		nr++;
		n = n/2;
	}
	fout<<nr ;
	return 0;

}
