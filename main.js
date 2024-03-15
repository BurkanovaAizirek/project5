//---------1)Добавить к объекту свойство age, получить его через prompt:
let userData = {
    name: "John"
  };
  
  userData.age = prompt("Введите возраст:");
  
  console.log(userData);
  //---------2)Добавить свойство underage с булевым значением, полученным через confirm:
  
  userData.underage = confirm("Вы несовершеннолетний?");
  
  console.log(userData);
  //--------3)С помощью prompt получить ключ объекта. С помощью метода delete удалить это свойство с объекта:
  
  let keyToDelete = prompt("Введите ключ, который хотите удалить:");
  
  delete userData[keyToDelete];
  
  console.log(userData);
  //---------4)Добавить к объекту свойство address, которое в свою очередь является объектом со свойствами country, city, street.
  userData.address = {
    country: "Kyrgyzstan",
    city: "Bishkek",
    street: "Sovetskaya"
  };
  
  
  
  console.log(userData);
  //---------5)Вывести все значения, включая свойства в address:
  
  console.log("Name:", userData.name);
  console.log("Age:", userData.age);
  console.log("Underage:", userData.underage);
  console.log("Address:", userData.address);