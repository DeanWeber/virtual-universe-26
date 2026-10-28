import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

test('lists each keynote highlight title grouped by topic', () => {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL('./list.js', import.meta.url))], {
    cwd: new URL('../', import.meta.url),
    encoding: 'utf8',
  });

  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stderr, '');
  assert.equal(
    result.stdout,
    [
      'The modern GitHub experience',
      '- AI overview tab',
      '- Media in issues from the CLI',
      '- Stacked pull requests',
      '',
      'Open source maintainers',
      '- Contribution controls',
      '',
      'Agentic software development',
      '- Copilot automations',
      '- Security review',
      '',
    ].join('\n'),
  );
});
