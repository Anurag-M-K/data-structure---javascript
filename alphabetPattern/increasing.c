#include <stdio.h>
int main (){
    int i,j ;
    char  alphabet = 'A';
    for(i=1;i<=("A" - 'A'+1); i++){
        for(j=1; j<=i; j++){
            printf("%c",alphabet);
        }
        alphabet++;
        printf("\n");
    }
    return 0;
}