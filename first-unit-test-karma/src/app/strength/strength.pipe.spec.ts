import { StrengthPipe } from './strength.pipe';

describe("Testing Strength Pipe",()=>{
  let pipe:StrengthPipe;

  beforeEach(()=>{
    pipe = new StrengthPipe();
  })

  afterEach(()=>{
    pipe = null;
  })

  it("Should return 7 (weak) with 7",()=>{
      let result = pipe.transform(7);
      expect(result).toBe("7 (weak)");
  })

  it("should return 10 (strong) with 10",()=>{
    let result = pipe.transform(10);
    expect(result).toBe("10 (strong)");
  })

  it("should return 100 (unbelievable) with 100",()=>{
    let result = pipe.transform(100);
    expect(result).toBe("100 (unbelievable)");
  })

})
