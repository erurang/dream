let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

// export
module.exports.getCount = getCount;
// module.exports.increase = increase;

// console.log(module);
// exports: { getCount: [Function: getCount], increase: [Function: increase] },
// exports 되는것은 getCount increaseㅇ고 둘다 함수다 라는게 명시되있음

// 그냥 module.exports => exports. 로 쓰면 안될까? 가능함. 왜냐 exports 자체가 Module 참조값을 가지고있기떄문
// 근데 이렇게 다른값을 할당해버리면 참조값이 날라가게됨
exports = {};
exports.increase = increase;

// 참조값을 날려서 incrase가 module.exports에 존재하지않고 getCount만 있는걸 볼수있음
console.log(module);
