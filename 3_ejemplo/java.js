    

function matrizCaracol(){
    let contenido = document.getElementById("matriz")
    let texto= ""
    
    let n = 8
    let matriz = new Array(n)
    for(x=0;x<n;x++){
        matriz[x]= new Array(n)
    }
    for(x=0;x<n;x++){
        for(y=0;y<n;y++){
            matriz[x][y]= 0;
        }
    }
    contenido.innerText=texto



    let li = 0
    let ls = n
    let total_iteraciones=0
    if(n%2==0){
        total_iteraciones=n/2
    }
    else{
        total_iteraciones=parseInt(n/2)
    }

    let c=1
    for(j=1 ; j<=total_iteraciones+1; j++){
        for(i = li ; i < ls; i++){
            matriz[li][i]=c;
            c=c+1;
        }
        for(i = li+1 ; i < ls; i++){
            matriz[i][ls-1]=c;
            c=c+1;
        }
        for(i = ls-2 ; i >= li; i--){
            matriz[ls-1][i]=c;
            c=c+1;
        }
        for(i = ls-2 ; i > li; i--){
            matriz[i][li]=c;
            c=c+1;
        }
        ls=ls-1
        li=li+1
    }
    



    for(x=0;x<n;x++){
        for(y=0;y<n;y++){
            texto+=matriz[x][y]+"\t\t    "
        }
        texto+="\n"
    }
    contenido.innerText=texto
    contenido.style.backgroundColor="green";
    contenido.style.color="white";
    return null;
    
}