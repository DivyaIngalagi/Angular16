import { NameService } from "./name-service.service";


xdescribe("Testing name service",()=>{
  let messageSvc:NameService;

  beforeAll(()=>{//returns same instance
    messageSvc = new NameService();
  })

  afterAll(()=>{
    messageSvc = null;
  })
  it("addMessage() should add message to the messages array",()=>{
    console.log("Before clearing that array:"+messageSvc.names.length);
    messageSvc.add("Hello All!!!");
      messageSvc.add("Welcome to Unit testing with Jasmine and Karma");
      let count = messageSvc.names.length;
      expect(count).toBe(2);
      console.log("Before clearing that array:"+messageSvc.names.length);
  })

  it("clearMessages() should delete all messages from the messages array",()=>{
    console.log("delete:"+messageSvc.names.length);
    messageSvc.clear();
    let count = messageSvc.names.length;
    expect(count).toBe(0);
  })
})
