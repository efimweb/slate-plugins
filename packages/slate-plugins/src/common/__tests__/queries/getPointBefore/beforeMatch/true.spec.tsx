/** @jsx jsx */

import { Editor } from 'slate';
import { jsx } from '../../../../../__test-utils__/jsx';
import { getPointBefore } from '../../../../queries/getPointBefore';

const input = ((
  <editor>
    <hp>
      test http://localhost:3000
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

const output = { offset: 4, path: [0, 0] };

it('should be', () => {
  expect(
    getPointBefore(input, input.selection, {
      matchString: ' ',
      beforeMatch: true,
    })
  ).toEqual(output);
});
