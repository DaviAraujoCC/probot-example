async function workflowDispatch(context, workflow) {
  return context.octokit.rest.actions.createWorkflowDispatch({
    owner: context.payload.repository.owner.login,
    ref: "master",
    repo: context.payload.repository.name,
    workflow_id: workflow.id,
  });
}

module.exports = workflowDispatch;
