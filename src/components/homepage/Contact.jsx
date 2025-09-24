import React from 'react'
import Form from './Form'
import Info from './Info'

const Contact = () => {
    return (
        <div>
            <section className="px-8 lg:px-10"> {/* ✅ small devices px-2 */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-center">
                    {/* Moviecard */}
                    <div className="col-span-6 w-full lg:px-0 lg:block hidden"> {/* ✅ w-full instead of justify-center */}
                        <Info />
                    </div>

                    {/* Form */}
                    <div className="col-span-6 w-full lg:px-14 mt-20"> {/* ✅ w-full instead of justify-center */}
                        <Form />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact