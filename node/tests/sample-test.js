// describe("회원", () => {
//   it("login", () => {
//     setTimeout(() => {
//       console.log("login"), 1000;
//     });
//   });
// });

const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
require("dotenv").config();
const db = require("../utils/db.js");

function f() {
  return [1, 2, 3];
}

before(() => console.log("before"));
// beforeEach(() => console.log("beforeEach"));
// after(() => console.log("after"));
// afterEach(() => console.log("afterEach"));

// describe.only("회원", () => {
describe("회원", () => {
  it("login", () => {
    const arr = f();
    // console.log("🚀  arr:", arr);
    expect(arr).to.deep.equal([1, 2, 3]);
  });
});

describe("dotenv", () => {
  it("get", (done) => {
    expect(process.env.TEST).to.be.equal("12345");
    done();
  });
});

describe.only("db utils", () => {
  it.only("db-gets-finds", async () => {
    const emps = await db.finds("Emp", { dept: 3 });
    console.log("🚀  emps:", emps);
    expect(emps).to.length(15);
  });

  it("db-gets", async () => {
    const limit = 10;
    const emps = await db.gets("Emp", limit);
    // console.log('🚀  emps:', emps);
    expect(emps).to.length(limit);
  });

  it("db-get", async () => {
    const emp1 = await db.get("Emp", 1);
    // console.log('🚀  emp1:', emp1);
    expect(emp1).to.deep.equal({
      id: 1,
      ename: "전파태",
      dept: 3,
      salary: 900,
    });
  });

  it("db-info", () => {
    const dbinfo = db.getDbInfo();
    // console.log('🚀  dbinfo:', dbinfo);
    expect(dbinfo).to.deep.equal({
      host: "mydb1.c85blf5gqirg.ap-northeast-2.rds.amazonaws.com",
      port: 3306,
      user: "lnsol",
      password: process.env.DB_PASSWD,
      database: "mydb",
      waitForConnections: true,
      connectionLimit: 2,
      maxIdle: 2,
    });
  });
});

// chai.should. ... 이렇게 쓰기 귀찮으니까 should 객체를 should 변수에 저장
const should = chai.should();
chai.use(chaiHttp); // DI 의존성 주입

// describe.skip("서버", () => {
describe.skip("서버", () => {
  it("get", (done) => {
    // console.log("get");
    chai
      // localhost로 테스트 하고 싶으면 이렇게 적는게 관례! https면 https로 적기
      .request("http://0.0.0.0")
      .get("/")
      .end((err, res) => {
        // console.log("body >>>", res.body);
        // console.log("body >>>", res.text);
        should.not.exist(err);
        should.exist(res);

        const { text } = res;
        text.should.eq("Hello, Node!");
        done();
      });
  });
});
