let arr = [12,54,7,64,56,264,56,423,1,36];
function myfunction (arr, asc){
    if(asc===true){
        for (let i =0; i < arr.length; i++){
            for (let j = 0; j < arr.length; j++){
                if (arr[i]>arr[j]){
                    const temp = arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                }
            }
        }
    } else {
        for (let i =0; i < arr.length; i++){
            for (let j = 0; j < arr.length; j++){
                if (arr[i]<arr[j]){
                    const temp = arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                }
            }
        }
    }
    return arr;
}

console.log(myfunction(arr, true));