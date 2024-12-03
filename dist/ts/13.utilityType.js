// Omit
const user = {
    id: 1,
    name: "tiger",
};
const _user = {
    id: 1,
    name: "tiger",
};
// Pick
const user2 = {
    id: 1,
    name: "beom",
};
const user3 = {
    name: "seon",
};
const user4 = {
    id: 1,
    name: "tiger",
    email: "tiger@tiger.com",
};
// Required
const user5 = {
    id: 1,
    name: "tiger",
    email: "tiger@tiger.com",
    address: {
        lat: 20,
        long: 35,
    },
};
const user6 = {
    name: "tiger",
    address: {
        lat: 20,
        long: 35,
    },
};
export {};
