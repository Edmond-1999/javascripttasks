const user = {username: "admin", password: "12345"};

function removePassword(user){
    delete user.password;
    return user;
}

console.log(removePassword(user));

