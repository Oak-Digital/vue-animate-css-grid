import { App } from 'vue';
import * as components from './components';

function install(app: App) {
    for (const key in components) {
        // @ts-expect-error - there is no way to type this
        app.component(key, components[key]);
    }
}

export default { install };

export * from './components';
