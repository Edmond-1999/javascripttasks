const personal = {name: 'Kemi', age: 27}; 
const professional = {role: 'Designer', company: 'TechCorp'};

const mergedObject = {...personal, ...professional};

console.log(mergedObject);
