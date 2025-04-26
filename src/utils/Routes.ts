const ROUTES = {
  PROJECT: {
    GET_ALL: {
      PATH: "/project/get-all",
      METHOD: "get",
    },
    GET_BY_ID: {
      PATH: "/project/get-by-id/:id",
      METHOD: "get",
    },
    CREATE: {
      PATH: "/project",
      METHOD: "post",
    },
    UPDATE: {
      PATH: "/project/:id",
      METHOD: "patch",
    },
    DELETE: {
      PATH: "/project/:id",
      METHOD: "delete",
    },
  },
};

export default ROUTES;
