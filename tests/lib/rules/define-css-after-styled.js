/**
 * @fileoverview `css` declarations must come after `styled` declarations
 * @author Jakob Ankarhem
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/define-css-after-styled');
const RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const ERROR_MSG = 'linaria css styles must be declared after styled components';

var ruleTester = new RuleTester();

ruleTester.run('define-css-after-styled', rule, {
  valid: [
    {
      code: `
        const StyledComponent = styled.div\`
          color: white;
        \`
        const styles = css\`
          color: black;
        \`
      `,
    },
  ],

  invalid: [
    {
      code: `
        const styles = css\`
          color: black;
        \`
        const StyledComponent = styled.div\`
          color: white;
        \`
      `,
      errors: [
        {
          message: ERROR_MSG,
          type: 'Program',
        },
      ],
    },
  ],
});
