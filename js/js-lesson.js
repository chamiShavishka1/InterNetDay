// function gradingLogic(mark){

//     if((mark <= 100) & (mark > 90)){
//         return 'A+'
//         }else if((mark <= 89) & (mark > 80)){
//             return 'A-'
//         } else if ((mark <= 79) & (mark > 75)){
//             return 'A'
//         } else if((mark <= 74) & (mark > 65)){
//             return 'B'
//         } else if((mark <= 64) & (mark > 55)){
//             return 'C'
//         } else if((mark <= 54) & (mark > 35)){
//             return 'S'
//         }else if ((mark <= 34) & (mark > 0)){
//             return 'F'
//         }else{
//             return 'Invalid Mark'
//         }
//     }
    
//     function getStudentGrade(name,mark,grade){
//         console.log(name + '\'s Grade for ' + mark + ' marks => ' + grade)
//     }
    
    
//     getStudentGrade('kamal',92,gradingLogic(92))
//     getStudentGrade('Nimal',73,gradingLogic(73))
//     getStudentGrade('Amal',78,gradingLogic(78))
//     getStudentGrade('Sunil',100,gradingLogic(100))
//     getStudentGrade('Nipunika',12,gradingLogic(12))
//     getStudentGrade('Chathurika',38,gradingLogic(38))
//     getStudentGrade('Supuni',59,gradingLogic(59))
//     getStudentGrade('kasuni',62,gradingLogic(62))
//     getStudentGrade('Amali',-10,gradingLogic(-10))

let studentArray = [
    {
      name: "Amal",
      mark: 92,
    },
    {
      name: "Kamal",
      mark: 73,
    },
    {
      name: "Nimal",
      mark: 78,
    },
    {
      name: "Sadun",
      mark: 100,
    },
    {
      name: "Nipun",
      mark: 12,
    },
    {
      name: "chami",
      mark: 38,
    },
    {
      name: "Namal",
      mark: -52,
    }
  ];
  
  for (let student of studentArray) {
      getStudentGrade(student.name, student.mark);
  }
  
  function getGrade(mark) {
    let grade = "Invalid Mark";
  
    if (90 < mark) grade = "A+";
    else if (80 < mark) grade = "A-";
    else if (75 < mark) grade = "A";
    else if (65 < mark) grade = "B";
    else if (55 < mark) grade = "C";
    else if (35 < mark) grade = "S";
    else if (mark < 35 && mark > 0) grade = "F";
  
    return grade;
  }
  
  function getStudentGrade(name, marks) {
    console.log(name + " 's Grade for " + marks + " => " + getGrade(marks));
  }