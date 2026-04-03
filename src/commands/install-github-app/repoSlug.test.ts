import assert from 'node:assert/strict'
import test from 'node:test'

import { extractGitHubRepoSlug } from './repoSlug.ts'

test('keeps owner/repo input as-is', () => {
  assert.equal(extractGitHubRepoSlug('Rashhplap/rashcode'), 'Rashhplap/rashcode')
})

test('extracts slug from https GitHub URLs', () => {
  assert.equal(
    extractGitHubRepoSlug('https://github.com/Rashhplap/rashcode'),
    'Rashhplap/rashcode',
  )
  assert.equal(
    extractGitHubRepoSlug('https://www.github.com/Rashhplap/rashcode.git'),
    'Rashhplap/rashcode',
  )
})

test('extracts slug from ssh GitHub URLs', () => {
  assert.equal(
    extractGitHubRepoSlug('git@github.com:Rashhplap/rashcode.git'),
    'Rashhplap/rashcode',
  )
  assert.equal(
    extractGitHubRepoSlug('ssh://git@github.com/Rashhplap/rashcode'),
    'Rashhplap/rashcode',
  )
})

test('rejects malformed or non-GitHub URLs', () => {
  assert.equal(extractGitHubRepoSlug('https://gitlab.com/Rashhplap/rashcode'), null)
  assert.equal(extractGitHubRepoSlug('https://github.com/Rashhplap'), null)
  assert.equal(extractGitHubRepoSlug('not actually github.com/Rashhplap/rashcode'), null)
  assert.equal(
    extractGitHubRepoSlug('https://evil.example/?next=github.com/Rashhplap/rashcode'),
    null,
  )
  assert.equal(
    extractGitHubRepoSlug('https://github.com.evil.example/Rashhplap/rashcode'),
    null,
  )
  assert.equal(
    extractGitHubRepoSlug('https://example.com/github.com/Rashhplap/rashcode'),
    null,
  )
})
