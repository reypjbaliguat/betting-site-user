import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface Props {
    message?: string;
}

export const FormError = ({ message }: Props) => {
    if (!message) return null;
    return (
        <div className='flex w-full items-center justify-center gap-x-2 rounded-md bg-red-100 p-3 text-sm text-red-500'>
            <ExclamationTriangleIcon className='h-4 w-4' />
            <p>{message}</p>
        </div>
    );
};
