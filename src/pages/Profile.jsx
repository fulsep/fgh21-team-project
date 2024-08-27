import React from "react"
import Layout from "../components/Layout"





function Profile(){
    return(
    <Layout>
        <div className='min-h-screen p-10'>
            <div className="w-full mt-40 flex justify-center bg-slate-400 pt-20 pb-20 rounded-3xl">
                <table className="text-white text-4xl">
                        <tr className="">
                            <td className=" pl-11">Name :</td> 
                            <td className="pl-11">John Doe</td>                         
                        </tr>
                        <tr className="">
                            <td className="  pl-11">Age :</td>
                            <td className="pl-11">31</td>    
                        </tr>  
                        <tr className="">
                            <td className="  pl-11">Address :</td>
                            <td className="pl-11">New York City</td>    
                        </tr>              
                        <tr className="">
                            <td className="  pl-11">Phone Number :</td>
                            <td className="pl-11">0875991001</td>    
                        </tr>              
                        <tr className="">
                            <td className="  pl-11">Profession :</td>
                            <td className="pl-11">Fullstack Developer</td>    
                        </tr>                               
                </table>
            </div>
        </div>
    </Layout>
    )
}
export default Profile