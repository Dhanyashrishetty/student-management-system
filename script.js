let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents(list = students){

const table = document.getElementById("studentTable");
table.innerHTML="";

list.forEach((student,index)=>{

table.innerHTML += `
<tr>
<td>${student.name}</td>
<td>${student.roll}</td>
<td>${student.course}</td>

<td>
<button class="edit" onclick="editStudent(${index})">Edit</button>
<button class="delete" onclick="deleteStudent(${index})">Delete</button>
</td>

</tr>
`;

});

}

function addStudent(){

const name=document.getElementById("name").value;
const roll=document.getElementById("roll").value;
const course=document.getElementById("course").value;

if(name=="" || roll=="" || course==""){
alert("Please fill all fields");
return;
}

students.push({name,roll,course});

localStorage.setItem("students",JSON.stringify(students));

clearInputs();

displayStudents();

}

function deleteStudent(index){

students.splice(index,1);

localStorage.setItem("students",JSON.stringify(students));

displayStudents();

}

function editStudent(index){

const student = students[index];

document.getElementById("name").value = student.name;
document.getElementById("roll").value = student.roll;
document.getElementById("course").value = student.course;

deleteStudent(index);

}

function searchStudent(){

const keyword=document.getElementById("search").value.toLowerCase();

const filtered = students.filter(student =>
student.name.toLowerCase().includes(keyword) ||
student.roll.toLowerCase().includes(keyword) ||
student.course.toLowerCase().includes(keyword)
);

displayStudents(filtered);

}

function clearInputs(){

document.getElementById("name").value="";
document.getElementById("roll").value="";
document.getElementById("course").value="";

}

displayStudents();