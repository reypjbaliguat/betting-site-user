import * as z from 'zod';

const schema = z.object({
    email: z
        .string({ required_error: 'Email is required' })
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email format' })
        .max(124, 'Email must only have maximum of 124 characters'),
    password: z.string({ required_error: 'Password is required' }).min(1, { message: 'Password is required' })
});
export default schema;

export type SignInPayload = z.infer<typeof schema>;
