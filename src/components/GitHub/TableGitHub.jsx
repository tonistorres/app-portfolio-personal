import React, { useContext } from 'react';
import MyContext from '../MyContext/MyContext';
import { FaSearchengin } from 'react-icons/fa';
import './AvatarGitHub.css';

function TableGitHub() {
  const value = useContext(MyContext);

  return (
    <>

      <form className='form-inline'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text p-sm-559-d-none '><FaSearchengin size={25} /></span>
          </div>
          <input
            type="text"
            className='form-control mr-3 form-control mr-3 p-sm-559-d-none '
            placeholder='Digite Repository'
            name='searchFilter'
            value={value.filterTable}
            onChange={value.handleUpdateStatus}
          />
        </div>
      </form>

      <table className="table-responsive p-2 p-sm-415-d-none">
        <thead className='table-thead'>
          <tr>
            <th className='p-sm-648-d-none' scope="col">Id</th>
            <th className='p-sm-559-d-none' scope="col">Repositories</th>
            <th scope="col">url(s)</th>
            <th className='p-sm-1265-d-none' scope="col">Description(s)</th>
          </tr>
        </thead>
        <tbody>
          {
            value.arrayRepositories.length > 0 && value.arrayRepositories
              .filter((repo) => repo.name.toLowerCase().includes(value.filterTable.toLowerCase()))
              .map(({ id, name, html_url, description }) => (
                <tr key={id}>
                  <td className='table-tbody-td p-sm-648-d-none '>{id}</td>
                  <td className='table-tbody-td p-sm-559-d-none'>{name}</td>
                  <td className='table-tbody-td p-2'><a href={html_url} target="_blank">{html_url}</a></td>
                  <td className='table-tbody-td p-sm-1265-d-none'>{description}</td>
                </tr>
              ))

          }
        </tbody>
      </table>
    </>
  );
}

export default TableGitHub;