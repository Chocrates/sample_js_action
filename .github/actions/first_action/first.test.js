const core = require('@actions/core')

const first = require('./first')

describe('Debug action debug messages', () => {
    it('outputs a debug message', async () => {
        process.env['INPUT_AMAZING-CREATURE'] = 'person'
        const debugMock = jest.spyOn(core,'debug')
        await first.run()
        expect(debugMock).toHaveBeenCalledWith('Hello! You are an amazing person!')
        delete process.env['INPUT_AMAZING-CREATURE']
    })
})
