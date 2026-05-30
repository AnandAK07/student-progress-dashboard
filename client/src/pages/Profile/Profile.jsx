import DashboardLayout from "../../layouts/DashboardLayout";

function Profile() {

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">
        <div className="space-y-4">
          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-semibold">{userInfo?.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-semibold">{userInfo?.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Role</p>
            <p className="font-semibold capitalize">{userInfo?.role}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
