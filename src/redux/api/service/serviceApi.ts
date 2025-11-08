import baseApi from "../baseApi";

export const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: () => ({
        url: "/portfolio",
        method: "GET",
      }),
    }),

    getAbout: builder.query({
      query: () => ({
        url: "/portfolio/about",
        method: "GET",
      }),
    }),
    contactForm: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetPortfolioQuery,
  useGetAboutQuery,
  useContactFormMutation,
} = portfolioApi;
