/** @jsx jsx */

import { Editor } from 'slate';
import { jsx } from '../../../../__test-utils__/jsx';
import { setPropsToNodes } from '../../../transforms/index';

const editor = ((
  <editor>
    <hp>test</hp>
  </editor>
) as any) as Editor;

const props = { a: 1 };

const output = (
  <editor a={1}>
    <hp a={1}>
      <htext a={1}>test</htext>
    </hp>
  </editor>
) as any;

it('should do nothing', () => {
  setPropsToNodes(editor, props);
  expect(editor.a).toBe(1);
  expect(editor.children).toEqual(output.children);
});
