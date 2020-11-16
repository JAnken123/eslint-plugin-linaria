/**
 * @fileoverview `css` declarations must come after `styled` declarations
 * @author Jakob Ankarhem
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const ERROR_MSG = 'linaria css styles must be declared after styled components';

module.exports = {
  meta: {
    docs: {
      description: '`css` declarations must come after `styled` declarations',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    const hasCssDeclarations = (node) => {
      return;
    };

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // give me methods
      Program: function (node) {
        let hasDefinedCss = false;
        node.tokens.forEach((token) => {
          if (token.type !== 'Identifier') return;
          if (token.value === 'css') {
            hasDefinedCss = true;
            return;
          }
          if (token.value === 'styled' && hasDefinedCss) {
            return context.report({ node, message: ERROR_MSG });
          }
        });
      },
    };
  },
};
