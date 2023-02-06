import {expect, test} from '@oclif/test'

describe('command/migrate', () => {
  test
  .stdout()
  .command(['command/migrate'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['command/migrate', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
