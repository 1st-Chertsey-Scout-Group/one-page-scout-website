import { defineCollection, z } from "astro:content";

const sectionsCollection = defineCollection({
    type: "data",
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            type: z.enum(["squirrels", "beavers", "cubs", "scouts"]),
            meetingDay: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]),
            meetingStartTime: z.string(),
            meetingEndTime: z.string(),
            order: z.number(),
            image: image()
        }),
});

export const collections = {
    sections: sectionsCollection,
};