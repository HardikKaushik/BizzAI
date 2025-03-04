import React from 'react'

function Pricing() {
  return (
    <>
<section className="bg-purple-100  shadow-2xl z-20 relative   ">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl :text-white">
            Bring your Business to the <span className="text-blue-500">next level .</span>
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 :text-gray-300">
        Empower your business with **AI-driven automation**, **smart marketing**, and **seamless customer engagement**.  
    MyBizAI helps you manage inventory, boost sales, and build lasting customer relationships — all from a single dashboard.  
    Whether you're a **small business owner** or **growing enterprise**, MyBizAI ensures **efficiency, growth, and success**.        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
            <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Sign Up
            </a>
        </div>
    </div>
</section>
<section className="bg-white z-20 relative    :bg-gray-900">
    <div className="container px-20 py-[100px] mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl :text-gray-100">Simple, transparent pricing</h2>
                <p className="mt-4 text-gray-500 :text-gray-400">No Contracts. No surorise fees.</p>
            </div>

            <div className="overflow-hidden p-0.5 mt-6 border rounded-lg :border-gray-700">
                <div className="sm:-mx-0.5 flex">
                    <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">Monthly</button>
                    <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 :text-gray-200 :hover:bg-gray-800 bg-transparent rounded-lg hover:bg-purple-200">Yearly</button>
                </div>
            </div>
        </div>

        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-purple-200 :hover:bg-gray-800">
                <p className="text-lg font-medium text-gray-800 :text-gray-100">Intro</p>

                <h4 className="mt-2 text-3xl font-semibold text-gray-800 :text-gray-100">$19 <span className="text-base font-normal text-gray-600 :text-gray-400">/ Month</span></h4>
                
                <p className="mt-4 text-gray-500 :text-gray-300">For most businesses that want to optimaize web queries.</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">All limited links</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">Optimize hashtags</span>
                    </div>

                  
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose plan
                </button>
            </div>

            <div className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-purple-200 :hover:bg-gray-800">
                <p className="text-lg font-medium text-gray-800 :text-gray-100">Base</p>
                
                <h4 className="mt-2 text-3xl font-semibold text-gray-800 :text-gray-100">$39 <span className="text-base font-normal text-gray-600 :text-gray-400">/ Month</span></h4>
                
                <p className="mt-4 text-gray-500 :text-gray-300">For most businesses that want to optimaize web queries.</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">All limited links</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">Optimize hashtags</span>
                    </div>

                   
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose plan
                </button>
            </div>

            <div className="px-6 py-4 transition-colors duration-300 transform bg-purple-900 rounded-lg :bg-gray-800">
                <p className="text-lg font-medium text-gray-100">Popular</p>
                
                <h4 className="mt-2 text-3xl font-semibold text-gray-100">$99 <span className="text-base font-normal text-gray-400">/ Month</span></h4>
                
                <p className="mt-4 text-gray-300">For most businesses that want to optimaize web queries.</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-300">All limited links</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-300">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-300">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-300">Optimize hashtags</span>
                    </div>

                  
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose plan
                </button>
            </div>

            <div className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-purple-200 :hover:bg-gray-800">
                <p className="text-lg font-medium text-gray-800 :text-gray-100">Exterprise</p>
                
                <h4 className="mt-2 text-3xl font-semibold text-gray-800 :text-gray-100">$199 <span className="text-base font-normal text-gray-600 :text-gray-400">/ Month</span></h4>
                
                <p className="mt-4 text-gray-500 :text-gray-300">For most businesses that want to optimaize web queries.</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">All limited links</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 :text-gray-300">Optimize hashtags</span>
                    </div>

                 
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose plan
                </button>
            </div>
        </div>
    </div>
</section>



</>

)
}

export default Pricing