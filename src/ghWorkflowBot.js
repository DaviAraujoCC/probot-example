const { identifyWorkflowName } = require("./utils/getWorkflows");
const workflowDispatch = require("./utils/workflowDispatch");

async function ghWorkflowBot(context) {
  context.log(context.payload.ref);
  if (context.payload.ref == "refs/heads/master") {
    // check if trigger keyword is present
    const workflow = await identifyWorkflowName(context, "release-bot");
    if (workflow) {
      try {
        const response = await workflowDispatch(context, workflow);
        context.log(response);
        context.log("Workflow triggered successfully");
      } catch (error) {
        context.log("CATCH:", error);
      }
    }
  }
}

module.exports = ghWorkflowBot;
