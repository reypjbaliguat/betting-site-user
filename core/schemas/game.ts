import * as z from 'zod';

const gameSchema = z.object({
    name: z
        .string({
            required_error: 'This field is required.'
        })
        .min(1, { message: 'This field is required.' })
        .max(68, { message: 'Maximum character exceeded.' }),
    description: z
        .string({
            required_error: 'This field is required.'
        })
        .min(1, { message: 'This field is required.' })
        .max(128, { message: 'Maximum character exceeded.' }),
    totalFights: z
        .string({
            required_error: 'This field is required.'
        })
        .min(1, { message: 'This field is required.' })
});

export default gameSchema;

export type GameFormData = z.infer<typeof gameSchema>;
