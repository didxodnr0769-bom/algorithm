// 문제 설명
// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < before의 길이 == after의 길이 < 1,000
// before와 after는 모두 소문자로 이루어져 있습니다.
// 입출력 예
// before	after	result
// "olleh"	"hello"	1
// "allpe"	"apple"	0

function solution(before, after) {
  // 1. 문자를 나눠 배열로 만든다
  // 2. 배열을 정렬한다.
  // 3. 다시 문자열로 만든다.
  const sort = (str) => str.split("").sort().join("");
  // 4. 정렬된 문자끼리 비교한다.
  return sort(before) === sort(after) ? 1 : 0;
}
console.log(solution("olleh", "hello")); // 1
console.log(solution("allpe", "apple")); // 0
