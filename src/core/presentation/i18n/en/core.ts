import Locale from "@/core/domain/enums/Locale";

const core = {
  pages: {
    NotFoundPage: {
      head: {
        title: "Error 404",
      },
      message: "Page not found",
      backHomeButton: "Back to home",
    },
  },
  components: {},
  errors: {
    contextNotProvided: "{{contextName}} is not provided.",
  },
  enums: {
    Locale: {
      [Locale.English]: "English",
      [Locale.Spanish]: "Spanish",
    },
  },
};

export default core;
