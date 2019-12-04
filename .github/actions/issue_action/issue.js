const core = require('@actions/core')
const github = require('@actions/github')

run = async () => {
    try {
        console.log({payload: github.context.payload})
    } catch (error) {
        core.setFailed('Issue-action failure: ${error}')
    }
}

run()

module.exports = { run }
