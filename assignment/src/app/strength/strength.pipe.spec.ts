import { Academics } from './strength.pipe';

xdescribe("Testing Strength Pipe",()=>{
  let pipe:Academics;

  beforeEach(()=>{
    pipe = new Academics();
  })

  afterEach(()=>{
    pipe = null;
  })

  it("Should return 78 (weak) with 78",()=>{
      let result = pipe.transform(78);
      expect(result).toBe("78(Distinction)");
  })

  it("should return 60 (strong) with 60",()=>{
    let result = pipe.transform(60);
    expect(result).toBe("60(First Class)");
  })

  it("should return 50 (unbelievable) with 50",()=>{
    let result = pipe.transform(50);
    expect(result).toBe("50(Second Class)");
  })

  it("should return 40 (unbelievable) with 40",()=>{
    let result = pipe.transform(40);
    expect(result).toBe("40(Pass)");
  })

  it("should return 30 (unbelievable) with 30",()=>{
    let result = pipe.transform(30);
    expect(result).toBe("30(Fail)");
  })
})
