import axios from 'axios';

export default {
    namespaced: true,

    state: {},

    getters: {
        activeCompanyType: state => state.breadcrumb[state.breadcrumb.length - 1]
        // countLinks: state => state.links.length
    },

    mutations: {
        SET_ALL_COMPANY_TYPES: (state, companyTypes) => {
            state.allCompanyTypes = companyTypes;
        },

        SET_BREADCRUMB: (state, breadcrumb) => {
            state.breadcrumb = breadcrumb;
        },

        SET_ACTIVE_COMPANY_TYPES: (state, companyTypes) => {
            state.activeCompanyTypes = companyTypes;
        },
    },

    actions: {
        setAllCompanyTypes: (context) => {
            axios.get('/adminpanel/mod/ajax/company-types/get-all/')
                .then(({ data }) => {
                    context.commit('SET_ALL_COMPANY_TYPES', data);
                })
                .catch((error) => {
                    context.commit('SET_ALL_COMPANY_TYPES', false);
                });
        },

        /**
         * When user browses to the company types list or clicks a sub company type
         * execute this to get the list of company types to show. I.e. only the top
         * level ones or the direct children of one.
         *
         * Also get a "breadcrumb", i.e. all the company types they browsed through
         * to reach the current one.
         */
        setActiveCompanyTypes: (context, id) => {
            let url = '/adminpanel/mod/ajax/company-types/list/';
            if(id) url += id;

            axios.get(url)
                .then((response) => {
                    context.commit('SET_BREADCRUMB', response.data.breadcrumb);
                    context.commit('SET_ACTIVE_COMPANY_TYPES', response.data.companyTypes);
                })
                .catch((error) => {
                    throw new Error(error);
                });
        }
    },

};