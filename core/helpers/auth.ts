export const getUserByEmail = async (email: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/email/${email}`);
    const user = await res.json();
    return user;
};
