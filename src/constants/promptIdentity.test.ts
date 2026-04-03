import { afterEach, expect, test } from 'bun:test'

import { getSystemPrompt, DEFAULT_AGENT_PROMPT } from './prompts.js'
import { CLI_SYSPROMPT_PREFIXES, getCLISyspromptPrefix } from './system.js'
import { GENERAL_PURPOSE_AGENT } from '../tools/AgentTool/built-in/generalPurposeAgent.js'
import { EXPLORE_AGENT } from '../tools/AgentTool/built-in/exploreAgent.js'

const originalSimpleEnv = process.env.RASH_CODE_SIMPLE

afterEach(() => {
  process.env.RASH_CODE_SIMPLE = originalSimpleEnv
})

test('CLI identity prefixes describe rashcode instead of Rash Code', () => {
  expect(getCLISyspromptPrefix()).toContain('rashcode')
  expect(getCLISyspromptPrefix()).not.toContain("Anthropic's official CLI for Rash")

  for (const prefix of CLI_SYSPROMPT_PREFIXES) {
    expect(prefix).toContain('rashcode')
    expect(prefix).not.toContain("Anthropic's official CLI for Rash")
  }
})

test('simple mode identity describes rashcode instead of Rash Code', async () => {
  process.env.RASH_CODE_SIMPLE = '1'

  const prompt = await getSystemPrompt([], 'gpt-4o')

  expect(prompt[0]).toContain('rashcode')
  expect(prompt[0]).not.toContain("Anthropic's official CLI for Rash")
})

test('built-in agent prompts describe rashcode instead of Rash Code', () => {
  expect(DEFAULT_AGENT_PROMPT).toContain('rashcode')
  expect(DEFAULT_AGENT_PROMPT).not.toContain("Anthropic's official CLI for Rash")

  const generalPrompt = GENERAL_PURPOSE_AGENT.getSystemPrompt({
    toolUseContext: { options: {} as never },
  })
  expect(generalPrompt).toContain('rashcode')
  expect(generalPrompt).not.toContain("Anthropic's official CLI for Rash")

  const explorePrompt = EXPLORE_AGENT.getSystemPrompt({
    toolUseContext: { options: {} as never },
  })
  expect(explorePrompt).toContain('rashcode')
  expect(explorePrompt).not.toContain("Anthropic's official CLI for Rash")
})
