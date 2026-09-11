import { useForm } from "react-hook-form";

export function ResetForm() {
    const { register, handleSubmit, reset } = useForm<{ name: string }>();
    return (
        <>
            <form onSubmit={handleSubmit((name) => {
                console.log(name);
                reset()
            })}>
                <input type="text" placeholder="Enter Your Name" {...register('name')} />
                <button type="submit">submit</button>
            </form>
        </>
    )
}