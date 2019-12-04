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

        await octokit.issues.createComment({issue_number: issue.number, content: 'test'})

        core.debug('did we say something?')

    } catch (error) {
        core.setFailed(`Issue-action failure: ${error}`)
    }
}

run()

module.exports = { run }
