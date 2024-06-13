import {useState} from "react";
import Content1 from "./Content1";



export default function Content() {
    let [userInput, setUserInput] = useState({
        //already have first name ,last name , email but ,I want to add country and address
        fname :'' ,lname :'' ,email :'',country :'' ,address :''
    });

    let [displayChild, setDisplayChild] = useState(false)
    //first name

    function onChangefname(event){
        setUserInput((pre)=>{
            return {
                ...pre ,
                fname:event.target.value
            }
        })
    }

    //last name
    function onChangelname(event){
        setUserInput((pre)=> {
            return{
                ...pre ,
                lname:event.target.value
            }
        })
    }
    function onChangeemail(event){
        setUserInput((pre)=>{
            return{
                ...pre ,
                email:event.target.value
            }
        })
    }

    function onChangeaddress(event){
        setUserInput((pre)=>{
            return{
                ...pre ,
                address:event.target.value
            }
        })
    }

    function onChangecountry(event){
        setUserInput((pre)=>{
            return{
                ...pre ,
                country:event.target.value
            }
        })
    }

    function onSubmitForm(event){
        event.preventDefault()
        let{fname , lname,email,country,address }=userInput
        let user ={
            fname:fname ,lname:lname,email:email,country:country,address:address
        }
       // console.log(user)
       // setUserInput({
       //     fname: '', lname: '', email: '', country: '', address: ''
        //});
        setDisplayChild(true)


    }

    function oncancel() {
        setUserInput({
            fname: '', lname: '', email: '', country: '', address: ''
        });
    }




    return (
        <div style={{margin : '2rem', padding : '2rem'}}>
            <form onSubmit={onSubmitForm}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.fname}
                                        onChange={onChangefname}
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.lname}
                                        onChange={onChangelname}
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.email}
                                        onChange={onChangeemail}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Address
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.address}
                                        onChange={onChangeaddress}
                                        id={"address"}
                                        name={"address"}
                                        type={"address"}
                                        autoComplete={"address"}
                                        className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={userInput.country}
                                        onChange={onChangecountry}
                                        id={"country"}
                                        name={"country"}
                                        type={"country"}
                                        autoComplete={"country"}
                                        className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={oncancel}  >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>


            </form>
            {(displayChild && userInput.fname) && <Content1 name={userInput.fname}/>}
        </div>
    )
}