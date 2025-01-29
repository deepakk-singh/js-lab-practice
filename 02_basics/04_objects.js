//const tinderUser = newObject()
const tinderUser={}
//console.log(tinderUser)

tinderUser.id="123abc"
tinderUser.email="dkds@gmail.com"
tinderUser.name="Deepak"
tinderUser.isLoggedIn=false
//console.log(tinderUser.id)

const regularUser={
    email:"abs@gmail.com",
    name: {
        userFullname:{
           firstName:"Deepak",
           lastName:"Kumar"
        }
    }
}
//console.log(regularUser)
//console.log(regularUser.name)
//console.log(regularUser.name.userFullname)
//console.log(regularUser.name.userFullname.firstName)


const course = {
    coursename:"SQL",
    price:"9990",
    courseInstructor:"Deepak"
}

//course.courseInstructor

const{courseInstructor}= course
console.log(courseInstructor);

{
    "name":"Deepak",
    "courseName": "DBMS",
    "price": "free"

}