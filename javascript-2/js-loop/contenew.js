// continue --> skip this iteration (চালিয়ে যান --> এই পুনরাবৃত্তিটি এড়িয়ে যান)
// break --> i am done with this loop. loop end. (break --> আমার এই লুপটি শেষ। লুপ শেষ।)

for(let i = 1; i <10; i ++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}
let n = 0;
while(n <15){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
}