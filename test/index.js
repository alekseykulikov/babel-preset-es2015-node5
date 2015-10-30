import { expect } from 'chai'

describe('babel-preset-es2015-node5', () => {
  it('parameters', () => {
    const arrayOf = (...args) => args
    const sum = (a = 1, b = a) => a + b

    expect(arrayOf(1, 2, 3)).eql([1, 2, 3])
    expect(sum()).equal(2)
  })

  it('regexps', () => {
    expect('𠮷'.match(/^.$/u)[0].length).equal(2) // eslint-disable-line no-empty-character-class
    expect('𝌆'.match(/\u{1d306}/u)[0].length).equal(2) // eslint-disable-line no-empty-character-class
  })
})
