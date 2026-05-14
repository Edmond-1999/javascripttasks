const personal = {name: "Ngozi", age: 25}
const professional = {role: "Developer", company: "Semicolon"}

const mergedObject = {...personal, ...professional}

console.log(mergedObject)
