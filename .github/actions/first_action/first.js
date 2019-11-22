const core = require('@actions/core')

run = async () => {
    const creature = core.getInput('amazing-creature')
    const message = `Hello! You are an amazing ${creature}!`
    core.debug(message)
    core.setOutput('amazing-message',message)
}

run()

module.exports = { run }
