import {expect, test} from '@oclif/test'

describe('make/seeder', () => {
  test
  .stdout()
  .command(['make/seeder'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['make/seeder', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
