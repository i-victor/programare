#include <iostream>
#include <math.h>

using namespace std;

int main()
{

    int a,b,c;

    cin >> a;
    cin >> b;
    cin >> c;

    float p = (a+b+c)/2;

    cout << "semiperimetrul:" << p <<endl;

    cout << "Aria triunghiului este:" << sqrt(p*(p-a)*(p-b)*(p-c)) <<endl;

    return 0;
}