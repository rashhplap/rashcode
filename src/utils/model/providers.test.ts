import { afterEach, expect, test } from 'bun:test'

import {
  getAPIProvider,
  usesAnthropicAccountFlow,
} from './providers.js'

const originalEnv = {
  RASH_CODE_USE_GEMINI: process.env.RASH_CODE_USE_GEMINI,
  RASH_CODE_USE_GITHUB: process.env.RASH_CODE_USE_GITHUB,
  RASH_CODE_USE_OPENAI: process.env.RASH_CODE_USE_OPENAI,
  RASH_CODE_USE_BEDROCK: process.env.RASH_CODE_USE_BEDROCK,
  RASH_CODE_USE_VERTEX: process.env.RASH_CODE_USE_VERTEX,
  RASH_CODE_USE_FOUNDRY: process.env.RASH_CODE_USE_FOUNDRY,
}

afterEach(() => {
  process.env.RASH_CODE_USE_GEMINI = originalEnv.RASH_CODE_USE_GEMINI
  process.env.RASH_CODE_USE_GITHUB = originalEnv.RASH_CODE_USE_GITHUB
  process.env.RASH_CODE_USE_OPENAI = originalEnv.RASH_CODE_USE_OPENAI
  process.env.RASH_CODE_USE_BEDROCK = originalEnv.RASH_CODE_USE_BEDROCK
  process.env.RASH_CODE_USE_VERTEX = originalEnv.RASH_CODE_USE_VERTEX
  process.env.RASH_CODE_USE_FOUNDRY = originalEnv.RASH_CODE_USE_FOUNDRY
})

function clearProviderEnv(): void {
  delete process.env.RASH_CODE_USE_GEMINI
  delete process.env.RASH_CODE_USE_GITHUB
  delete process.env.RASH_CODE_USE_OPENAI
  delete process.env.RASH_CODE_USE_BEDROCK
  delete process.env.RASH_CODE_USE_VERTEX
  delete process.env.RASH_CODE_USE_FOUNDRY
}

test('first-party provider keeps Anthropic account setup flow enabled', () => {
  clearProviderEnv()

  expect(getAPIProvider()).toBe('firstParty')
  expect(usesAnthropicAccountFlow()).toBe(true)
})

test.each([
  ['RASH_CODE_USE_OPENAI', 'openai'],
  ['RASH_CODE_USE_GITHUB', 'github'],
  ['RASH_CODE_USE_GEMINI', 'gemini'],
  ['RASH_CODE_USE_BEDROCK', 'bedrock'],
  ['RASH_CODE_USE_VERTEX', 'vertex'],
  ['RASH_CODE_USE_FOUNDRY', 'foundry'],
] as const)(
  '%s disables Anthropic account setup flow',
  (envKey, provider) => {
    clearProviderEnv()
    process.env[envKey] = '1'

    expect(getAPIProvider()).toBe(provider)
    expect(usesAnthropicAccountFlow()).toBe(false)
  },
)

test('GEMINI takes precedence over GitHub when both are set', () => {
  clearProviderEnv()
  process.env.RASH_CODE_USE_GEMINI = '1'
  process.env.RASH_CODE_USE_GITHUB = '1'

  expect(getAPIProvider()).toBe('gemini')
})
