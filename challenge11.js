
// 1. Write code to get array of names from given array of users
//
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
    },
];

// const names = users.map((user) => user.name);
// const activeUsers = users.map((user) => user.isActive);

const activeUsers = [];
users.forEach((user => {
    activeUsers.push(user.isActive);
}));


// console.log("Names:", names)
console.log("Active Users:", activeUsers)
