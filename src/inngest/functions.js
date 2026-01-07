import { inngest } from "./client";
import { gemini, createAgent } from "@inngest/agent-kit"

// const model = gemini({ model: "gemini-1.5-flash" });

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "agent/hello" },

  async ({ event, step }) => {
    const helloAgent= createAgent({
         name:"hello-agent",
         description:"A simple agent that says hello",
         system:"You are a helpfull assitant. Always greets with enthusiasm",
         model: gemini({ model: "gemini-2.5-flash" })
    })
    const {output} = await helloAgent.run("Say Hello to the user!")
    return{
      message: output[0].content
    }
  },
);