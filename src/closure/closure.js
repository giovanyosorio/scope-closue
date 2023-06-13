function greeting() {
    let username="gio"
    return function displayUsername() {
        console.log(username);
        return "username"
    }
}

const g= greeting()

console.log(g);
console.log(g());