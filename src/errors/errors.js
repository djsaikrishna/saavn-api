const ERRORS = {
   notFound: {
      CODE: 404,
      MSG: "Something went wrong. Make sure that you entered correct id.",
   },

   badRequest(missing_params) {
      return {
         CODE: 400,
         MSG: "One or more query params missing",
         MISSING_PARAMS: missing_params,
      };
   },
};

export default ERRORS;
