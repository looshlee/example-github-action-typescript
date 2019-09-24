import * as core from '@actions/core'
import run from '../debug'

describe('debug action debug messages', () => {
  it('outputs a debug message', async () => {
    const debugMock = jest.spyOn(core, 'debug')
    await run()
    expect(debugMock).toHaveBeenCalledWith('👋 Hello! Did you take a DNA test? You are 100 percent! 🙌')
  })
})
