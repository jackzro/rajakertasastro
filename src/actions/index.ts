import { defineAction, z } from "astro:actions";

export const server = {
  like: defineAction({
    input: z.object({ postId: z.string() }),
    handler: async ({ postId }) => {
      // update likes in db
      //   return likes;
    },
  }),
  comment: defineAction({
    accept: "form",
    input: z.object({
      postId: z.string(),
      author: z.string(),
      body: z.string(),
    }),
    handler: async ({ postId }) => {
      // insert comments in db
      //   return comment;
    },
  }),
  pesan: defineAction({
    accept: "form",
    input: z.object({
      nama: z.string(),
      email: z.string(),
      pesan: z.string(),
    }),
    handler: async ({ nama, email, pesan }) => {
      // insert comments in db
      return nama;
    },
  }),
};
