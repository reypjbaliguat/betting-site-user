import * as z from 'zod';

const schema = z
    .object({
        email: z
            .string({ required_error: 'Email is required' })
            .min(1, { message: 'Email is required' })
            .email({ message: 'Invalid email format' })
            .max(124, 'Email must only have maximum of 124 characters'),
        password: z.string({ required_error: 'Password is required' }).min(1, { message: 'Password is required' }),
        confirmPassword: z.string({ required_error: 'Confirm Password is required' }).min(1, { message: 'Confirm Password is required' })
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'The passwords did not match',
                path: ['confirmPassword']
            });
        }
    });
export default schema;

export type SignUpPayload = z.infer<typeof schema>;
