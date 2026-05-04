#include <iostream>

using namespace std;

void practice(int arr[], int size){
    for(int i = 0; i < size; i = i + 2){
        cout << arr[i] << endl;
    }
}

int main(){
    int arr[] = {10, 20, 30, 40, 50};
    int size = 5;

    practice(arr, size);

    return 0;
}