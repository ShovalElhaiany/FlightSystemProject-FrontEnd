export const apisSettings = (getApi, addApi, updateApi, deleteApi, searchApi) => ({
    get: getApi ? getApi : undefined,
    add: addApi ? addApi : undefined,
    update: updateApi ? updateApi : undefined,
    delete: deleteApi ? deleteApi : undefined,
    search: searchApi ? searchApi : undefined,
});

export const defaultTableSettings = (container, singular, params, apisSettings) => ({
    title: container,
    url: `/${container}`,
    image: null,
    subjects: null,
    details: null,
    singular: singular,
    allowGet: Boolean(apisSettings.get),
    allowAdd: !singular && Boolean(apisSettings.add),
    allowUpdate: singular && Boolean(apisSettings.update),
    allowDelete: !singular && Boolean(apisSettings.delete),
    filterById: !singular && Boolean(apisSettings.filterById),
    filterByParameters: singular ? [] : params,
});

export function createConfig(container, singular, params, apis) {
    const apiConfig = apisSettings(...apis);
    return {
        tableSettings: defaultTableSettings(container, singular, params, apiConfig),
        apisSettings: apiConfig,
    };
};

export default { apisSettings, defaultTableSettings, createConfig };
