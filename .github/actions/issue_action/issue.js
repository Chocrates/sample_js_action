const core = require('@actions/core')
const github = require('@actions/github')

run = async () => {
    try {
        core.debug({payload: github.context.payload})

        const token = process.env['GITHUB_TOKEN']
        const octokit = new github.GitHub(token)

        const issue = github.context.payload.issue

        if(github.context.payload.action !== 'opened' || !issue){
            core.debug('Not a valid event')
            return
        }

        // Getting the owner ane repo
        const [owner,repo] = process.env['GITHUB_REPOSITORY'].split('/')
        core.debug(`Owner: ${owner}, Repo: ${repo}`)
        await octokit.issues.createComment({
            repo: repo,
            owner: owner,
            issue_number: issue.number,
            body: 'test'})

        core.debug('did we say something?')

    } catch (error) {
        core.setFailed(`Issue-action failure: ${error}`)
    }
}

run()

module.exports = { run }
