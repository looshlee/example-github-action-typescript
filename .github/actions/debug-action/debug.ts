import * as core from '@actions/core'

const run = async (): Promise<void> => {
  core.debug('👋 Hello! Did you take a DNA test? You are 100 percent! 🙌')
}

run()

export default run
