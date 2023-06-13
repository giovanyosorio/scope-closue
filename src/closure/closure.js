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


function createPetList() {
    const petList = [];
    return function addPet(myPet) {
      if (myPet) {
        petList.push(myPet);
      }
      return petList;
    }
  }

  const pet=createPetList()
console.log(pet("rino"));