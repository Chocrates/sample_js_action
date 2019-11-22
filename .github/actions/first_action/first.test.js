const core = require('@actions/core')
const first = require('./first')

beforeEach(() => {
    jest.resetModules()
    process.env['INPUT_AMAZING-CREATURE'] = 'person'
})

afterEach(() => {
    delete process.env['INPUT_AMAZING-CREATURE']
})

describe('Debug action debug messages', () => {
    it('outputs a debug message', async () => {
        const debugMock = jest.spyOn(core,'debug')
        await first.run()
        expect(debugMock).toHaveBeenCalledWith('Hello! You are an amazing person!')
    })
})

describe('Test', () => {

    it('does not output debug messages for non-amazing creatures', async () => {
        process.env['INPUT_AMAZING-CREATURE'] = 'mosquito'
        const debugMock = jest.spyOn(core, 'debug')
        const setFailedMock = jest.spyOn(core, 'setFailed')
        await first.run()
        expect(setFailedMock).toHaveBeenCalledWith('Sorry, mosquitos are not amazing')

    })
})

describe('Debug action output', ()=> {
    it('sets the action output', async () => {
        const setOutputMock = jest.spyOn(core, 'setOutput')
        await first.run()
        expect(setOutputMock).toHaveBeenCalledWith(
            'amazing-message',
            'Hello! You are an amazing person!',
        )
    })
})
