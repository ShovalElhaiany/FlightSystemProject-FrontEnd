export const apisSettings = (getApi, addApi, updateApi, deleteApi) => ({
    get: getApi ? getApi: undefined,
    add: addApi ? addApi: undefined,
    update: updateApi ? updateApi: undefined,
    delete: deleteApi ? deleteApi: undefined,
});

export const defaultTableSettings = (container, singular, parames) => ({
    title: container,
    url: `/${container}`,
    image: null,
    subjects: null,
    details: null,
    singular: singular,
    allowGet: true,
    allowAdd: singular ? false : true,
    allowUpdate: singular ? true : false,
    allowDelete: singular ? false : true,
    filterById: singular ? false : true,
    filterByParameters: singular ? [] : parames
});

export default { apisSettings, defaultTableSettings };