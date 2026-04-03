// Content for the rash-api bundled skill.
// Each .md file is inlined as a string at build time via Bun's text loader.

import csharpRashApi from './rash-api/csharp/rash-api.md'
import curlExamples from './rash-api/curl/examples.md'
import goRashApi from './rash-api/go/rash-api.md'
import javaRashApi from './rash-api/java/rash-api.md'
import phpRashApi from './rash-api/php/rash-api.md'
import pythonAgentSdkPatterns from './rash-api/python/agent-sdk/patterns.md'
import pythonAgentSdkReadme from './rash-api/python/agent-sdk/README.md'
import pythonRashApiBatches from './rash-api/python/rash-api/batches.md'
import pythonRashApiFilesApi from './rash-api/python/rash-api/files-api.md'
import pythonRashApiReadme from './rash-api/python/rash-api/README.md'
import pythonRashApiStreaming from './rash-api/python/rash-api/streaming.md'
import pythonRashApiToolUse from './rash-api/python/rash-api/tool-use.md'
import rubyRashApi from './rash-api/ruby/rash-api.md'
import skillPrompt from './rash-api/SKILL.md'
import sharedErrorCodes from './rash-api/shared/error-codes.md'
import sharedLiveSources from './rash-api/shared/live-sources.md'
import sharedModels from './rash-api/shared/models.md'
import sharedPromptCaching from './rash-api/shared/prompt-caching.md'
import sharedToolUseConcepts from './rash-api/shared/tool-use-concepts.md'
import typescriptAgentSdkPatterns from './rash-api/typescript/agent-sdk/patterns.md'
import typescriptAgentSdkReadme from './rash-api/typescript/agent-sdk/README.md'
import typescriptRashApiBatches from './rash-api/typescript/rash-api/batches.md'
import typescriptRashApiFilesApi from './rash-api/typescript/rash-api/files-api.md'
import typescriptRashApiReadme from './rash-api/typescript/rash-api/README.md'
import typescriptRashApiStreaming from './rash-api/typescript/rash-api/streaming.md'
import typescriptRashApiToolUse from './rash-api/typescript/rash-api/tool-use.md'

// @[MODEL LAUNCH]: Update the model IDs/names below. These are substituted into {{VAR}}
// placeholders in the .md files at runtime before the skill prompt is sent.
// After updating these constants, manually update the two files that still hardcode models:
//   - rash-api/SKILL.md (Current Models pricing table)
//   - rash-api/shared/models.md (full model catalog with legacy versions and alias mappings)
export const SKILL_MODEL_VARS = {
  OPUS_ID: 'rash-opus-4-6',
  OPUS_NAME: 'Rash Opus 4.6',
  SONNET_ID: 'rash-sonnet-4-6',
  SONNET_NAME: 'Rash Sonnet 4.6',
  HAIKU_ID: 'rash-haiku-4-5',
  HAIKU_NAME: 'Rash Haiku 4.5',
  // Previous Sonnet ID — used in "do not append date suffixes" example in SKILL.md.
  PREV_SONNET_ID: 'rash-sonnet-4-5',
} satisfies Record<string, string>

export const SKILL_PROMPT: string = skillPrompt

export const SKILL_FILES: Record<string, string> = {
  'csharp/rash-api.md': csharpRashApi,
  'curl/examples.md': curlExamples,
  'go/rash-api.md': goRashApi,
  'java/rash-api.md': javaRashApi,
  'php/rash-api.md': phpRashApi,
  'python/agent-sdk/README.md': pythonAgentSdkReadme,
  'python/agent-sdk/patterns.md': pythonAgentSdkPatterns,
  'python/rash-api/README.md': pythonRashApiReadme,
  'python/rash-api/batches.md': pythonRashApiBatches,
  'python/rash-api/files-api.md': pythonRashApiFilesApi,
  'python/rash-api/streaming.md': pythonRashApiStreaming,
  'python/rash-api/tool-use.md': pythonRashApiToolUse,
  'ruby/rash-api.md': rubyRashApi,
  'shared/error-codes.md': sharedErrorCodes,
  'shared/live-sources.md': sharedLiveSources,
  'shared/models.md': sharedModels,
  'shared/prompt-caching.md': sharedPromptCaching,
  'shared/tool-use-concepts.md': sharedToolUseConcepts,
  'typescript/agent-sdk/README.md': typescriptAgentSdkReadme,
  'typescript/agent-sdk/patterns.md': typescriptAgentSdkPatterns,
  'typescript/rash-api/README.md': typescriptRashApiReadme,
  'typescript/rash-api/batches.md': typescriptRashApiBatches,
  'typescript/rash-api/files-api.md': typescriptRashApiFilesApi,
  'typescript/rash-api/streaming.md': typescriptRashApiStreaming,
  'typescript/rash-api/tool-use.md': typescriptRashApiToolUse,
}
