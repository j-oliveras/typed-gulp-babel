// Type definitions for gulp-babel v6.1.2
// Project: https://github.com/babel/gulp-babel.git
// Definitions by: Jordi Oliveras Rovira <https://github.com/j-oliveras>

// Gulp babel overrides filenameRelative, sourceMapTarget and sourceFileName but is not documented.

declare namespace gulpBabel {
  export interface Options {
    /**
     * Filename relative to sourceRoot.
     *
     * @default (filename)
     */
    filenameRelative?: string;

    /**
     * List of presets (a set of plugins) to load and use. Use the preset
     * name or an array with the name and an object with its options.
     *
     * @default []
     */
    presets?: (string | [string, any])[];

    /**
     * List of presets (a set of plugins) to load and use. Use the preset
     * name or an array with the name and an object with its options.
     *
     * @default []
     */
    plugins?: (string | [string, any])[];

    /**
     * ANSI highlight syntax error code frames.
     *
     * @default true
     */
    highlightCode?: boolean;

    /**
     * A glob, regex, or mixed array of both, matching paths to
     * only compile. Can also be an array of arrays containing
     * paths to explicitly match. When attempting to compile a
     * non-matching file it’s returned verbatim.
     *
     * @default null
     */
    only?: string | RegExp | (string | RegExp)[];

    /**
     * Opposite to the only option.
     *
     * @default null
     */
    ignore?: string | RegExp | (string | RegExp)[];

    /**
     * Attach a comment before all non-user injected code.
     *
     * @default null
     */
    auxiliaryCommentBefore?: string;

    /**
     * Attach a comment after all non-user injected code.
     *
     * @default null
     */
    auxiliaryCommentAfter?: string;

    /**
     * A source map object that the output source map will be based on.
     *
     * @default null
     */
    inputSourceMap?: any;

    /**
     * Set file on returned source map.
     *
     * @default (filenameRelative)
     */
    sourceMapTarget?: string;

    /**
     * Set sources[0] on returned source map.
     *
     * @default (filenameRelative)
     */
    sourceFileName?: string;

    /**
     * The root from which all sources are relative.
     *
     * @default (moduleRoot)
     */
    sourceRoot?: any;

    /**
     * Optional prefix for the AMD module formatter that will
     * be prepend to the filename on module definitions.
     *
     * @default (sourceRoot)
     */
    moduleRoot?: any;

    /**
     * If truthy, insert an explicit id for modules. By default, all
     * modules are anonymous. (Not available for common modules).
     *
     * @default false
     */
    moduleIds?: boolean;

    /**
     * Specify a custom name for module ids.
     *
     * @default null
     */
    moduleId?: string;

    /**
     * Specify a custom callback to generate a module id with.
     * Called as getModuleId(moduleName). If falsy value is
     * returned then the generated module id is used.
     *
     * @default null
     */
    getModuleId?: (moduleName: string) => string | false;

    /**
     * Resolve a module source ie. import "SOURCE"; to a custom value.
     * Called as resolveModuleSource(source, filename).
     *
     * @default null
     */
    resolveModuleSource?: any;

    /**
     * Enable code generation.
     *
     * @default true
     */
    code?: boolean;

    /**
     * Specify whether or not to use .babelrc and .babelignore files.
     *
     * @default true
     */
    babelrc?: boolean;

    /**
     * Include the AST in the returned object.
     *
     * @default true
     */
    ast?: boolean;

    /**
     * Do not include superfluous whitespace characters and line terminators.
     * When set to "auto" compact is set to true on input sizes of >100KB.
     *
     * @default "auto"
     */
    compact?: boolean | 'auto';

    /**
     * Should the output be minified (not printing last semicolons
     * in blocks, printing literal string values instead of escaped
     * ones, stripping () from new when safe).
     *
     * @default false
     */
    minified?: boolean;

    /**
     * Output comments in generated output.
     *
     * @default true
     */
    comments?: boolean;

    /**
     * An optional callback that controls whether a comment should
     * be output or not. Called as shouldPrintComment(commentContents).
     * NOTE: This overrides the comment option when used.
     *
     * @default null
     */
    shouldPrintComment?: (commentContents: any) => boolean;

    /**
     * This is an object of keys that represent different environments. For
     * example, you may have: { env: { production: { `specific options` } } }
     * which will use those options when the enviroment variable BABEL_ENV
     * is set to "production". If BABEL_ENV isn’t set then NODE_ENV will be
     * used, if it’s not set then it defaults to "development".
     *
     * @default {}
     */
    env?: any;

    /**
     * Retain line numbers. This will lead to wacky code but
     * is handy for scenarios where you can’t use source maps.
     * NOTE: This will not retain the columns.
     *
     * @default false
     */
    retainLines?: boolean;

    /**
     * A path to an .babelrc file to extend.
     *
     * @default null
     */
    extends?: string;
  }
}

declare function gulpBabel(options?: gulpBabel.Options): NodeJS.ReadWriteStream;

export = gulpBabel;
