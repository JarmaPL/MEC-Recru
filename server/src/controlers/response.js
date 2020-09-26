//Success response "200"
export const success = (res, status) => (entity) => {
  if (entity) {
    res.status(status || 200).json(entity);
  }
  return null;
};

//Response if not found elemet "404"
export const notFound = (res) => (entity) => {
  if (entity) {
    return entity;
  }
  res.status(404).end();
  return null;
};

//Response if some data are wrong 🤨 "400"
export const badRequest = (res) => (entity) => {
  if (entity) {
    return entity;
  }
  res.status(400).end();
  return null;
};
