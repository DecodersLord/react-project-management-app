export default function Input({ label, textarea, ...props }) {
    const classes =
        "bg-zinc-200 focus:border-b-2 focus:outline-none focus:border-b-black text-black";

    return (
        <>
            <label htmlFor="Title" className="mt-4">
                {label}
            </label>
            {textarea ? (
                <textarea {...props} />
            ) : (
                <input {...props} className={classes} />
            )}
        </>
    );
}
