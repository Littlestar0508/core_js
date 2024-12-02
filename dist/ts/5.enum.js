// enumerable type
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
const direction = {
    up: Direction.UP,
    down: Direction.DOWN,
    left: Direction.LEFT,
    right: Direction.RIGHT,
};
var End_point;
(function (End_point) {
    End_point["USER"] = "user.com/user";
    End_point["MONSTER"] = "monster.com/monster";
    End_point["IMAGE"] = "randomImage.com/200x200";
})(End_point || (End_point = {}));
const END_POINT = {
    user: End_point.USER,
};
export {};
