const sanitizeAttributes = (data = {}, customFieldsToHide) => {
  const fieldsToHide = customFieldsToHide ?? ['createdAt', 'updatedAt', 'publishedAt'];

  return Object.keys(data).filter((attr) => !fieldsToHide.includes(attr)).reduce((obj, key) => {
    return {
      ...obj,
      [key]: data[key]
    };
  }, {});
}

const sanitizeArray = (data = [], customFieldsToHide) => {
  const arr = Array.isArray(data) ? data : [];

  return arr.map((item) => {
    return {
      id: item.id,
      ...sanitizeAttributes(item.attributes, customFieldsToHide)
    }
  })
}

const sanitizeObject = (data = {}, customFieldsToHide) => {
  return {
    id: data.id,
    ...sanitizeAttributes(data.attributes, customFieldsToHide)
  }
}

module.exports = {
  sanitizeAttributes,
  sanitizeArray,
  sanitizeObject
}