import PropTypes from "prop-types";

export default function UsersTable({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user?.id}</th>
                <td>{user?.first_name}</td>
                <td>{user?.last_name}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

UsersTable.propTypes = {
  data: PropTypes.array,
};
