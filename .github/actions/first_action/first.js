const core = require('@actions/core')

run = async () => {
    const creature = core.getInput('amazing-creature')
    core.debug(`Hello!  You are amazing ${creature}`)
}

run()

export default run
