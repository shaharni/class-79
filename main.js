student_names_array = [];

function submit()
{
   var display_student_array=[];

   for(var w = 1; w <=4 ; w++)
   {
    var name_of_student = document.getElementById("name_of_students"+w).value;
    console.log(name_of_student);
    student_names_array.push(name_of_student);
   }
   console.log(student_names_array);

   var len = student_names_array.lenght;
   console.log(len);

   for(var q = 0; q < len ; q++)
   {
    display_student_array.push("Name- "+student_names_array[q]);
    console.log(display_student_array);
    
   }

   console.log(display_student_array);
    document.getElementById("output").innerHTML= display_student_array;
    
    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("sort").innerHTML=remove_commas;
    
    document.getElementById("submit").style.display= "none";
    document.getElementById("sort").style.display= "inline-block";
}

function sort()
{
    student_names_array.sort();
    console.log(student_names_array);
   
    var display_student_array_sort = [];
    var len = student_names_array.lenght;
    console.log(len);

    for(var k = 0; k < len; k++)
    {
     display_student_array_sort.push("Name- "+student_names_array[k]);
     console.log(display_student_array_sort);
    }

    var remove_commas = display_student_array_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}


