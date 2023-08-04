/**
 * 정확한 이메일 형식을 지켰는지 체크하는 정규 표현식을 완성하시오
 */
const regex = /^([\dA-z][\w-\.])*@([\dA-z\.]+)$/g;
regex.test("jade123@topician.com"); // true
regex.test("jade123@topician.store"); // true
regex.test("jade123@topician"); // false
regex.test("ja_de.j-u-n@topician.store"); // true
regex.test("jade@jeon@topician.store"); // false
