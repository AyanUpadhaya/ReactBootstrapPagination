import { useState } from "react";
import UsersTable from "./components/Tables/UsersTable";
import { getLength, getUsers } from "./mockdata/userdata";
import Pagination from "./components/UI/Pagination";
import SelecLimit from "./components/UI/SelecLimit"
function App() {
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(5);
  const users = getUsers(page, limit);

  const totalPage = Math.ceil(getLength() / limit);

  const handlePageChange = (value)=>{
    if (value == "&laquo;" || value == "...") {
      setPage(1);
    } else if (value == "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value == "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value == "&raquo;" || value == "...") {
      setPage(10);
    } else {
      setPage(value);
    }
  }

  let pageNo;
  if(page <= totalPage){
    pageNo = page;
  }else{
    setPage(totalPage)
    pageNo = page;
  }

  return (
    <div className="container ">
      <UsersTable data={users}></UsersTable>
      <div className="d-flex justify-content-end">
        <SelecLimit onChangeLimit={setLimit}></SelecLimit>
        <Pagination
          totalPage={totalPage}
          page={pageNo}
          limit={limit}
          siblings={2}
          onChangePage={handlePageChange}
        ></Pagination>
      </div>
    </div>
  );
}

export default App;
