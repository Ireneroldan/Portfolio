import React from 'react'

function Contact() {
    return (
        <div className="flex min-h-screen items-center justify-start bg-background">
            <div className="mx-auto w-full max-w-lg">
                <h1 className="text-4xl font-medium text-white text-center">Hire me</h1>
                <p className="mt-3 text-primary">Email me at irene.roldan.montiel.com or message me here:</p>

                <form className="mt-10">
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative z-0">
                            <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-secundary focus:outline-none focus:ring-0" placeholder=" " />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secundary peer-focus:dark:text-primary">Your name</label>
                        </div>
                        <div className="relative z-0">
                            <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-secundary focus:outline-none focus:ring-0" placeholder=" " />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secundary peer-focus:dark:text-primary">Your email</label>
                        </div>
                        <div className="relative z-0 col-span-2">
                            <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-secundary focus:outline-none focus:ring-0" placeholder=" "></textarea>
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secundary peer-focus:dark:text-primary">Your message</label>
                        </div>
                    </div>
                    <button type="submit" className="mt-5 rounded-md bg-accent px-10 py-2 text-background">Send Message</button>
                </form>
            </div>
        </div>
    )
}
export default Contact