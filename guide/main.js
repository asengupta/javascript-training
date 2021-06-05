function sayHello(name, country) {
    console.log("Hello, " + name + " from " + country)
}

sayHello("Coeus", "AUS")
sayHello("Jess", "MALAYSIA")
sayHello("Dex", "Singapore")
sayHello("SWAGUE", "Boganland")
sayHello("India", "Etten")

function plusOne(number) {
    return number + 1
}

y = [1,2,3,4,5,6]

for (index in y) {
    console.log("This number is " + y[index])
}

coeus = {
    name: "Coeus",
    address: {
        street: "Bogan Street",
        district: "Munty Distt",
        zip: "11000101",
        country: "AUS",
    },
    dicksize: 0,
    age: 420
}

tronMembers = [
    {
        name: "Coeus",
        address: {
            street: "Bogan Street",
            district: "Munty Distt",
            zip: "11000101",
            country: "AUS",
        },
        age: 420
    },
    {
        name: "Jess",
        address: {
            street: "Bogan Street",
            district: "Munty Distt",
            zip: "11000101",
            country: "MSY",
        },
        age: 420
    }
]

console.log(tronMembers)
