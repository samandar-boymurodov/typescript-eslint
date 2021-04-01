/**
 * Nx is picking up on the fact that we technically have a circular dependency between ast-spec
 * and typescript-estree.
 *
 * This circular dependency only occurs in the tests/ for ast-spec and not in the main package source.
 *
 * We could therefore solve this by separating the ast-spec tests out into their own package, but the
 * other option is to get Nx to turn a blind eye to the circular dependency by doing the following:
 *
 * - Removing @typescript-eslint/typescript-estree as an explicit devDependency in the package.json
 * - Add an `.nxignore` file at the root of the monorepo which ignores this file (which we then in turn
 * ensure is the only place we directly import from the @typescript-eslint/typescript-estree package).
 */

// We need to ignore this lint error regarding it being missing from the package.json, see above.
// eslint-disable-next-line import/no-extraneous-dependencies
export { parse, TSESTree } from '@typescript-eslint/typescript-estree';
