import { Route, Routes } from 'react-router';
import { SearchPage } from '../component/SearchPage';

// function Search() {
//   return (
//     <div>
//       <div>Search page</div>
//       <Link to="/app/dashboard">
//         <Button>Dashboard</Button>
//       </Link>
//     </div>
//   );
// }

export const SearchRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<SearchPage />} />
    </Routes>
  );
};
