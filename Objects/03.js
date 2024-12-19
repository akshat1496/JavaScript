// Object Destructuring


const Course = {
    name: 'JavaScript',
    CourseId : 'Hdgh',
    Language:"English"
}

// console.log(Course.Language);
// console.log(Course.Language);
// console.log(Course.Language);
// console.log(Course.Language);

// const {Language } = Course; // Object Key De-structured
// console.log("New",Language);
// console.log(Language);
// console.log(Language);
// console.log(Language);

const {Language : lang} = Course;//Object Key De-structured with given newVariable'lang'.
console.log("New",lang);
console.log(lang);
console.log(lang);
console.log(lang);


// BASIC API DESIGN 
// API is nothing but a simple object representation but here both key and key value are in String form . JSON is the type which any API used.

// {
//     "name":"JavaScript",
//     "CourseId":"Hdgh",
//     "Language":"English"
// }

// This become our API. Here different methods are used when Database fetch Input or Output