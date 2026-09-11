import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const LoginSchema = z.object({
    email: z.email('Enter a valid email'),
    password: z.string().min(1, 'Enter your password'),
})

export type LoginFormData = z.infer<typeof LoginSchema>

export function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
    })

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data)
            })}
            className="mx-auto flex w-full max-w-md flex-col gap-4 p-6"
        >
            <input
                type="email"
                placeholder="Enter Your Email"
                {...register('email')}
                aria-invalid={Boolean(errors.email)}
                className="rounded border border-gray-300 p-2"
            />
            <br />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            <br />
            <input
                type="password"
                placeholder="Enter Your Password"
                {...register('password')}
                aria-invalid={Boolean(errors.password)}
                className="rounded border border-gray-300 p-2"
            />
            <br />
            {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
            )}
            <br />
            <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
                Submit
            </button>
        </form>
    )
}