//2.resume data in JSON format and iterate over all for loops (for,for in,for of,forEach).
var resume=[{
    "Name":"Arunkumar.P",
    "FatherName":"pachai",
    "Age":25,
    "Gender":"male",
    "Qualification":"BE-EEE",
    "Percentage":61.5
}]
//for loop:
for(let i=0;i<resume.length;i++)
{
    console.log(resume[i]);
}

//for in loop:
for(var r in resume)
{
    console.log(r,resume);
}


//for of loop

for(var newdata of resume){
    console.log(newdata,"for of loop");
}

//foreach loop
resume.forEach(numbers=>{console.log(numbers,"foreach loop")});
