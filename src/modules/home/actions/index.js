"use server"

const { inngest } = require("@/inngest/client")

 export const onInvoke = async()=>{
    await inngest.send({
      name:"agent/hello"
    })
  }