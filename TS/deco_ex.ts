function deco(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log("🚀  key:", key);
  console.log(target.constructor.name);
  console.log(descriptor);
  const orgFn = descriptor.value;
  descriptor.value = () => {
    console.log("decooooooooooooooooo");
    orgFn();
  };
}

function decofn(...args: unknown[]) {
  console.log("decofn>>>>>>", ...args);
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const orgFn = descriptor.value;
    descriptor.value = (...args: unknown[]) => {
      console.log("decooooooooooooooooo");
      orgFn(...args);
    };
  };
}

class TestClass {
  @decofn("x", "y")
  testfn(n: number) {
    console.log("testfn!!", n);
  }
  @deco
  test() {
    console.log("test!!");
  }
}

new TestClass().testfn(2);
