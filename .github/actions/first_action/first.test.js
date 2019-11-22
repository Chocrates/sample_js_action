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
