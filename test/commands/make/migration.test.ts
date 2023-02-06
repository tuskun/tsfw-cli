import {expect, test} from '@oclif/test'

describe('make/migration', () => {
  test
  .stdout()
  .command(['make/migration'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['make/migration', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
