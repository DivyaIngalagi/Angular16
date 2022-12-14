import { MessageService } from './message.service';

describe("Testing message service",()=>{
  let messageSvc:MessageService;

  beforeAll(()=>{//returns same instance
    messageSvc = new MessageService();
  })

  afterAll(()=>{
    messageSvc = null;
  })
  fit("addMessage() should add message to the messages array",()=>{
      messageSvc.addMessage("Hello All!!!");
      messageSvc.addMessage("Welcome to Unit testing with Jasmine and Karma");
      let count = messageSvc.messages.length;
      expect(count).toBe(2);
  })

  it("clearMessages() should delete all messages from the messages array",()=>{
    console.log("Before clearing that array:"+messageSvc.messages.length);
    messageSvc.clearMessages();
    let count = messageSvc.messages.length;
    expect(count).toBe(0);
  })
})
