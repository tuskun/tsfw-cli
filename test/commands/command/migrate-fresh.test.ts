import {expect, test} from '@oclif/test'

describe('command/migrate-fresh', () => {
  test
  .stdout()
  .command(['command/migrate-fresh'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['command/migrate-fresh', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
