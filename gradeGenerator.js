function studentGrade(marks){
    if (marks > 100 || marks < 0 ){
        return "Invalid marks";
    } else if (marks > 79 ){
        return " A";
    } else if (marks >= 60){
        return " B";
    }  else if (marks >= 49){
        return " C";
    } else if (marks >= 40){
        return " D"
    } else {
        return " E"
    }
}

console.log(studentGrade(55)); 
console.log(studentGrade(101)); 
console.log(studentGrade(88));
console.log(studentGrade(75));
console.log(studentGrade(45));
console.log(studentGrade(35));    