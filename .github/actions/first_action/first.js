const core = require('@actions/core')

run = async () => {
    try {
        const creature = core.getInput('amazing-creature')

        if(creature === 'mosquito') {
            core.setFailed('Sorry, mosquitos are not amazing')
            return

            core.debug('test')
        }

        const message = `Hello! You are an amazing ${creature}!`
        core.debug(message)
        core.setOutput('amazing-message',message)
    } catch (error) {
        core.setFailed('First-action failure: ${error}')
    }
}

run()

module.exports = { run }
