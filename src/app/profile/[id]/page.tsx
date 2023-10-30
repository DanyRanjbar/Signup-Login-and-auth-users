export default function UserProfile({params}:any) {
    return(
        <div className=" flex flex-col items-center justify-center py-2 min-h-screen">
            <h1>Profile</h1>
            <hr />
            <p className=" text-4xl">Profile Page <span className=" p-2 rounded bg-blue-600 ml-2">{params.id}</span></p>

        </div>
    )
}