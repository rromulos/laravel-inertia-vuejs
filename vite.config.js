import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { QuasarResolver } from 'unplugin-vue-components/resolvers';
import { quasar } from '@quasar/vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        quasar({
            autoImportComponentCase: 'combined',
        }),

        AutoImport({
        imports: [
            'vue',
            'pinia',
            'quasar',
            {
            '@inertiajs/inertia': [
                'Inertia'
            ]
            },
            {
            '@inertiajs/inertia-vue3': [
                'usePage',
                'useForm'
            ]
            }
        ]
        }),

        Components({
            extensions: [
              'vue'
            ],
            directoryAsNamespace: true,
            deep: true,
            resolvers: [
              QuasarResolver(),
              (name) => {
                if (name === 'Head') {
                  return {
                    importName: 'Head',
                    path: '@inertiajs/inertia-vue3'
                  }
                }

                if (name === 'Link') {
                  return {
                    importName: 'Link',
                    path: '@inertiajs/inertia-vue3'
                  }
                }
              }
            ]
          }),
    ],
});
