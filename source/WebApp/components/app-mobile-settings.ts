import Vue from 'vue';
import '../ts/ui/setup/portal-vue';
import './app-select-language';
import './app-select-branch';
import './app-section-branch-details';
import './app-select-target';
import './app-select-mode';
import './app-cm6-preview-manager';
import type { AppOptions } from '../ts/types/app';
import type { Branch } from '../ts/types/branch';
import extendType from '../ts/helpers/extend-type';

export default Vue.component('app-mobile-settings', {
    props: {
        options: Object as () => AppOptions,
        branches: Array as () => ReadonlyArray<Branch>
    },
    data: () => extendType({
        modalOpen: false
    })<{
        escListener: (e: KeyboardEvent) => void;
    }>(),
    methods: {
        async openModalAsync() {
            this.escListener = e => {
                if (e.key === 'Escape')
                    this.closeModal();
            };
            this.modalOpen = true;
            document.addEventListener('keyup', this.escListener);
        },

        closeModal() {
            this.modalOpen = false;
            document.removeEventListener('keyup', this.escListener);
        }
    },
    template: '#app-mobile-settings'
});