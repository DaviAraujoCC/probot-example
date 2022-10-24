async function identifyWorkflowName(context, name) {
  const params = {
    owner: context.payload.repository.owner.login,
    repo: context.payload.repository.name,
  };

  const response = await context.octokit.rest.actions.listRepoWorkflows(params);

  console.log(response.data);
  for (const workflow of response.data.workflows) {
    if (name.indexOf(workflow.name.toLowerCase().trim()) !== -1) {
      return workflow;
    }
  }

  return null;
}

module.exports = {
  identifyWorkflowName: identifyWorkflowName,
};
