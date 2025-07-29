// odd number

// for (let i =0; i < 20; i++){
//     if(i%2===1){
//         console.log(i);
//     }

// }
// for (let i =0; i < 20; i++){
//     if(i % 2 !==0) {
//         console.log(i);
//     }
// }
// }


for (let i = 1; i < 20; i += 2) {
    console.log(i);

}

// give me the list numbers between 1 to 30 divisible by 5.   ১ থেকে ৩০ এর মধ্যে ৫ দিয়ে বিভাজ্য তালিকার সংখ্যাগুলো আমাকে দাও।

for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i)
    }
}

// give me the sum of numbers from 1 to 20 that are divisible by 3 .
// (১ থেকে ২০ পর্যন্ত ৩ দ্বারা বিভাজ্য সংখ্যার যোগফল দাও)

let total =0;
for (let i = 1; i <=20; i++){
    if (i %3 === 0){
        console.log(i);
        total = total +i;
        console.log('total', total)
    }
}

console.log('total of the number', total)