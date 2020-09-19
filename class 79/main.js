var arraynames=[];
function submit(){
    var name1=document.getElementById("Name_of_student_1").value;
    var name2=document.getElementById("Name_of_student_2").value;
    var name3=document.getElementById("Name_of_student_3").value;
    var name4=document.getElementById("Name_of_student_4").value;

    arraynames.push(name1);
    arraynames.push(name2);
    arraynames.push(name3);
    arraynames.push(name4);
console.log(arraynames)
document.getElementById("display_name").innerHTML=arraynames;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}
function sort(){
    arraynames.sort();
    console.log(arraynames);
    document.getElementById("display_name").innerHTML=arraynames;
}