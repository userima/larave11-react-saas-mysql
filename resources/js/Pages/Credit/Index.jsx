import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import  { Head } from "@inertiajs/react";
import PackagesPricingCards from "@/Components/PackagesPricingCards";

export default function Index({ auth, packages, features, success, error }) {

    const avaliableCredits = auth.user.avaliable_credits;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Your Credits
                </h2>
            }
        >
            <Head title="Your Credits" />

            <div className="py-12 text-center">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    {success && <div className="rounded-lg bg-emerald-500 text-gray-100 p-3 mb-4">
                        {success}
                    </div> }

                    {error && <div className="rounded-lg bg-red-500 text-gray-100 p-3 mb-4">
                        {error}
                    </div> }

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg relative">
                        <img 
                            src="https://pngimg.com/uploads/coin/coin_PNG36868.png" 
                            alt="credits"
                            className="w-[100px] mx-auto" 
                        />
                        <h3 className="text-white text-2xl">
                            You have {avaliableCredits} credits.
                        </h3>
                    </div>
                </div>

                <PackagesPricingCards packages={packages.data} features={features.data} />

            </div>

        </AuthenticatedLayout>
    );

}