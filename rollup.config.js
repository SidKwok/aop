import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import alias from 'rollup-plugin-alias';
import eslint from 'rollup-plugin-eslint';
import cleanup from 'rollup-plugin-cleanup';

const IS_PROD = process.env.NODE_ENV === 'production';

const config = {
    entry: 'lib/index.js',
    dest: IS_PROD ? 'dist/aop.min.js' : 'dist/aop.js',
    format: 'umd',
    moduleName: 'Aop',
    sourceMap: false,
    plugins: [
        eslint(),
        buble(),
        alias(),
        filesize(),
        cleanup()
    ]
};

if (IS_PROD) {
    config.plugins.push(
        ...[
            uglify()
        ]
    );
}

export default config;
