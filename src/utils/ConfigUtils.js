// Function to generate API settings
// Using default parameters to avoid ternary checks
export const apisSettings = (
    getApi, 
    addApi, 
    updateApi, 
    deleteApi, 
    searchApi
  ) => ({
    get: getApi || undefined,
    add: addApi || undefined,
    update: updateApi || undefined,
    delete: deleteApi || undefined,
    search: searchApi || undefined,
  });
  
  // Function to generate default table settings
  // This simplifies the code and makes it more readable
  export const defaultTableSettings = (
    container, 
    singular, 
    id, 
    params, 
    apisSettings
  ) => ({
    title: container,
    url: `/${container}`,
    image: null,
    subjects: null,
    details: null,
    singular,
    id,
    // Directly use Boolean() conversion
    allowGet: Boolean(apisSettings.get),
    allowAdd: !singular && Boolean(apisSettings.add),
    allowUpdate: singular && Boolean(apisSettings.update),
    allowDelete: !singular && Boolean(apisSettings.delete),
    filterById: !singular && Boolean(apisSettings.filterById),
    filterByParameters: singular ? [] : params,
  });
  
  // Function to create config by combining API and table settings
  export function createConfig(container, singular, id, params, apis) {
    const apiConfig = apisSettings(...apis);
    return {
      tableSettings: defaultTableSettings(container, singular, id, params, apiConfig),
      apisSettings: apiConfig,
    };
  };
  
  // Export all the utilities
  export default { apisSettings, defaultTableSettings, createConfig };
  