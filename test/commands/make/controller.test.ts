import {expect, test} from '@oclif/test'

describe('make/controller', () => {
  test
  .stdout()
  .command(['make/controller'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['make/controller', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
