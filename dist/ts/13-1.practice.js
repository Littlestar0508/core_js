// 문제: 모든 속성을 선택적 속성 타입으로 만들어주세요.
function updateProfile(updates) {
    console.log("Updating profile with:", updates);
}
updateProfile({ username: "new_user" });
updateProfile({ bio: "Hello there!" });
const settings = {
    theme: "dark",
    notifications: true,
};
const newUser = {
    id: 1,
    name: "John",
    email: "john@park.com",
};
const preview = {
    id: 101,
    name: "Smartphone",
};
const employee = {
    id: 1001,
    name: "Jane",
    department: "Engineering", // salary는 제외됨
};
export {};
