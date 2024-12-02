// 문제: Days라는 enum을 정의하고 숫자를 1부터 7까지 할당하세요.
var Days;
(function (Days) {
    Days[Days["Sunday"] = 1] = "Sunday";
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thursday"] = 5] = "Thursday";
    Days[Days["Friday"] = 6] = "Friday";
    Days[Days["Saturday"] = 7] = "Saturday";
})(Days || (Days = {}));
// 숫자형 enum 정의
console.log(Days.Sunday); // 1
console.log(Days.Saturday); // 7
// 문제: TrafficLight enum 정의후 switch case를 사용한 비교
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Green"] = 1] = "Green";
    TrafficLight[TrafficLight["Yello"] = 2] = "Yello";
})(TrafficLight || (TrafficLight = {}));
// 신호등 색상에 따라 동작을 변경하는 함수
function setTrafficLight(light) {
    switch (light) {
        case 0:
            console.log("Stop!");
            break;
        case 1:
            console.log("Go!");
            break;
        case 2:
            console.log("Wait!");
            break;
    }
}
// 사용 예시
setTrafficLight(TrafficLight.Red); // Stop!
setTrafficLight(TrafficLight.Green); // Go!
export {};
