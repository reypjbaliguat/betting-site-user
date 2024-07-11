import * as z from 'zod';

const userSchema = z.object({
    email: z
        .string({
            required_error: 'This field is required.'
        })
        .min(1, { message: 'This field is required.' })
        .email({ message: 'Invalid email format' }),
    password: z
        .string({
            required_error: 'This field is required.'
        })
        .optional(),
    credit: z
        .string({
            required_error: 'This field is required.'
        })
        .min(1, { message: 'This field is required.' }),
    role: z
        .string({
            required_error: 'This field is required.'
        })
        .min(1, { message: 'This field is required.' })
});

export default userSchema;

export type UserFormData = z.infer<typeof userSchema>;
